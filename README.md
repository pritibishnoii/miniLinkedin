Project Title: Mini LinkedIn Clone
Live Link: https://mini-linkedin-lime.vercel.app
<img width="1920" height="1080" alt="Screenshot (64)" src="https://github.com/user-attachments/assets/eb0f2e60-25b4-4c03-ac58-29f6e2147b11" />
Tech Stack Used:

Frontend: React.js, Tailwind CSS


Backend: Node.js, Express.js, MongoDB

Authentication: JWT & bcrypt

Routing: React Router

Deployment: Vercel (Frontend), Render (Backend)

Features Implemented:

🔐 User Authentication (Signup/Login using email & password)

👤 Profile Page with name, email, and bio

🏠 Public Post Feed displaying user posts with timestamp

✍️ Create and view text-based posts

🔄 Private routing for authenticated pages

💾 Data persists using MongoDB Atlas

Additional Notes:

Fully responsive layout

Error handling on login and post creation

Token stored in localStorage for session persistence

Protected routes using a PrivateRoute component


mini-linkedin/
├── client/          # React Frontend
└── server/          # Node.js + Express Backend

🚀 1. Clone the Repository
git clone https://github.com/pritibishnoii/miniLinkedin
cd mini-linkedin
📦 2. Install Dependencies
👉 Frontend (React)

cd client
npm install
👉 Backend (Node.js)
cd ../server
npm install

⚙️ 3. Set Up Environment Variables
👉 Backend .env (inside server/)
 4. Start the Application
🟢 Start Backend
cd server
npm run dev
🔵 Start Frontend
cd ../client
npm start
