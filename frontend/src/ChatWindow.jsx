import {
  FaPlus,
  FaArrowUp,
  FaMicrophone,
} from "react-icons/fa";
import "./Dashboard.css";
import "./ChatWindow.css";
import Chat from "./Chat";
import { MyContext } from "./MyContext";
import { useContext, useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

function ChatWindow() {

    const {
        prompt,
        setPrompt,
        reply,
        setReply,
        currThreadId,
        setPrevChats,
        setNewChat,
    } = useContext(MyContext);

    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const getReply = async () => {

        if (!prompt.trim()) return;

        setLoading(true);
        setNewChat(false);

        try {

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, 
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message: prompt,
                        threadId: currThreadId,
                    }),
                }
            );

            const res = await response.json();

            setReply(res.reply);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {

        if (prompt && reply) {

            setPrevChats((prev) => [

                ...prev,

                {
                    role: "user",
                    content: prompt,
                },

                {
                    role: "assistant",
                    content: reply,
                },

            ]);

            setPrompt("");
        }

    }, [reply]);

    return (

        <div className="chatWindow">

            {/* Navbar */}

            <div className="navbar">

                <span
                    style={{
                        fontWeight: "600",
                        fontSize: "20px",
                    }}
                >
                    🤖 GaurangiGPT
                </span>

                <div
                    className="userIconDiv"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="userIcon">
                        <i className="fa-solid fa-user"></i>
                    </span>
                </div>

            </div>

            {/* Dropdown */}

            {

                isOpen && (

                    <div className="dropDown">

                        <div className="dropDownItem">
                            <i className="fa-solid fa-gear"></i>
                            {" "}Settings
                        </div>

                        <div className="dropDownItem">
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            {" "}Upgrade Plan
                        </div>

                        <div className="dropDownItem">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            {" "}Logout
                        </div>

                    </div>

                )

            }

            {/* Chat */}

            <Chat />

            {/* Loader */}

            <ScaleLoader
                color="#8B5CF6"
                loading={loading}
            />

            {/* Input */}

          <div className="chatInput">

  <div className="dashboardChatInput">

    <button className="iconBtn">
      <FaPlus />
    </button>

    <input
      type="text"
      placeholder="Ask anything..."
      value={prompt}
      onChange={(e) => setPrompt(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          getReply();
        }
      }}
    />

    <button className="iconBtn">
      <FaMicrophone />
    </button>

    <button
      className="sendBtn"
      onClick={getReply}
    >
      <FaArrowUp />
    </button>

  </div>

  <p className="info">
    GaurangiGPT may make mistakes. Verify important information.
  </p>

</div>
                    

        </div>

    );
}

export default ChatWindow;