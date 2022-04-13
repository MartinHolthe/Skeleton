FROM node:16-alpine as base

WORKDIR /src
COPY package.json package-lock.json /src/
ENV PORT 8080
EXPOSE $PORT

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /src
CMD ["node", "server.js"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . /src
CMD ["npm", "run", "dev"]