 

# 📚 Nex-Lib | Digital Library Management System

![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🚀 Overview

**Nex-Lib** is a modern **Library Management System** designed to digitize and simplify traditional library workflows. It provides an intuitive platform for managing **books, members, and circulation activities** such as issuing and tracking borrowed items.

Built with a **serverless architecture using Firebase**, Nex-Lib enables real-time synchronization of data for book issuing, returns, and inventory updates—without requiring a complex backend setup.

The system focuses on practical library operations, with core workflows implemented through components such as **IssueProduct** and **IssueDetail**, ensuring efficient circulation management.

<img width="1024" height="559" alt="image" src="https://github.com/user-attachments/assets/7a9a474e-8230-4dfd-9e4e-3b41d8d7f695" />

---

## ✨ Key Features

### 🏛️ For Librarians (Admin)
- **Book Circulation Management**  
  Issue books to members and track active borrowings via `IssueProduct` and `IssueDetail`.
- **Inventory Control**  
  Add, update, and remove books from the digital catalog.
- **Member Management**  
  View registered members and monitor borrowing history.
- **Dashboard Analytics**  
  Overview of total books, issued items, and active users.
- **Overdue Monitoring**  
  Track currently issued and overdue books in real time.

---

### 📖 For Members (Users)
- **Digital Book Catalog**  
  Browse available books by category or search by title.
- **My Bag (Cart)**  
  Add books to a personal selection list before issuing.
- **User Dashboard**  
  View profile information and borrowing history.
- **Secure Authentication**  
  Login-based access using Firebase Authentication.

---

## 🛠️ Tech Stack

| Component | Technology |
|---------|------------|
| **Frontend** | React.js (Vite) |
| **Styling** | Tailwind CSS & Material Tailwind |
| **State Management** | Redux Toolkit & Context API |
| **Backend & Database** | Firebase (Firestore, Authentication) |
| **Routing** | React Router DOM (Protected Routes) |

---

## 🏗️ Project Structure

```bash
Nex-Lib/
├── src/
│   ├── components/
│   │   ├── admin/          # Circulation logic (IssueDetail, UserDetail)
│   │   ├── category/       # Book categories
│   │   └── registration/   # Authentication components
│   ├── context/            # Global state (myState)
│   ├── pages/
│   │   ├── admin/          # Admin pages (IssueProduct, AddProductPage)
│   │   ├── home/           # Landing page & catalog
│   │   └── user/           # Member dashboard
│   ├── redux/              # Redux slices (cartSlice)
│   ├── protectedRoute/     # Route guards (Admin/User)
│   └── firebase/           # Firebase configuration
└── README.md
________________________________________
🏁 Getting Started
Follow the steps below to run Nex-Lib locally.
✅ Prerequisites
•	Node.js v16 or higher
•	Firebase Project with Firestore and Authentication enabled
________________________________________
📥 Installation
1️⃣ Clone the Repository
git clone https://github.com/JAIKUMAR07/nex-lib.git
cd Nex-Lib
2️⃣ Install Dependencies
npm install
3️⃣ Configure Firebase
1.	Create a project at https://firebase.google.com
2.	Enable Email/Password Authentication
3.	Enable Firestore Database
4.	Add your Firebase credentials to src/firebase/FirebaseConfig.jsx:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};
4️⃣ Run the Application
npm run dev
📍 Access the app at http://localhost:5173
________________________________________
🛡️ Access Control
Nex-Lib uses Role-Based Access Control (RBAC):
•	Admin Routes
Restricted to librarians via ProtectedRouteForAdmin
•	User Routes
Accessible only to authenticated members via ProtectedRouteForUser
________________________________________
🤝 Contributing
Contributions are welcome to improve features, UI, or circulation logic.
1.	Fork the repository
2.	Create your feature branch (git checkout -b feature/YourFeature)
3.	Commit your changes (git commit -m "Add YourFeature")
4.	Push to the branch (git push origin feature/YourFeature)
5.	Open a Pull Request
________________________________________
📞 Contact
Jaikumar
GitHub: https://github.com/JAIKUMAR07
🔗 Project Repository:
https://github.com/JAIKUMAR07/nex-lib

