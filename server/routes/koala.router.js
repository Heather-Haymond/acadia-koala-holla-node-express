const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
// 1. A way to connect to our DB (so we can send a query!)
const pool = require('../modules/pool.js');
// 2. We need to send a query to our DB.
// 3. We need to mail the data our query gets us back
//    to the client.

// GET
koalaRouter.get('/', (req, res) => {
  console.log('GET koalas');
  const sqlText = `
        SELECT * FROM koalas
            ORDER BY id; 
    `;

  // Use our pool object to query the db:
  pool
    .query(sqlText)
    .then((dbResult) => {
      let koalasWeAskedFor = dbResult.rows;
      res.send(koalasWeAskedFor);
    })
    .catch((dbError) => {
      console.log('DB query failed inside GET /songs!');
      console.log('Error is:', dbError);
      res.sendStatus(500);
    });
});

// POST
koalaRouter.post('/', (req, res) => {
  console.log('POST koalas');
  // const sqlText = `
  // INSERT INTO "koalas"("name", "favorite_color", "age", "ready_to_transfer", "notes") 
  // VALUES
  // ('', 'Red', 4, true,	'Born in Guatemala'),
    //`;})
  });
// PUT

// DELETE

module.exports = koalaRouter;
