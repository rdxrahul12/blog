🌿 University Official Blog Site

Live Demo: https://blog-green-nine-37.vercel.app
<img width="1891" height="899" alt="image" src="https://github.com/user-attachments/assets/fc0e5f21-56ec-4ac3-99ff-8a1c440bfe1d" />

A modern, responsive blog application built with React 19, Redux Toolkit, and Appwrite. It enables users to create, read, update, and delete blog posts using a powerful rich text editor.

🚀 Features
🔐 User Authentication (Register/Login/Logout)

✍️ Rich Text Editor with TinyMCE

📱 Fully Responsive UI

🔄 Real-Time Post Updates

📝 Markdown Support

🔍 Search & Filter Posts

🔒 Protected Routes (Auth-based access)

💾 Persistent State with Redux Persist

⚙️ Centralized State using Redux Toolkit

🛠 Tech Stack
Category	Tools/Technologies
Frontend	React 19, Vite
State	Redux Toolkit, Redux Persist
Backend	Appwrite (Auth, DB, Storage)
Styling	Tailwind CSS
Editor	TinyMCE
Routing	React Router
Forms	React Hook Form

📦 Prerequisites
Node.js (v18+)

npm or yarn

Appwrite backend instance (self-hosted or cloud)

⚙️ Getting Started
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/yourusername/react-blog-appwrite.git
cd react-blog-appwrite
2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install
3. Configure Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
4. Start the Dev Server
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit: http://localhost:5173

📁 Project Structure
bash
Copy
Edit
src/
├── appwrite/       # Appwrite service layer
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── pages/          # Page-level components
├── routes/         # Routing config
├── store/          # Redux setup
🙌 Acknowledgments
Appwrite

React

Redux Toolkit

Tailwind CSS

