FROM node:20.19.0-bookworm-slim

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --omit=dev

ENV DEBUG=todo-backend:*

USER node

CMD npm start
