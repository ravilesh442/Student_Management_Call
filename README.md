# 📘 Full-Stack Student Management & Chat System

A complete full-stack application that combines a **Student Management System** with a real-time **Chat App**, built using modern technologies.

---

## 🧠 Key Modules

### 🎓 Student Management System

A backend-powered student records dashboard that lets you:

- ✅ List all students with pagination
- 🔍 Search students by name or email
- ✏️ Perform CRUD operations (Create, Read, Update, Delete)
- ⚙️ Built using **Node.js**, **Express.js**, and **MySQL**

### 💬 Chat Application

A real-time chat interface built with **CometChat**:

- 👤 Supports user and group chats
- 🎨 Fully theme-customizable (light/dark/system)
- 🔊 Audio bubble recoloring using canvas
- 📱 Built with **React.js**, **TypeScript**, and **CometChat UI Kit**

---

## 🛠️ Tech Stack

### 🔹 Frontend

- React.js
- TypeScript
- Axios
- React Hooks
- CSS Variables
- CometChat UI Kit

### 🔸 Backend

- Node.js
- Express.js
- MySQL (with `mysql2`)
- RESTful API architecture
- Error handling & validation

---

## 📦 Features

### ✅ Student Management

- 📋 View students (with pagination)
- 🔍 Search by name or email
- ✏️ Add, edit, delete students
- 🔐 Server-side validations & error handling

### 💬 Chat App

- 👥 One-on-one and group chats
- 🎨 Dynamic themes (light, dark, system)
- 🔧 Custom font and brand color support
- 🖼️ Canvas recoloring for audio bubbles
- 🔌 CometChat login/logout handling

---

## 📂 Project Structure

yaml
Copy code

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/student-chat-app.git
cd student-chat-app
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file with:

ini
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=student_db
PORT=5000
Start the server:

bash
Copy code
npm start
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
Configure your CometChat keys:

ts
Copy code
// config/cometchat.config.js
export const COMETCHAT_CONSTANTS = {
  APP_ID: 'YOUR_APP_ID',
  REGION: 'YOUR_REGION',
  AUTH_KEY: 'YOUR_AUTH_KEY',
};
Start the frontend:

bash
Copy code
npm start
Open http://localhost:3000

🔑 GitHub Authentication (Optional)
If pushing to private GitHub repos, use a Personal Access Token:

Go to GitHub → Settings → Developer settings → Personal Access Tokens

Generate a new token with repo scope

Use it as your password when pushing via HTTPS

📝 License
This project is licensed under the MIT License.
---


