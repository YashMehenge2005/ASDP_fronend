# Statethon Backend

Flask-based backend API for the Statethon application.

## Setup

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Run the development server:
```bash
python main.py
```

The backend will run on `https://asdp-g3cm.onrender.com/`

## API Endpoints

- `POST /login` - User login
- `POST /register` - User registration
- `GET /profile` - Get user profile
- `POST /upload` - Upload data file
- `POST /clean` - Clean uploaded data
- `GET /report` - Generate report
- `GET /download_data` - Download processed data
- `GET /healthz` - Health check

## Environment Variables

- `SECRET_KEY` - Flask secret key
- `FLASK_ENV` - Environment (development/production)
