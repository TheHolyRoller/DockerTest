FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm install 


COPY . .

ENV PORT=8080 


EXPOSE 8080


CMD [ "npm", "start" ]