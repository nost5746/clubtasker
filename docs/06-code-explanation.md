# Code Explanation

## 1. Overview

This document explains the most important parts of the ClubTasker code.

The goal is to show that the code structure and the communication between frontend and backend are understood.

ClubTasker consists of two main parts:

- React frontend
- Express backend

The frontend is responsible for the user interface.

The backend is responsible for API routes and data handling.

Both parts communicate through HTTP requests.

---

## 2. Backend Overview

The backend is located in the `backend` folder.

The backend uses:

- Node.js
- Express
- CORS

The backend runs on:

`http://localhost:3000`

The main backend file is:

`backend/server.js`

The backend is divided into the following modules:

- `server.js`
- `routes/`
- `controllers/`
- `models/`
- `database/`

This structure separates different responsibilities.

---

## 3. server.js

The file `server.js` is the entry point of the backend.

It starts the Express server and connects the route modules.

The most important imports are:

- `express`
- `cors`
- `eventRoutes`
- `taskRoutes`

Express is used to create the backend server.

CORS is used so that the React frontend can send requests to the backend.

The server uses this port:

`3000`

This means the backend is available at:

`http://localhost:3000`

---

## 4. Middleware in server.js

The backend uses two middleware functions:

- `app.use(cors())`
- `app.use(express.json())`

The CORS middleware allows requests from the frontend.

This is important because the frontend runs on another port:

`http://localhost:5173`

The backend runs on:

`http://localhost:3000`

Without CORS, the browser could block requests from the frontend to the backend.

The `express.json()` middleware allows the backend to read JSON data from requests.

In the current version, this is mainly prepared for later features such as creating new tasks or events.

---

## 5. Start Route

The backend has a simple start route:

`/`

When this route is opened in the browser, the backend answers with a text message.

The message is:

`ClubTasker backend is running.`

This route is useful for a quick manual test.

It shows that the backend server is reachable.

---

## 6. Health Check Route

The backend also has a health check route:

`/api/health`

This route returns a JSON response with the backend status.

The frontend uses this route to check whether the backend is connected.

If the frontend can reach this route, it shows:

`connected`

If the frontend cannot reach this route, it shows:

`not connected`

This is a simple but useful way to prove that frontend and backend communicate with each other.

---

## 7. API Routes

The backend provides two main API routes:

- `/api/events`
- `/api/tasks`

The route `/api/events` returns event data.

The route `/api/tasks` returns task data.

Both routes return JSON data.

JSON is used because it is a common format for communication between frontend and backend.

---

## 8. Route Modules

The route files are located in:

`backend/routes/`

The two route files are:

- `eventRoutes.js`
- `taskRoutes.js`

The purpose of route files is to define API addresses.

The file `eventRoutes.js` defines the route for events.

The file `taskRoutes.js` defines the route for tasks.

The route files do not contain the main data logic.

Instead, they forward requests to the correct controller.

This keeps the code clean and modular.

---

## 9. Controller Modules

The controller files are located in:

`backend/controllers/`

The two controller files are:

- `eventController.js`
- `taskController.js`

Controllers handle incoming requests and send responses back to the frontend.

The `eventController.js` file gets the event data from the event model and sends it as JSON.

The `taskController.js` file gets the task data from the task model and sends it as JSON.

Controllers are important because they separate request handling from data storage.

---

## 10. Model Modules

The model files are located in:

`backend/models/`

The two model files are:

- `eventModel.js`
- `taskModel.js`

Models contain the data logic.

In the current version, the data is stored directly in arrays.

The event model contains example events.

The task model contains example tasks.

Each model provides a function that returns all stored data.

The event model provides:

`getAllEvents()`

The task model provides:

`getAllTasks()`

These functions are used by the controllers.

---

## 11. Event Data

The event data contains information about club events.

Each event object has:

- `id`
- `title`
- `date`
- `location`

Example:

- id: 1
- title: Summer Festival
- date: 2026-07-15
- location: Club House

The `id` is used to identify the event.

The `title` is the name of the event.

The `date` stores when the event takes place.

The `location` stores where the event takes place.

---

## 12. Task Data

The task data contains information about club tasks.

Each task object has:

- `id`
- `title`
- `status`
- `eventId`

Example:

- id: 1
- title: Buy drinks
- status: open
- eventId: 1

The `id` identifies the task.

The `title` describes the task.

The `status` shows the current state of the task.

The `eventId` connects the task to an event.

For example, a task with `eventId: 1` belongs to the event with `id: 1`.

---

## 13. Frontend Overview

The frontend is located in the `frontend` folder.

The frontend uses:

- React
- Vite
- CSS

The frontend runs on:

`http://localhost:5173`

The most important frontend files are:

- `frontend/src/App.jsx`
- `frontend/src/App.css`
- `frontend/src/index.css`

The file `App.jsx` contains the main logic and structure of the user interface.

