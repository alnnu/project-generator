FROM python:3.11-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /src

COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./src .
EXPOSE 8000


ENTRYPOINT ["sh","-c","python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]

