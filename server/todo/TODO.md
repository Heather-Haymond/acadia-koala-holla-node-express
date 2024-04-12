## Initial Prerequisite Steps

1. Check if we have our dependencies (code)

   - Axios
   - Pool
   - Express

   a. `npm install` the libraries or add the script that we need - Added Axios CDN script - `$ npm install pg` - Express dependency is available with `npm install` (it's in our `package.json` under "`dependencies`")

2. Check if we have the right tools (other stuff):
   - Postgres
   - Postico
   - Postman

## Initial Project Setup

1. Get the server running

   - `npm start` should run `node server/server.js`

   a. Optional use - `nodemon` - if so, `npm i nodemon` for a consistently running server. Run `nodemon --exec npm start` to use `nodemon` vs `npm start`.

2. Check for console errors in the DOM

**Errors:**

![alt text](./todo/image.png)

**CHECK the file:**

![alt text](./todo/image-1.png)

**CREATE the file:**

![alt text](./todo/image-2.png)

## Intial Database Setup

1. Make sure that `Postgres` is up and running.

![alt text](./todo/image-3.png)

2. Open up `Postico` -> localhost -> `+ database` to add a new database.

![alt text](./todo/image-4.png)

3. Once database is added, navigate to it and run queries. Store the queries in a `database.sql` file in our project.

![alt text](./todo/image-5.png)

![alt text](./todo/image-6.png)

4. Connect the project to the database by create a `modules` directory under `server` directory. Add the `pool.js` file. This is where our connection to the database will happen.

![alt text](./todo/image-7.png)

5. In the `pools.js`, create a pool object to connect to the database. Ensure the information is correct.

![alt text](./todo/image-8.png)

6. Create a router file for the database 

(GET [read] /POST [create] /DELETE [delete] /UPDATE [update])

![alt text](./todo/image-9.png)

## Client-side Javascript - GET
1. Create a `get` function. i.e. `getKoalas()` and implement `axios` to obtain data from the server (with routing - `url: '/'`)

Get koalas from the server with `axios`.

![alt text](./todo/image-10.png)

  a. Troubleshoot the GET call with `console.log([any message here]);` to check if `axios` route works. The message will display in the DOM (console).


## Router Setup - GET

1. Create GET routing call. 
   GET `koalaRouter.get('/', () => {})`

   a. Troubleshoot the GET call with `console.log([any message here]);` to check if server route works. The message will display in the terminal (server).