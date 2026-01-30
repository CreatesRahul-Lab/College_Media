# College Media

A full-stack social media platform built for college students to connect, share posts, and engage with their community. This MERN stack application allows users to register, login, create posts with text and images, like posts, and interact with an AI chatbot.

## Tech Stack

- **Frontend:** React, Vite, Material-UI, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Other Libraries:** bcryptjs for password hashing, CORS for cross-origin requests

## Features

- User registration and login with JWT authentication
- Create, view, and interact with posts (text and images)
- Like and unlike posts
- AI-powered chatbot for user assistance
- Responsive design with Material-UI and Tailwind CSS
- Secure API endpoints with authentication middleware

## Chatbot

The application includes a built-in chatbot that provides information about the platform's features. The chatbot is implemented as a client-side service with predefined responses for common queries.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/college-media
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   ```

4. Start the backend server:
   ```
   npm run dev
   ```
   The server will run on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The app will run on `http://localhost:5173` (default Vite port).

## Usage

1. Ensure both backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:5173`.
3. Register a new account or login with existing credentials.
4. Create posts, like and comment on others' posts, and explore the platform.

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post (requires authentication)
- `PUT /api/posts/:id/like` - Like or unlike a post (requires authentication)

For detailed API documentation, see [API.md](backend/API.md).

## Project Structure

```
college-media/
├── backend/
│   ├── API.md
│   ├── package.json
│   ├── server.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Post.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── posts.js
│   └── utils/
│       └── sendEmail.js
├── frontend/
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── assets/
│       ├── components/
│       │   ├── About.jsx
│       │   ├── CTA.jsx
│       │   ├── Features.jsx
│       │   ├── Footer.jsx
│       │   ├── Hero.jsx
│       │   ├── Navbar.jsx
│       │   ├── Team.jsx
│       │   └── chatbot/
│       │       ├── chat.service.js
│       │       ├── ChatBody.jsx
│       │       ├── ChatbotWidget.jsx
│       │       ├── ChatHeader.jsx
│       │       └── ChatInput.jsx
│       ├── context/
│       │   ├── AuthContext.jsx
│       │   ├── ChatContext.jsx
│       │   └── useChat.js
│       ├── hooks/
│       │   └── useChatbot.js
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   └── Signup.jsx
│       └── styles/
│           ├── chatbot.css
│           └── main.css
├── .github/
│   └── ISSUE_TEMPLATE/
│       └── documentation-improvement.yml
├── .gitignore
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
