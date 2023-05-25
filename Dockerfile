FROM node:16.17.1-alpine3.16 as build
WORKDIR /usr/app
COPY . /usr/app
ARG BACKEND_URL
ENV REACT_APP_BACKEND_URL $BACKEND_URL
RUN npm ci

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/build /usr/share/nginx/html