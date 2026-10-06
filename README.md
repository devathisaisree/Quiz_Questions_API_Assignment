# Quiz Questions API

A RESTful API built with **Node.js, Express.js, and MongoDB** to create and manage quiz questions.

## 📌 Project Overview

The Quiz Questions API allows users to store and manage quiz questions with information such as:

- Question
- Marks
- Difficulty level
- Active status
- Creation date

The API supports complete **CRUD operations**, along with **filtering, sorting, and random question selection**.

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman

## ✨ Features

- Create a new quiz question
- View all questions
- View a question by ID
- Update a question
- Delete a question
- Filter questions by difficulty
- Sort questions by marks
- Get a random active question
- Input validation and error handling

## 📋 Question Fields

| Field | Type | Rules |
|---|---|---|
| question | String | Required, trimmed |
| marks | Number | Required, 1–10 |
| difficulty | String | easy / medium / hard |
| active | Boolean | Default: true |
| createdOn | Date | Default: current date |

`active` and `createdOn` are automatically assigned default values.

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/questions` | Get all questions |
| GET | `/questions/:id` | Get question by ID |
| POST | `/questions` | Create a question |
| PUT | `/questions/:id` | Update a question |
| DELETE | `/questions/:id` | Delete a question |
| GET | `/questions?difficulty=easy` | Filter by difficulty |
| GET | `/questions?sort=marks` | Sort by marks |
| GET | `/questions/random` | Get random active question |

## 📝 Example Request

### Create Question

**POST** `/questions`

```json
{
  "question": "What is MongoDB?",
  "marks": 5,
  "difficulty": "medium"
}

##📁Project Structure

Quiz_Questions_API/
│
├── config/
│   └── db.js
├── controllers/
│   └── questionController.js
├── middleware/
│   └── errorhandler.js
├── models/
│   └── questions.js
├── routes/
│   └── question.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md

🚀 Setup
npm install

Create a .env file:
MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the server:
npm run dev

The server runs on:
http://localhost:5000

🧪 Testing
The API can be tested using Postman for all CRUD operations, filtering, sorting, validation, and random question functionality.

👩‍💻 Author
Sai Sree