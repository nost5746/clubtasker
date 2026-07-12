# Distributed Architecture

## 1. Purpose of this Document

This document explains why ClubTasker is a distributed web application.

The goal is to make clear that the project is not only structured into code modules, but also consists of separate running processes that communicate with each other.

This distinction is important:

- Modularization means that the source code is divided into understandable parts.
- Distribution means that different parts of the application run as separate processes and communicate through a defined interface.

ClubTasker uses both concepts.

---

## 2. Overview

ClubTasker consists of two main running processes:

| Process | Technology | Local Address | Responsibility |
|---|---|---|---|
| Frontend | React with Vite | `http://localhost:5173` | User interface in the browser |
| Backend | Node.js with Express | `http://localhost:3000` | API, data handling, business logic |

The frontend and backend are started separately.

They do not run inside the same process.

The frontend sends HTTP requests to the backend.

The backend receives these requests, processes them, and returns JSON data.

---

## 3. Distributed Structure

The distributed structure of ClubTasker can be described like this:

```text
Browser / React Frontend
http://localhost:5173
        |
        | HTTP requests
        | JSON data
        v
Node.js / Express Backend
http://localhost:3000
```

The frontend is responsible for everything the user sees and clicks.

The backend is responsible for processing data and providing API routes.

The communication between both parts happens through HTTP.

This means that the frontend and backend are separated by a network-style interface, even when both processes are running locally on the same computer.

---

## 4. Why This Is Distributed

ClubTasker is distributed because it consists of separate processes with separate responsibilities.

The frontend process runs through Vite.

The backend process runs through Node.js and Express.

The frontend does not directly access the backend code or backend variables.

Instead, it sends requests to the backend API.

The backend receives these requests, executes logic, and sends responses back to the frontend.

Example:

```text
User clicks "Done" in the frontend.
        |
        v
Frontend sends a PATCH request to the backend.
        |
        v
Backend receives the request and updates the task status.
        |
        v
Backend returns the updated task data.
        |
        v
Frontend updates the visible task card.
```

This is a distributed interaction because one part of the application sends data to another independent part, and the second part processes that data.

---

## 5. Difference Between Modules and Distribution

The backend is also modularized.

It contains separate folders and files for:

- routes
- controllers
- models
- database

This modularization improves structure and understandability.

However, these backend modules alone are not the reason why the application is distributed.

The application is distributed because the frontend and backend run separately and communicate through API requests.

Therefore, ClubTasker combines two ideas:

1. Code modularization inside the backend.
2. Process distribution between frontend and backend.

---

## 6. API Communication

The backend provides several API routes.

Important routes are:

| Route | Method | Purpose |
|---|---|---|
| `/api/health` | GET | Checks whether the backend is running |
| `/api/events` | GET | Returns event data |
| `/api/tasks` | GET | Returns task data |
| `/api/tasks/:id/status` | PATCH | Updates the status of a task |

The frontend uses `fetch()` requests to call these routes.

The exchanged data format is JSON.

Example data flow for loading tasks:

```text
Frontend sends:
GET http://localhost:3000/api/tasks

Backend returns:
[
  {
    "id": 1,
    "title": "Buy drinks",
    "status": "open",
    "eventId": 1
  }
]
```

Example data flow for changing a task status:

```text
Frontend sends:
PATCH http://localhost:3000/api/tasks/1/status

Backend processes:
Task 1 status is changed.

Backend returns:
Updated task data.
```

---

## 7. Relation to Client-Server Architecture

ClubTasker follows a client-server architecture.

The client is the React frontend.

The server is the Express backend.

The client sends requests.

The server processes these requests and sends responses.

This is a common architecture for web applications.

In this project, the distribution is local, because both processes run on the same computer during development.

However, the architecture could also be deployed on separate machines.

For example:

```text
User browser
        |
        v
Frontend hosted on web server
        |
        v
Backend API hosted on application server
```

The local development setup already uses the same basic communication principle.

---

## 8. Relation to Deployment Diagrams

In software engineering, a deployment diagram can be used to show where software parts run physically.

For ClubTasker, a simple deployment view would look like this:

```text
+-----------------------------+
| Developer Computer          |
|                             |
|  +-----------------------+  |
|  | Browser               |  |
|  | React Frontend        |  |
|  | localhost:5173        |  |
|  +-----------------------+  |
|              |              |
|              | HTTP / JSON  |
|              v              |
|  +-----------------------+  |
|  | Node.js Process       |  |
|  | Express Backend       |  |
|  | localhost:3000        |  |
|  +-----------------------+  |
|                             |
+-----------------------------+
```

Even though both processes are running on one computer, they are separated by process boundaries and communicate through HTTP.

This makes the architecture understandable as a small distributed system.

---

## 9. Evidence in the Project

The distributed structure is visible in the repository and in the screenshots.

Evidence in the code:

- The frontend is stored in the `frontend` folder.
- The backend is stored in the `backend` folder.
- The frontend is started separately with `npm.cmd run dev`.
- The backend is started separately with `node server.js`.
- The frontend uses `fetch()` to communicate with the backend.
- The backend provides API routes with Express.

Evidence in screenshots:

- The browser shows the frontend at `http://localhost:5173`.
- The browser shows backend API output at `http://localhost:3000/api/events`.
- The browser shows backend API output at `http://localhost:3000/api/tasks`.
- The ClubTasker GUI shows the backend status as `connected`.
- The task status update proves that the frontend sends a change to the backend and receives updated data.

---

## 10. Example: Task Status Update

The task status update is the clearest example of distributed communication in ClubTasker.

The process works as follows:

1. The user clicks a status button in the frontend.
2. The frontend sends a `PATCH` request to the backend.
3. The backend receives the request.
4. The backend validates and processes the new status.
5. The backend updates the task data.
6. The backend sends the updated task back to the frontend.
7. The frontend updates the visible user interface.

This proves that the frontend does not process everything alone.

The backend performs a separate processing task.

---

## 11. Conclusion

ClubTasker is a small distributed web application.

It consists of a React frontend and an Express backend.

Both parts run as separate processes.

They communicate through HTTP requests and JSON responses.

The project is also modularized internally, especially in the backend.

Therefore, the project fulfills both important requirements:

- separate modules,
- and distributed application structure.