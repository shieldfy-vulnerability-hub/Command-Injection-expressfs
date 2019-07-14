FROM node:8

WORKDIR ./

COPY . .

RUN npm install

EXPOSE 3000

WORKDIR src/

CMD ["node", "app.js"]