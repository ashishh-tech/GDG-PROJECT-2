# Precision Agency 🎯

A modern React web application for a digital creative agency — built with React, Tailwind CSS, and Firebase.

## Features

- **Public Pages** — Home, Services, Case Studies, Contact
- **Authentication** — Sign up, Login, Email Verification (Firebase Auth)
- **Dashboard** — Projects, Metrics, Clients, Profile management
- **Responsive** — Works on mobile, tablet, and desktop
- **User Profiles** — Stored in Firestore with editable fields

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Frontend framework |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling |
| Firebase Auth | User authentication |
| Cloud Firestore | User profile database |
| React Router DOM | Page routing |
| React Hot Toast | Notifications |
| React Icons | Icon library |

## Project Structure

```
src/
├── App.jsx                    # Main app with routes
├── main.jsx                   # Entry point
├── index.css                  # Global styles
├── firebase/
│   └── config.js              # Firebase setup
├── context/
│   └── AuthContext.jsx        # Auth state management
├── components/
│   └── layout/
│       ├── Header.jsx         # Navigation bar
│       ├── Footer.jsx         # Footer
│       ├── DashboardLayout.jsx # Dashboard wrapper
│       └── Sidebar.jsx        # Dashboard sidebar
└── pages/
    ├── Home.jsx
    ├── Services.jsx
    ├── CaseStudies.jsx
    ├── Contact.jsx
    ├── Login.jsx
    ├── SignUp.jsx
    ├── VerifyEmail.jsx
    └── dashboard/
        ├── DashboardHome.jsx
        ├── Projects.jsx
        ├── Metrics.jsx
        ├── Clients.jsx
        └── Profile.jsx
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- A Firebase project with Email/Password auth enabled

### Installation

```bash
# clone the repo
git clone https://github.com/ashishh-tech/GDG-PROJECT-2.git
cd GDG-PROJECT-2

# install dependencies
npm install

# start dev server
npm run dev
```

### Firebase Setup

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication** → **Email/Password**
3. Create a **Firestore Database** in test mode
4. Add your config to `src/firebase/config.js`

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with hero, toolkit, projects |
| Services | `/services` | Agency service offerings |
| Case Studies | `/case-studies` | Portfolio with stats |
| Contact | `/contact` | Contact form + info panel |
| Login | `/login` | Email/password login |
| Sign Up | `/signup` | Account creation |
| Verify Email | `/verify-email` | Email verification flow |
| Dashboard | `/dashboard` | Overview with stats & activity |
| Projects | `/dashboard/projects` | Project list with filters |
| Metrics | `/dashboard/metrics` | Analytics & charts |
| Clients | `/dashboard/clients` | Client directory |
| Profile | `/dashboard/profile` | Editable user profile |

## Screenshots

### Home Page
![Home](public/images/hero-architecture.png)

## Author

**Ashish** — [GitHub](https://github.com/ashishh-tech)

## License

This project is open source and available under the [MIT License](LICENSE).
