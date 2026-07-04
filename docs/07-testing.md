# Testing

## 1. Overview

This document describes how the ClubTasker application was tested.

The goal of the tests was to check whether:

- the backend starts correctly,
- the API routes return data,
- the frontend starts correctly,
- the frontend can connect to the backend,
- event data is displayed in the frontend,
- task data is displayed in the frontend,
- and the modular backend structure still works after refactoring.

---

## 2. Test Environment

The application was tested locally on the computer.

The following tools were used:

| Tool | Purpose |
|---|---|
| Visual Studio Code | Editing and running the project |
| PowerShell Terminal | Running backend and frontend commands |
| Browser | Testing API routes and frontend |
| Node.js | Running JavaScript outside the browser |
| npm | Managing frontend and backend packages |
| Git | Version control preparation |

The tested local URLs were:

- `http://localhost:3000`
- `http://localhost:3000/api/health`
- `http://localhost:3000/api/events`
- `http://localhost:3000/api/tasks`
- `http://localhost:5173`

---

## 3. Tool Installation Test

Before the application was developed, the required tools were checked.

The following commands were used:

- `node -v`
- `npm.cmd -v`
- `git --version`

Expected result:

Each command should return a version number.

Actual result:

All three tools returned version numbers.

Conclusion:

The development environment was ready.

---

## 4. Backend Start Test

The backend was started from the `backend` folder.

Command:

`node server.js`

Expected result:

The terminal should show that the backend is running at:

`http://localhost:3000`

Actual result:

The terminal showed:

`ClubTasker backend is running at http://localhost:3000`

Conclusion:

The backend started successfully.

---

## 5. Backend Start Route Test

The backend start route was tested in the browser.

Tested URL:

`http://localhost:3000`

Expected result:

The browser should show a simple text message.

Expected message:

`ClubTasker backend is running.`

Actual result:

The browser showed the expected message.

Conclusion:

The backend was reachable in the browser.

---

## 6. Health Check API Test

The health check route was tested in the browser.

Tested URL:

`http://localhost:3000/api/health`

Expected result:

The backend should return a JSON response with status information.

Expected response:

`status: ok`

`service: ClubTasker Backend`

Actual result:

The browser showed the expected JSON response.

Conclusion:

The health check route worked correctly.

---

## 7. Events API Test

The events API route was tested in the browser.

Tested URL:

`http://localhost:3000/api/events`

Expected result:

The backend should return a list of events as JSON.

Expected event data:

- Summer Festival
- Board Meeting

Actual result:

The browser showed JSON data with both events.

Conclusion:

The events API route worked correctly.

---

## 8. Tasks API Test

The tasks API route was tested in the browser.

Tested URL:

`http://localhost:3000/api/tasks`

Expected result:

The backend should return a list of tasks as JSON.

Expected task data:

- Buy drinks
- Prepare music playlist
- Clean meeting room

Actual result:

The browser showed JSON data with all three tasks.

Conclusion:

The tasks API route worked correctly.

---

## 9. Modular Backend Test

After the backend code was split into separate modules, the API routes were tested again.

The backend modules are:

- `routes/eventRoutes.js`
- `routes/taskRoutes.js`
- `controllers/eventController.js`
- `controllers/taskController.js`
- `models/eventModel.js`
- `models/taskModel.js`

The backend was started again with:

`node server.js`

Then the following routes were tested again:

- `http://localhost:3000/api/events`
- `http://localhost:3000/api/tasks`

Expected result:

Both routes should still return the correct JSON data.

Actual result:

Both routes still returned the correct data.

Conclusion:

The modular backend structure worked correctly.

---

## 10. Frontend Start Test

The frontend was started from the `frontend` folder.

Command:

`npm.cmd run dev`

Expected result:

The terminal should show a local frontend address.

Expected local address:

`http://localhost:5173`

Actual result:

The frontend started and was available at:

`http://localhost:5173`

Conclusion:

The React frontend started successfully.

---

## 11. Default Vite Page Test

After creating the frontend with Vite, the default Vite page was opened in the browser.

Tested URL:

`http://localhost:5173`

Expected result:

The browser should show the default Vite React start page.

Actual result:

The browser showed the Vite React start page.

Conclusion:

The frontend project was created correctly.

---

