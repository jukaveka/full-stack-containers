FROM node:20.20-bookworm-slim

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]
