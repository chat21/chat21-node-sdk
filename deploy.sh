
#version=`git diff HEAD^..HEAD -- "$(git rev-parse --show-toplevel)"/package.json | grep '^\+.*version' | sed -s 's/[^0-9\.]//g'`


npm version patch
version=`node -e 'console.log(require("./package.json").version)'`
echo "version $version"

if [ "$version" != "" ]; then
    git tag -a "v$version" -m "`git log -1 --format=%s`"
    echo "Created a new tag, v$version"
    git push --tags
    npm publish
fi
