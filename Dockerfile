FROM python:3.10-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Create non-root system user per CIS Docker Benchmark & Banking Hardening standards
RUN groupadd -g 10001 appgroup && \
    useradd -u 10001 -g appgroup -m -s /bin/bash appuser

# Copy all project code, data, models, and frontend
COPY . .
RUN chown -R appuser:appgroup /app

# Switch to non-root execution
USER 10001:10001

# Expose default port
EXPOSE 8000

ENV PORT=8000

# Container healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:${PORT:-8000}/api/v2/health || exit 1

# Start FastAPI server, respecting dynamic $PORT from Render, Cloud, or Local
CMD ["sh", "-c", "uvicorn src.app_v2:app --host 0.0.0.0 --port ${PORT:-8000}"]
