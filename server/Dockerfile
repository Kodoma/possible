FROM alexproca/docker-node-yarn

RUN echo "Dockerfile Server"

MAINTAINER Germán Cáceres <germancaceres18@gmail.com>

RUN mkdir -p /usr/code/possible/server
WORKDIR /usr/code/possible/server

COPY ./package.json package.json
RUN npm install

COPY ./handlers handlers
COPY ./services services
COPY ./swagger swagger

COPY ./app.js app.js
COPY ./config.js config.js

CMD npm run start

EXPOSE 9000
