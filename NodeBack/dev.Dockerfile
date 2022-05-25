FROM node:12-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn && yarn global add nodemon

COPY . .

CMD ["npm", "run", "devDocker"]
