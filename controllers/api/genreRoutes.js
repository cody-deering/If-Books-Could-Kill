const models = require('../../models');
const router = require('express').Router();

// Define an array of available genres
const genres = ['Mystery Crime Drama', 'True Crime', 'Horror', 'Thriller'];

// Define a dynamic route to handle genre selection
router.get('/books/:genre', (req, res) => {
  const selectedGenre = req.params.genre;

  // Check if the selected genre is in the list of available genres
  if (genres.includes(selectedGenre)) {
    res.sendFile(__dirname, 'genre-page.handlebars');
    
  } else {

    res.status(404).send('Genre not found');
  }
});

module.exports = router;
