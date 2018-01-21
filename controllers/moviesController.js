var movies = require('./movieData');
var dbService=require('../services/dbServices')
exports.getAllMovies = function(req, res, next){
  return res.json(movies);
};
