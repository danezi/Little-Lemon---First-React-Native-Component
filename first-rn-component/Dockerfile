FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD ["npx", "expo", "start", "--web", "--clear", "--host", "lan"]