## 12. ClubTasker GUI Test

After replacing the default Vite page, the custom ClubTasker interface was tested.

Tested URL:

`http://localhost:5173`

Expected result:

The browser should show the ClubTasker dashboard.

The dashboard should contain:

- ClubTasker sidebar
- Dashboard navigation
- Events navigation
- Tasks navigation
- backend status card
- event cards
- task cards

Actual result:

The browser showed the custom ClubTasker interface.

Conclusion:

The custom React frontend worked correctly.

---

## 13. Backend Connection Test

The frontend checks the backend connection by calling:

`http://localhost:3000/api/health`

Expected result:

If the backend is running, the frontend should show:

`connected`

Actual result:

The frontend showed:

`connected`

Conclusion:

The frontend successfully communicated with the backend.

---

## 14. Frontend Event Data Test

The frontend loads event data from:

`http://localhost:3000/api/events`

Expected result:

The frontend should display event cards for:

- Summer Festival
- Board Meeting

Actual result:

The frontend displayed both event cards.

Conclusion:

The frontend successfully loaded and displayed event data from the backend.

---

## 15. Frontend Task Data Test

The frontend loads task data from:

`http://localhost:3000/api/tasks`

Expected result:

The frontend should display task cards for:

- Buy drinks
- Prepare music playlist
- Clean meeting room

Actual result:

The frontend displayed the task cards.

Conclusion:

The frontend successfully loaded and displayed task data from the backend.

---

## 16. Parallel Run Test

The backend and frontend were tested together.

Two terminals were used in Visual Studio Code.

Backend terminal:

- `cd backend`
- `node server.js`

Frontend terminal:

- `cd frontend`
- `npm.cmd run dev`

Expected result:

The backend should run on:

`http://localhost:3000`

The frontend should run on:

`http://localhost:5173`

The frontend should show the backend status as:

`connected`

Actual result:

Both applications ran at the same time.

The frontend showed the backend status as connected.

Conclusion:

The distributed application worked correctly.

---

## 17. Negative Connection Test

The frontend was also designed to handle the case where the backend is not reachable.

Expected result:

If the backend is not running, the frontend should show:

`not connected`

Actual result:

The code contains error handling for failed backend requests.

If a fetch request fails, the backend status is set to:

`not connected`

Conclusion:

The frontend can react to connection problems.

---

## 18. Screenshots as Test Evidence

Screenshots were created during the testing process.

The screenshots show:

- tool version checks,
- backend initialization,
- installed backend packages,
- backend folder structure,
- running backend server,
- JSON output of API routes,
- running Vite frontend,
- final ClubTasker interface,
- and backend status connected.

These screenshots are used as proof that the application was tested step by step.

---

## 19. Test Results Summary

| Test | Result |
|---|---|
| Node.js version check | Passed |
| npm version check | Passed |
| Git version check | Passed |
| Backend start | Passed |
| Health check route | Passed |
| Events API route | Passed |
| Tasks API route | Passed |
| Modular backend test | Passed |
| Frontend start | Passed |
| ClubTasker GUI test | Passed |
| Backend connection test | Passed |
| Event data displayed in frontend | Passed |
| Task data displayed in frontend | Passed |
| Parallel frontend/backend run | Passed |

---

## 20. Final Conclusion

The tests show that ClubTasker works as intended.

The backend starts correctly and provides API routes.

The frontend starts correctly and displays a custom graphical user interface.

The frontend communicates with the backend through HTTP requests.

The backend returns JSON data for events and tasks.

The final result is a working small distributed web application with separate modules.

---

## 21. Task Status Update Test

The interactive task status feature was tested in the browser.

Tested feature:

Changing the status of a task by clicking a button in the frontend.

Test steps:

1. The backend was started with `node server.js`.
2. The frontend was started with `npm.cmd run dev`.
3. The frontend was opened at `http://localhost:5173`.
4. The task section was opened.
5. The task `Buy drinks` was changed from `open` to `done`.
6. The user interface updated the task status.

Expected result:

The selected task should show the new status after clicking the button.

Actual result:

The task `Buy drinks` showed the status `done`.

Conclusion:

The task status update feature worked correctly.

This test proves that the frontend can send a PATCH request to the backend and that the backend can return updated data to the frontend.