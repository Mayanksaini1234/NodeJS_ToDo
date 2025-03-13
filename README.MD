# Node.js To-Do Application

A simple Node.js backend application for managing a To-Do list. This project demonstrates basic CRUD operations using Express and MongoDB.


## Description

This application is a RESTful API built with Node.js, Express, and MongoDB. It allows users to create, read, update, and delete to-do items. 

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (v6 or later)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Mayanksaini1234/NodeJS_ToDo
  
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the server:

    ```sh
    npm start
    ```

## API Endpoints <br>
### TASK Endpoints -
- `GET /api/tasks/todos` - Get all to-do tasks
- `POST /api/tasks/todos` - Create a new to-do task
- `PUT /api/tasks/todos/:id` - Update a to-do task by ID
- `DELETE /api/tasks/todos/:id` - Delete a to-do task by ID <br>
### TASK Endpoints -
- `GET /api/users/me"` - Get my profile 
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login  user
- `POST /api/users/logout` - Logout user
