# Nex-Lib - Digital Library Management System

A comprehensive digital library management system built with modern web technologies. This application enables educational institutions to manage their book inventory, user registrations, and book issuing/return processes efficiently.

## 🌟 Features

### For Students/Users
- **Browse Books**: Explore books by categories (CSE, Mechanical, Civil, Electronics, Math, Story)
- **Search Functionality**: Find books quickly using the search feature
- **Book Details**: View detailed information about each book
- **Cart System**: Add multiple books to cart for batch requesting
- **User Dashboard**: Track your borrowed books and request history
- **Account Management**: Secure registration and login system

### For Administrators
- **Admin Dashboard**: Comprehensive overview of library statistics
- **Book Management**: Add, update, and delete books from the inventory
- **User Management**: View and manage registered users
- **Issue Management**: Handle book issuing and return processes
- **Category Management**: Organize books by academic subjects

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS, PostCSS
- **State Management**: Redux Toolkit, React Context API
- **Routing**: React Router DOM
- **Backend**: Firebase (Firestore Database, Authentication)
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **UI Components**: React Tabs

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── admin/          # Admin-specific components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── navbar/         # Navigation components
│   └── ...
├── pages/              # Page components
│   ├── admin/          # Admin dashboard and management pages
│   ├── home/           # Homepage
│   ├── registration/   # Login and signup pages
│   └── ...
├── context/            # React Context for state management
├── redux/              # Redux store and slices
├── firebase/           # Firebase configuration
└── protectedRoute/     # Route protection components
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JAIKUMAR07/Nex-Lib.git
cd Nex-Lib
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your Firebase configuration:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Core Functionality

### Book Categories
- **CSE (Computer Science)**: Programming, algorithms, software engineering books
- **Mechanical**: Mechanical engineering textbooks and references
- **Civil**: Civil engineering materials and resources
- **Electronics**: Electronics and electrical engineering books
- **Math**: Mathematics textbooks and problem-solving guides
- **Story**: Fiction, novels, and storytelling books

### User Roles

#### Student/User Role:
- Register and login to the system
- Browse books by category
- View book details and availability
- Add books to cart
- Request book issues
- View personal dashboard with borrowed books

#### Administrator Role:
- Access admin dashboard with system overview
- Manage book inventory (CRUD operations)
- View and manage user accounts
- Handle book issue and return processes
- Monitor library statistics

## 🔐 Authentication & Security

- Firebase Authentication for secure user management
- Protected routes for admin and user areas
- Role-based access control
- Secure data storage with Firestore

## 🎨 Design Features

- Responsive design with TailwindCSS
- Modern, clean user interface
- Category-based navigation
- Interactive dashboards
- Real-time data updates
- Toast notifications for user feedback

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**JAIKUMAR07**
- GitHub: [@JAIKUMAR07](https://github.com/JAIKUMAR07)

## 🙏 Acknowledgments

- Built with React and Vite for optimal performance
- Firebase for backend services
- TailwindCSS for beautiful styling
- Lucide React for modern icons
