# Precision Agency 🎯

A modern React web application for a digital creative agency — built with React, Tailwind CSS, and Firebase.

**🚀 Live Demo:** [https://ashishh-tech.github.io/GDG-PROJECT-2/](https://ashishh-tech.github.io/GDG-PROJECT-2/)

## Features

- **Public Pages** — Home, Services, Case Studies, Contact
- **Authentication** — Sign up & Login using Firebase Authentication
- **Dashboard** — Protected routes for Projects, Metrics, Clients, and Profile management
- **Responsive** — Works perfectly on mobile, tablet, and desktop
- **User Profiles** — Synchronized in real-time with Cloud Firestore

> **Note on Authentication:** For demonstration purposes and to provide a smoother beginner experience, the email verification requirement has been bypassed. Users can access the dashboard immediately after signing up.

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend framework |
| Vite | Build tool & dev server |
| Tailwind CSS v3 | Utility-first styling |
| Firebase Auth | Secure user authentication |
| Cloud Firestore | NoSQL database for user profiles |
| React Router DOM | Client-side routing (`HashRouter` for GitHub Pages support) |
| React Hot Toast | Toast notifications |
| React Icons | Icon library |

## Project Structure

```text
src/
├── App.jsx                    # Main app with routing logic
├── main.jsx                   # Entry point (HashRouter setup)
├── index.css                  # Global styles & Tailwind directives
├── firebase/
│   └── config.js              # Firebase initialization & keys
├── context/
│   └── AuthContext.jsx        # Global Auth state management
├── components/
│   └── layout/
│       ├── Header.jsx         # Navigation bar
│       ├── Footer.jsx         # Footer
│       ├── DashboardLayout.jsx # Dashboard wrapper (Sidebar & Content)
│       └── Sidebar.jsx        # Dashboard navigation
└── pages/
    ├── Home.jsx
    ├── Services.jsx
    ├── CaseStudies.jsx
    ├── Contact.jsx
    ├── Login.jsx
    ├── SignUp.jsx
    └── dashboard/
        ├── DashboardHome.jsx
        ├── Projects.jsx
        ├── Metrics.jsx
        ├── Clients.jsx
        └── Profile.jsx
```

## Getting Started Locally

### Prerequisites

- Node.js (v18+)

### Installation

```bash
# Clone the repository
git clone https://github.com/ashishh-tech/GDG-PROJECT-2.git
cd GDG-PROJECT-2

# Install dependencies
npm install

# Start development server
npm run dev
```

### Deployment

This project uses `gh-pages` for deployment.

```bash
# Build and push to the gh-pages branch automatically
npm run deploy
```

## Author

**Ashish** — [GitHub](https://github.com/ashishh-tech)

## License

This project is open source and available under the [MIT License](LICENSE).
