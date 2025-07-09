# 📝 Note Making App

A full-stack **Note Making Application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. This app allows users to register, log in, create, view, and delete their personal notes securely.

---

## 🚀 Features

- ✅ User registration and login using JWT-based authentication
- ✅ Create and manage notes (CRUD functionality)
- ✅ User-specific notes (only logged-in users can access their data)
- ✅ Logout with session clearing
- ✅ Authentication middleware for protected routes
- ✅ Modern React frontend with Tailwind CSS styling
- ✅ Cookie-based session handling with `httpOnly` security

---

## 🔧 Technologies Used

- **Frontend**: React.js, Axios, Tailwind CSS, React Router
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT, bcrypt
- **Other**: dotenv, cookie-parser

---

## 📁 Project Structure

note-app/
├── backend/
│ ├── models/ # Mongoose models (User, Note)
│ ├── routes/ # Express routes (user, notes)
│ ├── controllers/ # Logic for auth and notes
│ ├── middleware/ # JWT authentication middleware
│ ├── .env # Environment config
│ └── index.js # Server entry point
├── frontend/
│ ├── src/
│ │ ├── components/ # Header, CreateNote, NotesList
│ │ ├── pages/ # Register, Login, Home
│ │ └── App.jsx # Route definitions
└── README.md

2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file in the backend folder:

ini
Copy
Edit
PORT=3000
MONGODB_URI=your_mongodb_connection_string
jwt_key=your_secret_jwt_key
NODE_ENV=development
Start the backend server:

bash
Copy
Edit
nodemon index.js
3. Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
The frontend will be available at: http://localhost:5173

🔐 Authentication
On login, a JWT token is created and stored in a secure httpOnly cookie.

Protected routes (e.g. /api/notes) require a valid token to access.

userAuth middleware ensures only authenticated users can create/delete/view notes.

🧪 API Routes Overview
Auth Routes
Route	Method	Description
/api/register	POST	Register new user
/api/login	POST	Login user
/api/logout	POST	Logout and clear cookie

Notes Routes (Protected)
Route	Method	Description
/api/notes	GET	Get user's notes
/api/notes	POST	Create a note
/api/notes/:id	DELETE	Delete a note

📸 UI Snapshots
Home – Welcome page with Register/Login buttons

Register – New user form

Login – Existing user login form

Dashboard – Note creation and display section

Logout – Header button to securely log out



🧑‍💼 Assignment Objective
This application demonstrates understanding of:

Secure user authentication

RESTful API development with Express.js

Protected routes with middleware

Frontend integration with backend via Axios

React functional components and state management

UI building with Tailwind CSS

📄 License
This project is open-source and available for educational or demo purposes.

🙌 Acknowledgments
Thanks to the company for this opportunity. Looking forward to further discussions.

yaml
Copy
Edit
