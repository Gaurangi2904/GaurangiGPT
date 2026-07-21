import "./Navbar.css";
import { FaCrown } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      {/* Left Section */}

      <div className="logoSection">

        <div className="logoCircle">
          🤖
        </div>

        <div>
          <h2>GaurangiGPT</h2>
          <p>Your Personal AI Workspace</p>
        </div>

      </div>

      {/* Right Section */}

      <div className="rightSection">

        <button
          className="upgradeBtn"
          title="Upgrade to Premium"
        >
          <FaCrown />
          <span>Upgrade</span>
        </button>

        <div
          className="profile"
          title="Gaurangi Kapare"
        >
          GK
        </div>

      </div>

    </header>
  );
}

export default Navbar;