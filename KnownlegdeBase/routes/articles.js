var express = require('express');
var router = express.Router();
//require article object
var Article=require('../models/article');

//get all
router.get('/', function(req, res, next) {
  Article.getArticles(function(err,articles){
  	if(err){
  		console.log(err);
  	}
  	res.json(articles);
  });
});


//get by id
router.get('/:id', function(req, res, next) {
  Article.getArticleById(req.params.id,function(err,article){
  	if(err){
  		console.log(err);
  	}
  	res.json(article);
  });
});

//get by category
router.get('/category/:category', function(req, res, next) {
  Article.getArticleByCategory(req.params.category,function(err,article){
  	if(err){
  		console.log(err);
  	}
  	res.json(article);
  });
});
module.exports = router;
