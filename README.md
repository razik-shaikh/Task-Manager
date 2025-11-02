# Task Manager API

A robust Task Manager REST API built with Node.js, Express, and MongoDB. This project implements a complete CRUD system for task management following the MVC architecture pattern.

## Features

- Create, read, update, and delete tasks
- Clean MVC architecture
- RESTful API design
- MongoDB integration
- Input validation
- Error handling
- API documentation
- Postman collection

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Development**: Nodemon

## Project Structure

```
├── config/
│   └── db.js          # Database configuration
├── controllers/
│   └── taskController.js  # Task logic
├── models/
│   └── Task.js        # Task schema
├── routes/
│   └── taskRoute.js   # API routes
├── server.js          # Entry point
└── package.json       # Dependencies
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas URI)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/task-manager.git
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/taskdb
   ```

4. Start the server:
   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

The server will run at `http://localhost:5000`
## API Endpoints

| Method | Endpoint        | Description      |
|--------|----------------|------------------|
| POST   | /api/tasks     | Create task      |
| GET    | /api/tasks     | Get all tasks    |
| GET    | /api/tasks/:id | Get task by ID   |
| PUT    | /api/tasks/:id | Update task      |
| DELETE | /api/tasks/:id | Delete task      |

### Request Body Example

```json
{
  "title": "Learn Node.js",
  "description": "Build a Task Manager project",
  "status": "pending"
}
```

### Response Example

```json
{
  "_id": "6798ab1234fd890a12cd4567",
  "title": "Learn Node.js",
  "description": "Build Task Manager API",
  "status": "pending",
  "createdAt": "2025-02-01T10:00:00.000Z",
  "updatedAt": "2025-02-01T10:00:00.000Z"
}
```
📸 Screenshots (Add yours)
Create a folder screenshots/
Upload Postman screenshot & rename to postman.png

md

🔮 Future Enhancements
JWT Auth + Login System 🔐

User Registration 👤

Pagination & Filtering

Task Priority & Due Dates

React Frontend UI

Deployment on Render / Railway

🧾 License
MIT License — Free to use & modify

🙋‍♂️ Author
Razique Shaikh
Frontend & MERN Stack Developer

🔗 LinkedIn: (https://www.linkedin.com/in/razik-shaikh-a6a241256/)

🐙 GitHub: (https://github.com/razik-shaikh)

🌐 Portfolio: YOUR-PORTFOLIO-LINK

⭐ Don't forget to give the repo a star!
Thanks for checking out this project 🙌





