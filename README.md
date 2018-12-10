# Test - Possible 
ReactJS (Frontend) y NodeJs (Backend)

## Selected technologies
Frontend
- [react.js](https://facebook.github.io/react/)
- [webpack](https://webpack.github.io/)
Backend
- [Node.js](https://nodejs.org/es/)
- [Restify](http://restify.com/)

## Requerimientos
Para correr & trabajar en este proyecto necesitas tener instalado
- [Node.js](http://nodejs.org/) version > 8.9.0
- [npm](https://www.npmjs.org/) ó [yarn](https://www.npmjs.com/package/yarn)

### Docker y Docker Compose
- [Docker](https://docs.docker.com/engine/installation/)
- [Docker Compose](https://docs.docker.com/compose/install/

## Instalación
### Con Docker Compose
1. Asegurarse de tener instalado [Docker](https://docs.docker.com/engine/installation/) y [Docker Compose](https://docs.docker.com/compose/install/)
2. En la consola correr los siguientes comandos:
- cd `possible`
- `docker-compose build`
- `docker-compose up`
2. Acceder a http://localhost:5000/ en tu browser

### Con Yarn
1. Asegurarse de tener intalado [npm](https://www.npmjs.org/) y [yarn](https://www.npmjs.com/package/yarn)
2. En la consola correr los siguientes comandos:

- cd `possible/server`
- `yarn install`
- `yarn start`

3. Levantar Mongo:
- cd `..`
- `docker-compose build mongo`
- `docker-compose up mongo`

4. Correr migración:
- `mongoimport --verbose --host mongo --port 27018 --db possibleDb --collection books --type json --file ./mongo-seed/data/books.json --jsonArray`

5. Instalar UI:
- cd `possible/client`
- `yarn install`
- `yarn dev` - para development mode

6. Acceder a http://localhost:5000/ en tu browser
7. Acceder a http://localhost:3000/api/documentation en tu browser

### Con npm
1. Asegurarse de tener intalado [npm](https://www.npmjs.org/)
2. En la consola correr los siguientes comandos:

- cd `possible/server`
- `npm install`
- `npm start`

3. Levantar Mongo:
- cd `..`
- `docker-compose build mongo`
- `docker-compose up mongo`

4. Correr migración:
- `mongoimport --verbose --host mongo --port 27018 --db possibleDb --collection books --type json --file ./mongo-seed/data/books.json --jsonArray`

5. Instalar UI:
- cd `possible/client`
- `npm install`
- `npm run dev` - para development mode

6. Acceder a http://localhost:5000/ en tu browser
7. Acceder a http://localhost:3000/api/documentation en tu browser
