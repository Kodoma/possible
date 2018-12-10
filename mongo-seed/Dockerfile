FROM mongo:3.2

RUN echo 'mongoimport Books Collections'

RUN mkdir -p /usr/code/possible/mongo-seed
WORKDIR /usr/code/possible/mongo-seed

COPY ./data/books.json books.json

RUN echo 'mongoimport --host=mongo'
CMD mongoimport --verbose --host mongo --port 27018 --db possibleDb --collection books --type json --file ./books.json --jsonArray
