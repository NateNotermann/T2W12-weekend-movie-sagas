const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')




/** ---------- ROUTES ---------- **/
// ---------- app.use('/api/genre', genreRouter)---------- //


//  Test SQL Code:
    // get EVERYTHING from "genres" TABLE: --
        // -- SELECT * FROM "genres";
  // get ONE genre from "genres" TABLE: --
        // SELECT * FROM "genres" WHERE "genres"."name" = 'Adventure';



// eventually GROUP BY "movies."title" or "genres"."movie.id";

// ----- Get all genres for each movie ----- //
router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM "genres";';
  pool.query(query)
    .then( result => {
      console.log('route.get result:', result);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR in route.get genres', err);
      res.sendStatus(500)
    })

});


// router.get('/id', (req, res) => {
//   pool.query('SELECT * FROM "genres";')
//   .then((result) => {
//     res.send(result.rows);
//   })
// .catch((error) => {
//   console.log('ERROR in GET', error );
//   res.sendStatus(500);
// })// Add query to get all genres
// });









module.exports = router;