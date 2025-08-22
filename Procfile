web: bash -c "chmod +x build_frontend.sh && ./build_frontend.sh && gunicorn -w 1 -k gthread --threads 8 -t 120 --log-level info --access-logfile - --error-logfile - -b 0.0.0.0:$PORT app:app"
