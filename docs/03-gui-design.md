# GUI Design

## Overview

The graphical user interface of ClubTasker is designed as a simple dashboard application.

The user interface contains three main areas:

- Sidebar navigation
- Dashboard section
- Event and task overview

## Sidebar

The sidebar is placed on the left side of the application.

It contains the project name, a short description, and navigation links.

The navigation links are:

- Dashboard
- Events
- Tasks

This makes the structure easy to understand for users.

## Dashboard Section

The dashboard section explains the purpose of the application.

It also shows the backend status.

The backend status is important because it proves that the React frontend communicates with the Express backend.

Possible status values are:

- checking
- connected
- not connected

In the final test, the status was connected.

## Event Overview

The event overview shows event cards.

Each card contains:

- event title
- event date
- event location

The event data is loaded from the backend API route:

http://localhost:3000/api/events

## Task Overview

The task overview shows task cards.

Each card contains:

- task title
- task status
- related event ID

The task data is loaded from the backend API route:

http://localhost:3000/api/tasks

## Design Choices

The design uses a dark sidebar and light content cards.

This creates a clear visual separation between navigation and content.

Cards are used because events and tasks are separate information units.

This makes the interface easier to read.

The backend status card is placed in the dashboard section because the connection between frontend and backend is an important technical part of the project.

## Screenshots

Screenshots of the GUI were created during development.

They show the running frontend, the backend connection status, and the loaded event and task data.