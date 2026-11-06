# ApplyFlow

**A smarter way to track and manage your job applications.**

ApplyFlow is a modern, responsive job application tracking dashboard designed to help students and job seekers organize their job search, monitor application progress, and manage their interview pipeline from one place.

Instead of maintaining scattered spreadsheets or manually remembering application statuses, ApplyFlow provides a centralized workspace to manage the entire job application process.

> **Project Status:** In Development

---

## Problem Statement

During a job search, candidates often apply to multiple companies simultaneously. Keeping track of application dates, job roles, interview schedules, and application statuses can become difficult.

ApplyFlow aims to solve this problem by providing a centralized platform where users can organize applications, track progress, and gain insights into their job search.

## Planned Features

### 1. Dashboard
- Overview of total job applications.
- Interview, offer, and rejection statistics.
- Application activity charts.
- Application status distribution.
- Recently added applications.
- Upcoming interviews.

### 2. Application Management
- Add new job applications.
- Edit existing application details.
- Delete applications.
- View detailed application information.
- Search applications by company or job title.
- Filter and sort applications.

### 3. Kanban Board
Visualize the job application pipeline through five stages:

- Applied
- Assessment
- Interview
- Offer
- Rejected

Applications will be organized into columns based on their current status.

### 4. Analytics
- Monthly application trends.
- Application status distribution.
- Interview conversion rate.
- Offer statistics.
- Job search progress insights.

### 5. Application Details
- Company and job information.
- Job description and application URL.
- Salary and location details.
- Personal notes.
- Interview preparation notes.
- Important dates and updates.

### 6. Data Persistence
- Save application data using browser LocalStorage.
- Retain data across page refreshes.
- Provide sample data for initial demonstration.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Component-based UI development |
| JavaScript | Application logic |
| Vite | Development environment and build tool |
| Tailwind CSS | Styling and responsive design |
| React Router v7 | Client-side routing |
| Context API | Shared application state |
| Recharts | Dashboard charts and analytics |
| Lucide React | Icons |
| LocalStorage | Client-side data persistence |

**Architecture:** Frontend-only application. No backend is planned for the initial version.

---

## Project Structure

```text
applyflow/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── common/
│   │   ├── dashboard/
│   │   └── applications/
│   │
│   ├── context/
│   │   └── ApplicationContext.jsx
│   │
│   ├── hooks/
│   │
│   ├── data/
│   │
│   ├── utils/
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Applications.jsx
│   │   ├── ApplicationDetails.jsx
│   │   ├── Kanban.jsx
│   │   ├── Analytics.jsx
│   │   └── NotFound.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

*The structure will evolve as development progresses.*

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS recommended)
- npm
- Git

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Navigate to the project directory

```bash
cd applyflow
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

---

## Application Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Dashboard | Application overview |
| `/applications` | Applications | Manage job applications |
| `/applications/:id` | Application Details | View individual application |
| `/kanban` | Kanban Board | Track application stages |
| `/analytics` | Analytics | View job search insights |
| `*` | Not Found | Handle unknown routes |

---

## Key Concepts Explored

This project is also an opportunity to strengthen practical React development skills.

The development process will involve:

- Component-based architecture.
- Reusable React components.
- React Router and nested layouts.
- Context API and shared state.
- Custom React Hooks.
- CRUD operations.
- Browser LocalStorage.
- Data filtering and sorting.
- Data visualization.
- Responsive UI development.
- Git and GitHub workflow.
- Production builds and deployment.

---

## Development Roadmap

- [ ] Project setup and dependency configuration
- [ ] Tailwind CSS and design system
- [ ] Sidebar, Topbar and MainLayout
- [ ] React Router configuration
- [ ] Dashboard UI
- [ ] Application management and CRUD
- [ ] Context API integration
- [ ] LocalStorage persistence
- [ ] Kanban board
- [ ] Analytics and charts
- [ ] Application details and notes
- [ ] Responsive design
- [ ] Testing and bug fixing
- [ ] README screenshots and documentation
- [ ] Production deployment

---

## Future Enhancements

Potential improvements beyond the initial scope:

- Authentication and user accounts.
- Backend and database integration.
- Cloud synchronization.
- Drag-and-drop Kanban functionality.
- Interview reminders and notifications.
- Export application data.
- Dark mode.
- AI-powered job search insights.

---

## Development Philosophy

ApplyFlow is being developed with an emphasis on:

- Clean and maintainable code.
- Reusable components.
- Separation of concerns.
- Responsive design.
- Practical React architecture.
- Incremental development and testing.

---

## License

This project is currently developed as a personal portfolio project.

A suitable open-source license can be added before public distribution.

---

**Built with React, curiosity, and a goal to become a better software engineer.**
