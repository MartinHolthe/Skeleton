# stage 1
FROM node:latest AS my-app-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=my-app-build /app/dist/angular-docker /usr/share/nginx/html
EXPOSE 80

# docker build -t angular-app .
# docker run -it --rm -p 9000:80 angular-app