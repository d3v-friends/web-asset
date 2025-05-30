#!/bin/zsh
set -e;

BASE_TAG=$1
TAG="$BASE_TAG"
ORIGIN="origin"

echo "tag=$TAG, base_tag=$BASE_TAG, origin=$ORIGIN"

git tag "$TAG"
git push --tags "$ORIGIN" "$TAG"

echo "⭕ upload tag done"