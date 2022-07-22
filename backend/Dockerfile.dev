FROM python:3.10.4-alpine3.15

RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

USER app

EXPOSE 5000

CMD [ "python", "app.py" ]