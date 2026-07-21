import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import { v1 as uuidv1 } from "uuid";
import {
  FaHome,
  FaComments,
  FaFileAlt,
  FaCode,
  FaCog,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

function Sidebar() {
  const {
    allThreads,
    setAllThreads,
    currThreadId,
    setNewChat,
    setPrompt,
    setReply,
    setCurrThreadId,
    setPrevChats,
    currentPage,
    setCurrentPage,
  } = useContext(MyContext);

  const getAllThreads = async () => {
    try {
      const response = await fetch("https://gaurangigpt.onrender.com/api/thread");
      const res = await response.json();

      setAllThreads(
        res.map((thread) => ({
          threadId: thread.threadId,
          title: thread.title,
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllThreads();
  }, [currThreadId]);

  const createNewChat = () => {
    setNewChat(true);
    setPrompt("");
    setReply(null);
    setCurrThreadId(uuidv1());
    setPrevChats([]);
    setCurrentPage("chat");
  };

  const changeThread = async (newThreadId) => {
    setCurrThreadId(newThreadId);

    try {
      const response = await fetch(
        `http://localhost:8080/api/thread/${newThreadId}`
      );

      const res = await response.json();

      setPrevChats(res);
      setNewChat(false);
      setReply(null);

      // Open chat page automatically
      setCurrentPage("chat");
    } catch (err) {
      console.log(err);
    }
  };

  const deleteThread = async (threadId) => {
    try {
      await fetch(`http://localhost:8080/api/thread/${threadId}`, {
        method: "DELETE",
      });

      setAllThreads((prev) =>
        prev.filter((thread) => thread.threadId !== threadId)
      );

      if (threadId === currThreadId) {
        createNewChat();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="sidebar">

      {/* New Chat */}

      <button onClick={createNewChat}>
        <FaPlus />
        <span>New Chat</span>
      </button>

      {/* Navigation */}

      <div className="menu">

        <div
          className={`menuItem ${
            currentPage === "dashboard" ? "activeMenu" : ""
          }`}
          onClick={() => setCurrentPage("dashboard")}
        >
          <FaHome />
          <span>Dashboard</span>
        </div>

        <div
          className={`menuItem ${
            currentPage === "chat" ? "activeMenu" : ""
          }`}
          onClick={() => setCurrentPage("chat")}
        >
          <FaComments />
          <span>AI Chat</span>
        </div>

        <div className="menuItem">
          <FaFileAlt />
          <span>PDF Chat</span>
        </div>

        <div className="menuItem">
          <FaCode />
          <span>Code Assistant</span>
        </div>

        <div className="menuItem">
          <FaCog />
          <span>Settings</span>
        </div>

      </div>

      {/* History */}

      <ul className="history">

        {allThreads?.map((thread) => (
          <li
            key={thread.threadId}
            onClick={() => changeThread(thread.threadId)}
            className={
              thread.threadId === currThreadId
                ? "highlighted"
                : ""
            }
          >
            <span>{thread.title}</span>

            <FaTrash
              onClick={(e) => {
                e.stopPropagation();
                deleteThread(thread.threadId);
              }}
            />
          </li>
        ))}

      </ul>

      {/* Footer */}

      <div className="sign">
        <p>GaurangiGPT</p>
        <small>Made with ❤️ by Gaurangi Kapare</small>
      </div>

    </section>
  );
}

export default Sidebar;