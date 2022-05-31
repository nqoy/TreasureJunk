FROM node:16.3.0-alpine

COPY package.json .

WORKDIR .

Run npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]