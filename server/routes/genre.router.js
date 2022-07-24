const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    pool.query('SELECT "genres"."name" "genres";')
    .then((result) => {
      res.send(result.rows);
    })
  .catch((error) => {
    console.log('ERROR in GET', error );
    res.sendStatus(500);
  })// Add query to get all genres
});



router.get('/id', (req, res) => {
  pool.query('SELECT "genres"."name" "genres";')
  .then((result) => {
    res.send(result.rows);
  })
.catch((error) => {
  console.log('ERROR in GET', error );
  res.sendStatus(500);
})// Add query to get all genres
});









module.exports = router;