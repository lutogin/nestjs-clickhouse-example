FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN ls -l

EXPOSE 3000 9229

CMD yarn start:dev
