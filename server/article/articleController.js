var Article = require('./articleModel.js');

module.exports = {

createArticle:function(req,res){
	Article.findOne({title:req.body.title})
	.exec(function(err,article){
		if(article){
			res.json(new Error('Article was created before'))
		}else{
			
			var title=req.body.title;
			var content=req.body.content;
			var author= req.body.author;
			Article.create({title:title,content:content,author:author},function(article,err){
				if(err){
					res.json(err);
				}else{
					res.json(article);
				}
			
			
			});
		
			
					
				
			}
		})
	},

editArticle : function(req,res){

  Article.update({_id:req.body.id},req.body,function(err,article){
        if (err){
          res.json(err)
        }else{
          res.json(article)
        }
      })
},
removeAllArticles:function(req,res){
Article.remove({},function(err,done){
        if (err){
          res.json(err)
        }else{
          res.json("Removed done!!")
        }
      })
},

removeArticle :function(req,res){
   
   
    Article.remove({title:req.params.title},function(err,done){
        if (err){
          res.json(err)
        }else{
          res.json("Removed done!!")
        }
      })

  },
  viewAllArticle : function(req,res){
Article.find({}, function(err, allArticles) {
            if(err) {
                res.status(500).send('err');
            }else{
                res.json(allArticles);
            }
        });
  },
  viewArticleByItsTitle:function(req,res){
  	
  	var title=req.params.title;
  	Article.findOne({title:title},function(err,article){
  		if(err){
  			res.status(500).send('err');
  		}else{
  	res.json(article);

  		}
  	})
  		
  			
  		
  	}
  }










