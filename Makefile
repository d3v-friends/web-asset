tag:
	sh ./script/tag.sh $(shell jq ".version" package.json | tr -d '"')
build:
	sh ./script/build.sh