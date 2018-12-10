FROM mongo

RUN echo 'mongoimport Books Collections'

COPY ./data/books.json books.json

RUN echo 'mongoimport --host=mongo'
CMD mongoimport --verbose --host mongo --port 27018 --db possibleDb --collection books --type json --file ./books.json --jsonArray
