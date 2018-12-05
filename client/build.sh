#!/bin/bash

yarn dev
#yarn run build:int

rsync -av $(pwd)/build $(pwd)/server/
rm -rf $(pwd)/build

#cd $(pwd)/server

yarn start
