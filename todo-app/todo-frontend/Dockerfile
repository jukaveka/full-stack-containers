FROM node:24 AS build-stage

WORKDIR /usr/src/app

ENV VITE_BACKEND_URL=http://localhost:3000

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:1.29.5-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html