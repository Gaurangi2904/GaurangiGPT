import "./App.css";
import { useState } from "react";
import { v1 as uuidv1 } from "uuid";

import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import ChatWindow from "./ChatWindow";
import { MyContext } from "./MyContext";

function App() {

    // Chat States
    const [prompt, setPrompt] = useState("");
    const [reply, setReply] = useState(null);

    // Thread States
    const [currThreadId, setCurrThreadId] = useState(uuidv1());
    const [prevChats, setPrevChats] = useState([]);
    const [allThreads, setAllThreads] = useState([]);
    const [newChat, setNewChat] = useState(true);

    // Navigation
    const [currentPage, setCurrentPage] = useState("dashboard");

    const providerValues = {

        prompt,
        setPrompt,

        reply,
        setReply,

        currThreadId,
        setCurrThreadId,

        prevChats,
        setPrevChats,

        allThreads,
        setAllThreads,

        newChat,
        setNewChat,

        currentPage,
        setCurrentPage,

    };

    return (

        <MyContext.Provider value={providerValues}>

            <div className="app">

                <Sidebar />

                {

                    currentPage === "dashboard"

                    ? <Dashboard />

                    : <ChatWindow />

                }

            </div>

        </MyContext.Provider>

    );

}

export default App;