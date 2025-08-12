FROM python:3.11

COPY requirements.txt /app/requirements.txt
WORKDIR /app

EXPOSE 5050

RUN pip install -r requirements.txt

COPY . .

CMD ["python", "main.py"]