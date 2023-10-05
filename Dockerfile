FROM python:3.10-slim-buster
EXPOSE 8000

WORKDIR /app
RUN pip3 install poetry
COPY pyproject.toml pyproject.toml
COPY poetry.lock poetry.lock
RUN poetry config virtualenvs.in-project true
RUN poetry install --no-dev
COPY . .
CMD ["poetry", "run", "python", "main.py"]
