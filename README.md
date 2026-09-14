# 🤖 GaurangiGPT

GaurangiGPT is a personal AI chatbot web application that allows users to interact with an AI assistant, create multiple chat threads, view previous conversations, and manage chat history.

The project is built using React for the frontend, Node.js and Express for the backend, MongoDB for storing conversations, and an AI API through OpenRouter for generating responses.

---

## 🚀 Live Demo

### 🌐 Frontend
https://gaurangi-gpt.vercel.app/

### ⚙️ Backend API
https://gaurangigpt.onrender.com

### 💻 GitHub Repository
https://github.com/Gaurangi2904/GaurangiGPT

---

## 📌 Project Overview

GaurangiGPT is designed as a personal AI workspace where users can start new conversations and interact with an AI assistant.

The application follows a client-server architecture:

Frontend → Backend API → AI Model  
                     ↓  
                 MongoDB

The frontend communicates with the backend through REST APIs. The backend processes chat requests, sends the user's message to the AI model, stores conversations in MongoDB, and returns the AI-generated response to the frontend.

---

## ✨ Features

### 💬 AI Chat
- Chat with an AI assistant
- Send messages and receive AI-generated responses
- Loading indicator while waiting for a response
- Markdown and code highlighting support

### 🧵 Chat Threads
- Create new conversations
- Each conversation has a unique thread ID
- Store multiple messages inside a thread
- View previous conversations
- Switch between previous conversations

### 🗑️ Chat History
- Display previous chat threads
- Automatically sort threads by recently updated
- Delete individual chat threads

### 🏠 Dashboard
- Personal AI workspace dashboard
- Quick access to AI Chat
- Feature cards for upcoming functionality

### 🔮 Planned Features
The dashboard currently contains placeholders for:

- 📄 PDF Chat
- 💻 Code Assistant
- 🎤 Voice AI
- ⚙️ Advanced Settings

These features are planned for future development.

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- React Icons
- React Markdown
- Highlight.js
- React Spinners
- UUID

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

### AI

- OpenRouter API
- Google Gemma model
- OpenAI SDK for API communication

### Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

## 🏗️ Project Architecture

```text
                    ┌─────────────────────────┐
                    │       User / Browser    │
                    └────────────┬────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │   React + Vite Frontend │
                    │        Vercel            │
                    └────────────┬────────────┘
                                 │
                         REST API Requests
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │   Node.js + Express     │
                    │        Render           │
                    └──────────┬───────┬──────┘
                               │       │
                    ┌──────────┘       └─────────────┐
                    ▼                                ▼
          ┌─────────────────┐              ┌─────────────────┐
          │  MongoDB Atlas  │              │    OpenRouter   │
          │ Chat Threads    │              │   AI Model      │
          └─────────────────┘              └────────┬────────┘
                                                     │
                                                     ▼
                                              AI Generated Reply
