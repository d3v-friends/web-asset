#!/bin/zsh
set -e;
echo "$1";
exit 1;

BASE_TAG=$1
TAG="$BASE_TAG"
ORIGIN="origin"

echo "tag=$TAG, base_tag=$BASE_TAG, origin=$ORIGIN"

git tag -d "$TAG"
git push -d "$ORIGIN" "$TAG"
git tag -d latest
git push -d latest

git tag "$TAG"
git push --tags "$ORIGIN" "$TAG"

echo "⭕ upload tag done"