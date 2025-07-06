FROM node:22

ARG API_PORT
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm install sequelize-cli

EXPOSE ${API_PORT}

CMD ["npm", "run", "dev"]