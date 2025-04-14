#!/bin/zsh


rm -rf ./dist

tsc -p tsconfig.json;
tsc-alias -p tsconfig.json --verbose;
rm ./**/tsconfig.tsbuildinfo;

git add .;
