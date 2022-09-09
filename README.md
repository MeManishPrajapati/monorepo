Create folder monorepo

install lerna npm i lerna -D

init lerna > npx lerna init

then create two repo in packages folder

1. create-react-app
2. node app

run > npx lerna clean -y 
it will remove node module from both repo.

run > npx lerna bootstrap --hoist
it will get dependancies from packages and install at root level
So node_modules at root level will have all dependancies