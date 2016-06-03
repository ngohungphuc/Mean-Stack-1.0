var express = require('express');
var router = express.Router();
//require article object
var Article=require('../models/article');

//get all article
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

router.post('/', function(req, res, next) {
  //get form value
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  //article object
  var newArticle=new Article({
  	title:title,
  	category:category,
  	body:body
  });

  //call create Article method
  Article.createArticle(newArticle,function(err,article){
  	if(err){
  		console.log(err);
  	}
  	//redirect
  	res.location('/articles');
  	res.redirect('/articles');
  });
});

// Update Article
router.put('/', function(req, res, next){
	var id	= req.body.id;
	var data = {
		title: req.body.title,
		category: req.body.category,
		body: req.body.body
	};

	// Create Article
	Article.updateArticle(id, data, function(err, article){
		if(err){
 			console.log(err);
 		}
 		
		res.location('/articles');
		res.redirect('/articles');
	});
});


// Remove Article
router.delete('/:id', function(req, res, next){
	var id	= req.params.id;

	// Create Article
	Article.removeArticle(id, function(err, article){
		if(err){
 			console.log(err);
 		}
		
		res.location('/articles');
		res.redirect('/articles');
	});
});



module.exports = router;
