// Import the pg library, which we can use to
// configure a "pool" object.
// Think of the pool object as being a walkie-talkie
// to talk to our databse.
const pg = require('pg');

// Make the pool object. (AKA: Walkie-talkie.)
const pool = new pg.Pool({
  database: 'koala holla',
  host: 'localhost',
  port: 5432,
});

// Export the pool object so we can use it elsewhere:
module.exports = pool;
