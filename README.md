# OneHub Institute - MERN Stack Website

A comprehensive educational institute website built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Academic Coaching**: Information about classes 5-12 across all boards (CBSE, ICSE, State)
- **Music Classes**: Details about certified music courses (Guitar, Keyboard, Vocals)
- **Computer Training**: Information about computer training programs from basic to advanced
- **User Authentication**: Student/parent registration and login
- **Course Enrollment**: Online course enrollment system
- **Contact & Inquiry**: Form for inquiries and contact information
- **Testimonials**: Showcasing student success stories
- **Admin Dashboard**: For managing courses, students, and inquiries

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Framer Motion (animations)
- React Hook Form
- Axios
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Express Validator

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/onehub-institute.git
   cd onehub-institute
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/onehub
   JWT_SECRET=yourSecretKey
   NODE_ENV=development
   ```

4. Run the development server
   ```
   npm run dev:all
   ```

## Project Structure

```
onehub-institute/
├── server/                 # Backend code
│   ├── index.js            # Entry point for the server
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   └── middleware/         # Express middleware
├── src/                    # Frontend code
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── assets/             # Static assets
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services
│   ├── context/            # React context
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point for the frontend
└── package.json            # Project dependencies and scripts
```

## Deployment

- Frontend: Netlify, Vercel, or similar services
- Backend: Heroku, DigitalOcean, or AWS

## License

This project is licensed under the MIT License.