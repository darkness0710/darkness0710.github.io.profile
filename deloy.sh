#!bin/bash

set -e

npm install
npm run build
cd docs
cp index.html 404.html
cd -

git add -A
git commit -m "update"

git push -f git@github.com:darkness0710/darkness0710.github.io.profile.git master:gh-pages
