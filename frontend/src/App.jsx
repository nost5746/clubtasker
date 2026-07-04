import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [backendStatus, setBackendStatus] = useState("checking");

  useEffect(() => {
    fetch("http://localhost:3000/api/health")
      .then((response) => response.json())
      .then(() => {
        setBackendStatus("connected");
      })
      .catch(() => {
        setBackendStatus("not connected");
      });

    fetch("http://localhost:3000/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch(() => {
        setEvents([]);
      });

    fetch("http://localhost:3000/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch(() => {
        setTasks([]);
      });
  }, []);

  function updateTaskStatus(taskId, newStatus) {
    fetch(`http://localhost:3000/api/tasks/${taskId}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: newStatus
      })
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        setTasks((currentTasks) =>
          currentTasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          )
        );
      })
      .catch(() => {
        alert("The task status could not be updated.");
      });
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h1>ClubTasker</h1>
        <p>Club task and event manager</p>

        <nav>
          <a href="#dashboard">Dashboard</a>
          <a href="#events">Events</a>
          <a href="#tasks">Tasks</a>
        </nav>
      </aside>

      <main className="main-content">
        <section className="hero" id="dashboard">
          <div>
            <p className="label">Distributed Web App</p>
            <h2>Organize club events and tasks in one place.</h2>
            <p>
              ClubTasker connects a React frontend with an Express backend.
              Events and tasks are loaded through separate API routes. Task
              status changes are sent back to the backend through a PATCH
              request.
            </p>
          </div>

          <div className="status-card">
            <span>Backend status</span>
            <strong>{backendStatus}</strong>
          </div>
        </section>

        <section className="section" id="events">
          <div className="section-header">
            <h2>Events</h2>
            <p>Data loaded from /api/events</p>
          </div>

          <div className="card-grid">
            {events.map((event) => (
              <article className="card" key={event.id}>
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.location}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="tasks">
          <div className="section-header">
            <h2>Tasks</h2>
            <p>Data loaded from /api/tasks</p>
          </div>

          <div className="card-grid">
            {tasks.map((task) => (
              <article className="card" key={task.id}>
                <h3>{task.title}</h3>

                <span className={`status ${task.status.replace(" ", "-")}`}>
                  {task.status}
                </span>

                <p>Event ID: {task.eventId}</p>

                <div className="button-row">
                  <button onClick={() => updateTaskStatus(task.id, "open")}>
                    Open
                  </button>

                  <button
                    onClick={() => updateTaskStatus(task.id, "in progress")}
                  >
                    In progress
                  </button>

                  <button onClick={() => updateTaskStatus(task.id, "done")}>
                    Done
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;