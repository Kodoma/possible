FROM alexproca/docker-node-yarn

RUN apt-get update && npm install -g webpack

RUN echo "Dockerfile client"

MAINTAINER Germán Cáceres <germancaceres18@gmail.com>

RUN mkdir -p /usr/code/possible/client
WORKDIR /usr/code/possible/client

RUN ls -al

COPY ./package.json package.json
RUN npm install

COPY ./.babelrc .babelrc
COPY ./.eslintrc .eslintrc
COPY ./webpack.production.config.js webpack.production.config.js
COPY ./webpack.config.js webpack.config.js
COPY ./src src

CMD npm run dev

EXPOSE 5000