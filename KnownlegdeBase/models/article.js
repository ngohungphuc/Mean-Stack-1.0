var mongoose=require('mongoose');

var articleSchema=mongoose.Schema({
	title:{
		type:String,
		index:true,
		required:true
	},
	body:{
		type:String,
		required:true
	},
	category:{
		type:String,
		index:true,
		required:true
	},
	date:{
		type:Date,
		default:Date.now
	}
});
//module.exports access outside this js file
var Article= module.exports = mongoose.model('Article',articleSchema);

//get all articles
module.exports.getArticles=function(callback){
	Article.find(callback);
}

//get article by id
module.exports.getArticleById=function(id,callback){
	Article.findById(id,callback);
}

//get Category article
module.exports.getArticleByCategory=function(category,callback){
	var query={category:category};
	Article.find(query,callback);
}