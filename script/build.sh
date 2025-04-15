#!/bin/zsh


rm -rf ./dist

tsc -p tsconfig.json;
tsc-alias -p tsconfig.json --verbose;
rm ./**/tsconfig.tsbuildinfo;
cp ./src/module.d.ts ./dist/module.d.ts;

git add .;
