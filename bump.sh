#!/bin/sh
# Bump the asset version so browsers load fresh CSS and JS.
# Run this after editing src/css/tokens.css or src/js/site.js.
set -e
cd "$(dirname "$0")"
current=$(grep -o 'tokens\.css?v=[0-9]*' src/pages/index.html | head -1 | sed 's/.*v=//')
next=$((current + 1))
sed -i "s/tokens\.css?v=[0-9]*/tokens.css?v=$next/g; s/site\.js?v=[0-9]*/site.js?v=$next/g" src/pages/*.html
echo "assets bumped to v$next"
