FROM alexproca/docker-node-yarn

RUN echo "Dockerfile Server"

MAINTAINER Germán Cáceres <germancaceres18@gmail.com>

RUN mkdir -p /usr/code/possible/server
WORKDIR /usr/code/possible/server

COPY ./package.json package.json
RUN yarn install

COPY ./handlers handlers
COPY ./logs logs
COPY ./services services
COPY ./strategies strategies
COPY ./swagger swagger

COPY ./app.js app.js
COPY ./config.js config.js

CMD yarn start

EXPOSE 9000
