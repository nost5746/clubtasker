# Architecture

## Overview

ClubTasker is built as a small distributed web application.

The application consists of two main parts:

- Frontend
- Backend

The frontend and backend are separate applications. They run on different local ports and communicate through HTTP API requests.

## Frontend

The frontend is built with React and Vite.

It runs locally at:

http://localhost:5173

The frontend is responsible for everything the user sees in the browser.

The main tasks of the frontend are:

- showing the graphical user interface
- displaying the dashboard
- displaying event cards
- displaying task cards
- showing the backend connection status
- requesting data from the backend

The most important frontend file is:

frontend/src/App.jsx

This file contains the main React component of the application.

The styling of the frontend is mainly defined in:

frontend/src/App.css

and:

frontend/src/index.css

## Backend

The backend is built with Node.js and Express.

It runs locally at:

http://localhost:3000

The backend provides API routes that can be called by the frontend.

The main tasks of the backend are:

- starting the Express server
- providing API routes
- returning event data
- returning task data
- separating routes, controllers, and models into modules

The most important backend file is:

backend/server.js

This file starts the backend server and connects the API routes.

## Communication Between Frontend and Backend

The frontend communicates with the backend through HTTP requests.

In the React frontend, the fetch function is used to request data from the backend.

The frontend requests the backend status from:

http://localhost:3000/api/health

The frontend requests event data from:

http://localhost:3000/api/events

The frontend requests task data from:

http://localhost:3000/api/tasks

The backend sends the data back as JSON.

JSON is a common format for exchanging data between frontend and backend.

## Backend Module Structure

The backend is divided into separate modules.

The backend structure is:

backend/
- server.js
- routes/
- controllers/
- models/
- database/

The purpose of these folders is explained below.

## server.js

The server.js file is the entry point of the backend.

It creates the Express application, activates middleware, connects the routes, and starts the server.

It also contains the health check route:

/api/health

This route is used by the frontend to check whether the backend is reachable.

## routes

The routes folder contains files that define the API addresses.

The route files are:

- eventRoutes.js
- taskRoutes.js

The eventRoutes.js file defines the route for events.

The taskRoutes.js file defines the route for tasks.

Routes do not contain the main logic. They only forward requests to the correct controller.

## controllers

The controllers folder contains files that handle incoming requests.

The controller files are:

- eventController.js
- taskController.js

The eventController.js file receives event requests and sends event data as a response.

The taskController.js file receives task requests and sends task data as a response.

Controllers connect the routes with the models.

## models

The models folder contains the data logic.

The model files are:

- eventModel.js
- taskModel.js

The eventModel.js file stores and returns event data.

The taskModel.js file stores and returns task data.

At the current stage, the data is stored as arrays inside the model files.

This is simple and useful for the first version of the project.

The database folder is already prepared for a later version with SQLite.

## Database Concept

A database folder exists in the backend structure.

In the current version, the application uses example data inside the model files.

This keeps the first version simple and easier to understand.

A later version could replace the arrays with an SQLite database.

Possible database tables would be:

- users
- events
- tasks

The events table would store event information.

The tasks table would store task information.

The users table would store user information.

Tasks could be connected to events by using an event ID.

## Why This Is a Distributed Application

ClubTasker is distributed because frontend and backend are separate parts of the system.

The frontend runs in the browser.

The backend runs as a separate server.

Both parts communicate through API requests.

This means that the user interface and the application logic are not located in one single file or one single program.

Instead, the application is split into different responsibilities.

## Why This Architecture Is Useful

The architecture is useful because it separates responsibilities.

The frontend focuses on the user interface.

The backend focuses on data and API logic.

The routes define the API structure.

The controllers handle requests and responses.

The models manage the data.

This makes the application easier to understand, test, and extend.

## Architecture Style

The project follows a simple client-server architecture.

The React frontend is the client.

The Express backend is the server.

The client sends requests to the server.

The server responds with JSON data.

This architecture style is common for modern web applications.

## Summary

ClubTasker uses a clear architecture with separate frontend and backend parts.

The backend is divided into routes, controllers, and models.

The frontend communicates with the backend through API routes.

This structure proves that the project is not only a single script, but a small distributed application with understandable modules.