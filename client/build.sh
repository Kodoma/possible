#!/bin/bash

echo '###yarn dev'
cd $(dirname $(realpath $0))

yarn run build

rsync -av $(pwd)/build $(pwd)/server/
rm -rf $(pwd)/build

cd $(pwd)/server

yarn start
