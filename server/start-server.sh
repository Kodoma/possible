#!/usr/bin/env bash

echo 'mongoimport Books Collections'
mongoimport --host mongodb --db possibleDb --collection contacts --type json --file /books.json --jsonArray 

wait_for_db() {
  nslookup mongodb
  if ! nc -z mongodb 27017; then
    echo "Waiting for mongodb..."
    sleep 2
    wait_for_db
  fi
}

wait_for_db

rm /var/lib/mongodb/mongod.lock
mongod –repair
sudo service mongod start 
mongo


mongo admin << EOF
use admin;
db.createUser({
    user: 'useradmin',
    pwd: '$root',
    roles:[{
        role:'userAdminAnyDatabase',
        db:'possibleDb'
    }]
});
exit
EOF

mongo admin -u useradmin -p ${PASS} << EOF
use possibleDb;
db.createUser({
    user: root,
    pwd: 12345,
    roles:[{
        role:'readWrite',
        db:possibleDb
    }]
});
exit
EOF


echo 'Backend Yarn Start'
yarn start

echo 'Node app.js'
node app.js