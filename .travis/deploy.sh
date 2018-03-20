#!/bin/bash

# print outputs and exit on first failure
set -xe

if [ $TRAVIS_BRANCH == "master" ] ; then

    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/travis_rsa
    cd public
    
    git init
    git remote add deploy "ssh://travis@iacono.com.br:2222/var/www/iacono.com.br"
    git config user.name "Travis CI"
    git config user.email "travis@iacono.com.br"
    git add .
    git status
    git commit -m "Deploy"
    git push -f deploy HEAD:master

else

    echo "No deploy script for branch '$TRAVIS_BRANCH'"

fi
