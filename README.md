# RestApi - typescript express postgreSql typeORM

understanding basic RestApi with typescript express postgreSql typeORM

## Screenshots

<img src="https://github.com/indracahyae/ts-exp-pg-orm/blob/master/public/table.png">
<br>
<!-- insomnia -->

## Tech Stack

- Typescript = main language
- Express = backend framework
- PostgreSql = database
- TypeORM = database interaction
  <br><br>
  dependencies
- nodemon : auto restart server after change
- ts-node : typescript engine when development
- tsc : typescript engine for production
- dotenv: for environment variable
- reflect-metadata: typeorm features
- path: for tsc compiling directory

## Project Directories/ files

public: for static assets <br>
src: app files <br>
config files (in root directory): .env, nodemon.json, ormconfig.ts, tsconfig.json, package.json, package.json, .gitignore.<br>
index.ts : starting file<br>
entities : database table/ schema <br>
controller: actions <br>
routes: app routes <br>

## RestApi

table: products, categories <br>
add product: (POST) localhost/api/products <br>
get all product: (GET) localhost/api/products <br>
select one product: (GET) localhost/api/products/:id <br>
update product: (PUT) localhost/api/products/:id <br>
delete product: (DELETE) localhost/api/products/:id <br>

## Run Locally

- download or Clone this project
- Install dependencies/ package
- prepare your database, table
- prepare and start your local server
- ready to run project (suitable with your local server)

## Authors

[@indracahyae](https://www.github.com/indracahyae)
