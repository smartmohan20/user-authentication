FROM node:14

WORKDIR /app

COPY package*.json ./
COPY .env ./

RUN yarn

COPY . .

EXPOSE $PORT

CMD ["yarn", "start"]
