FROM mongo:3.2

RUN echo 'mongoimport Books Collections'

RUN mkdir -p /usr/code/possible/mongo-seed
WORKDIR /usr/code/possible/mongo-seed

COPY ./data/books.json books.json

RUN echo 'mongoimport --host=127.0.0.1'
CMD mongoimport --verbose --host localhost --port 27018 --db possibleDb --collection books --type json --file books.json