FROM python:3.10.4-alpine3.15

RUN addgroup -S app && adduser -S -G app app

RUN apk add --no-cache \
    gcc g++ linux-headers python3-dev openssl-dev

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

USER app

EXPOSE 5000

CMD [ "uwsgi", "--ini", "./uwsgi.ini" ]