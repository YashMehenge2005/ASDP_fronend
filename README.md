# Statethon

A full-stack application with separated frontend and backend.

## Project Structure

```
statethon/
├── frontend/          # React + Vite frontend
├── backend/           # Flask API backend
├── package.json       # Root package.json for managing both
└── README.md
```

## Quick Start

1. Install dependencies:
```bash
npm run install-all
```

2. Run both frontend and backend:
```bash
npm run dev
```

This will start:
- Frontend: http://localhost:5173
- Backend: https://asdp-g3cm.onrender.com/

## Development

### Frontend Only
```bash
cd frontend
npm run dev
```

### Backend Only
```bash
cd backend
python main.py
```

## Build

```bash
npm run build
```

## Technologies

- **Frontend**: React, Vite, React Router
- **Backend**: Flask, SQLAlchemy, Flask-Login
- **Database**: SQLite

