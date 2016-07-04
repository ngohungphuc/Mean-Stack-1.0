/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
	//singup function
	singup : function(req,res){
		//require module
		var Passwords = require('machinepack-passwords');
		Passwords.encryptPassword({
			password: req.param('password'),
			difficulty:6,
		}).exec({
			error: function(err){
				return res.negotiate(err);
			},
			success : function(encryptedPassword){
				require('machinepack-gravatar').getImageUrl({
					emailAddress:req.param('email')
				}).exec({
					error: function(err){
						return res.negotiate(err);
					},
					success:function(gravatarUrl){
						User.create({
							name:req.param('name'),
							email:req.param('email'),
							password:encryptedPassword,
							lastLoggedIn:new Date(),
							gravatarUrl:gravatarUrl
						},function userCreated(err,newUser){
							if(err){
								console.log(err);
								return res.negotiate(err);
							}
							console.log("User added");
							return res.json({
								id : newUser.id
							});
						})
					}
				})
			}
		})
	},

	//login function 
	login : function(req,res){
		//validate user 
		User.findOne({
			email: req.param('email')
		},function foundUser(err,user){
			if(err){
				return res.negotiate(err);
			}
			if(!user){
				return res.notFound();
			}

			require('machinepack-passwords').checkPassword({
				passwordAttempt : req.param('password'),
				encryptedPassword : user.password
			}).exec({
				error : function(err){
					console.log("Password error");
					return res.negotiate(err);
				},
				incorrect : function(){
					console.log("Password incorrect");
					return res.notFound();
				},
				success : function(){
					req.session.me = user.id;
					console.log("Success");
					return res.ok();
				}
			})
		})
	}
};

