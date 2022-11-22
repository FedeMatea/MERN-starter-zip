const Movie = require("../models/movie-schema");

const postMovies = async (req, res, next) => {
  const movies = req.body;
  try {
    await Movie.insertMany(movies);
    res.status(201).json({message: "Ok"})
  } catch (error) {
    return next(error);
  }
};

module.exports = { postMovies };
