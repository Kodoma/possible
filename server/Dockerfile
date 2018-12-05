FROM alexproca/docker-node-yarn

MAINTAINER Germán Cáceres <germancaceres18@gmail.com>

RUN mkdir -p /usr/code/possible/server
WORKDIR /usr/code/possible/server

COPY ./package.json package.json
RUN yarn install

COPY ./books.json /books.json
COPY ./handlers handlers
COPY ./logs logs
COPY ./services services
COPY ./strategies strategies
COPY ./swagger swagger

COPY ./app.js app.js
COPY ./config.js config.js

RUN groupadd -r mongodb && useradd -r -g mongodb mongodb

RUN mkdir -p /data/db && chown -R mongodb:mongodb /data/db

COPY ./start-server.sh start-server.sh
RUN chmod +x start-server.sh

EXPOSE 9000