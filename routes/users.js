var express = require('express');
const db = require('../configs/db.config');
var router = express.Router();

router.get('/', function (req, res, next) {
  // Query the user table
  db.query('SELECT * FROM users', function (err, results) {
    if (err) {
      console.error('Error executing the query: ' + err.stack);
      return res.status(500).send('Error executing the query');
    }
    console.log('Retrieved data from the user table:', results);

    // Send the data as the response
    res.send(results);

    // Close the database connection
    db.end(function (err) {
      if (err) {
        console.error('Error closing the database connection: ' + err.stack);
        return;
      }
      console.log('Closed the database connection');
    });
  });
});

router.post('/', function (req, res, next) {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function (err, results) {
    if (err) {
      console.error('Error executing the query: ' + err.stack);
      return;
    }
    console.log('Inserted a new row in the user table:', results);

    // Send the data as the response
    res.send(results);

    // Close the database connection
    db.end(function (err) {
      if (err) {
        console.error('Error closing the database connection: ' + err.stack);
        return;
      }
      console.log('Closed the database connection');
    });
  });
});

module.exports = router;