The file `App.css` contains the main styling of the user interface.

The file `index.css` contains basic global CSS settings.

---

## 14. React State

In `App.jsx`, React state is used to store changing data.

The following state variables are used:

- `events`
- `tasks`
- `backendStatus`

The `events` state stores the event data loaded from the backend.

The `tasks` state stores the task data loaded from the backend.

The `backendStatus` state stores whether the backend is connected.

At the beginning, the arrays for events and tasks are empty.

At the beginning, the backend status is:

`checking`

After the data is loaded, React automatically updates the user interface.

---

## 15. useEffect

The frontend uses `useEffect`.

The `useEffect` function is used to run code when the React component is loaded.

In ClubTasker, `useEffect` sends three requests to the backend:

- request backend health status
- request event data
- request task data

This happens automatically when the page is opened.

That means the user does not need to press a button to load the data.

---

## 16. Fetch Requests

The frontend uses the `fetch` function to communicate with the backend.

The health check is loaded from:

`http://localhost:3000/api/health`

The event data is loaded from:

`http://localhost:3000/api/events`

The task data is loaded from:

`http://localhost:3000/api/tasks`

If the request is successful, the response is converted to JSON.

Then the data is saved in React state.

If the request fails, the frontend shows that the backend is not connected or displays empty data.

---

## 17. Rendering Events

The frontend displays events by using the `map` function.

The `map` function goes through the list of events.

For each event, one event card is created.

Each event card displays:

- event title
- event date
- event location

This makes it possible to show several events without writing the card code several times.

---

## 18. Rendering Tasks

The frontend also displays tasks by using the `map` function.

For each task, one task card is created.

Each task card displays:

- task title
- task status
- related event ID

The task status is also used as a CSS class.

This makes it possible to style different statuses differently.

For example:

- open
- in progress
- done

---

## 19. Styling

The visual design is mainly defined in:

`frontend/src/App.css`

The application uses:

- a dark sidebar
- a light main area
- white cards
- rounded corners
- status badges
- a responsive card layout

The sidebar contains the navigation.

The main area contains the dashboard, events, and tasks.

The status card shows whether the backend is connected.

This makes the app easier to understand visually.

---

## 20. Complete Data Flow

The data flow works like this:

1. The backend is started with `node server.js`.
2. The frontend is started with `npm.cmd run dev`.
3. The user opens `http://localhost:5173`.
4. The React app loads.
5. `useEffect` sends fetch requests to the backend.
6. The backend receives the requests.
7. The route modules forward the requests to the controllers.
8. The controllers call the model functions.
9. The models return the data.
10. The controllers send the data back as JSON.
11. The frontend stores the data in state.
12. React displays the events and tasks as cards.

This shows how frontend, backend, routes, controllers, and models work together.

---

## 21. Why the Code Is Modular

The code is modular because different responsibilities are separated.

The frontend code is separate from the backend code.

Inside the backend, routes, controllers, and models are separate.

This has several advantages:

- the code is easier to understand
- each file has a clear purpose
- bugs are easier to find
- the project can be extended later
- the structure is closer to real web applications

This modular structure is important for the project task.

---

## 22. Possible Extensions

The current version already works as a distributed application.

Possible future extensions are:

- adding a real SQLite database
- adding user login
- adding admin roles
- creating new events through the frontend
- creating new tasks through the frontend
- changing task status from the frontend
- assigning tasks to users

The current structure already prepares the project for these extensions.

---

## 23. Summary

The ClubTasker code consists of a React frontend and an Express backend.

The frontend displays the user interface and sends requests to the backend.

The backend provides API routes and returns JSON data.

The backend is split into routes, controllers, and models.

This proves that the application consists of separate modules and that the code structure was understood.

---

## 24. Task Status Update Feature

The application includes an interactive task status update feature.

This feature allows the user to change a task status from the frontend.

Each task card has three buttons:

- `Open`
- `In progress`
- `Done`

When one of these buttons is clicked, the frontend calls the function:

`updateTaskStatus(taskId, newStatus)`

This function sends a PATCH request to the backend.

The request URL has this structure:

`http://localhost:3000/api/tasks/{taskId}/status`

The request body contains the new task status as JSON.

Example:

`status: done`

The backend receives the request in the task route.

The route forwards the request to the task controller.

The controller checks whether the new status is allowed.

Allowed statuses are:

- `open`
- `in progress`
- `done`

If the status is invalid, the backend returns an error.

If the status is valid, the controller calls the model function:

`updateTaskStatus(taskId, newStatus)`

The model searches for the task with the matching ID.

If the task exists, the model changes the status and returns the updated task.

The controller sends the updated task back to the frontend as JSON.

The frontend then updates the local React state.

This means the user interface changes immediately after the backend has confirmed the update.

This feature shows a complete data flow from the frontend to the backend and back to the frontend.