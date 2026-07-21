import "./Dashboard.css";
import {
  FaComments,
  FaFileAlt,
  FaCode,
  FaMicrophone,
  FaPlus,
  FaArrowUp,
} from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import Navbar from "./Navbar";

function Dashboard() {
  const {
    setCurrentPage,
    prompt,
    setPrompt,
  } = useContext(MyContext);

  return (
    <div className="dashboard">

      <Navbar />

      <h1>👋 Welcome to GaurangiGPT</h1>

      <p>Your Personal AI Workspace</p>

      {/* ================= Feature Cards ================= */}

      <div className="cardContainer">

        <div
          className="featureCard purple"
          onClick={() => setCurrentPage("chat")}
        >
          <div className="iconCircle">
            <FaComments className="cardIcon" />
          </div>

          <h3>AI Chat</h3>

          <p>Chat with your personal AI assistant.</p>

          <span className="status">Available</span>
        </div>

        <div className="featureCard blue">

          <div className="iconCircle">
            <FaFileAlt className="cardIcon" />
          </div>

          <h3>PDF Chat</h3>

          <p>Upload PDFs and ask questions.</p>

          <span className="status">Coming Soon</span>

        </div>

        <div className="featureCard green">

          <div className="iconCircle">
            <FaCode className="cardIcon" />
          </div>

          <h3>Code Assistant</h3>

          <p>Generate and debug code instantly.</p>

          <span className="status">Coming Soon</span>

        </div>

        <div className="featureCard orange">

          <div className="iconCircle">
            <FaMicrophone className="cardIcon" />
          </div>

          <h3>Voice AI</h3>

          <p>Talk with AI using your voice.</p>

          <span className="status">Coming Soon</span>

        </div>

      </div>

      {/* ================= Quick Chat ================= */}

      <div className="quickChat">

        <div className="dashboardChatInput">

          <button className="iconBtn">
            <FaPlus />
          </button>

          <input
            type="text"
            placeholder="Ask anything..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button className="iconBtn">
            <FaMicrophone />
          </button>

          <button className="sendBtn">
            <FaArrowUp />
          </button>

        </div>

        <small>
          GaurangiGPT may make mistakes. Verify important information.
        </small>

      </div>

    </div>
  );
}

export default Dashboard;