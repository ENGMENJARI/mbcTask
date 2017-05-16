var Comment = require('./commentModel.js');

module.exports={

createComment:function(req,res){
	Comment.findOne({user:req.body.user})
	.exec(function(err,comment){
		if(comment){
			res.json(new Error('Comment was created before'))
		}else{
			
			var user=req.body.user;
			var content=req.body.content;
			
			Comment.create({user:user,content:content},function(comment,err){
				if(err){
					res.json(err);
				}else{
					res.json(comment);
				}
			
			
			});
		
			
					
				
			}
		})
	},

editComment : function(req,res){

  Comment.update({_id:req.body.id},req.body,function(err,comment){
        if (err){
          res.json(err)
        }else{
          res.json(comment)
        }
      })
},
removeAllComments:function(req,res){
Comment.remove({},function(err,done){
        if (err){
          res.json(err)
        }else{
          res.json("Removed done!!")
        }
      })
},

removeComment :function(req,res){
   
   
    Comment.remove({user:req.params.user},function(err,done){
        if (err){
          res.json(err)
        }else{
          res.json("Removed done!!")
        }
      })

  },
  viewAllComments : function(req,res){
Comment.find({}, function(err, allcomments) {
            if(err) {
                res.status(500).send('err');
            }else{
                res.json(allcomments);
            }
        });
  },
  viewCommentByItsUser:function(req,res){
  	
  	var user=req.params.user;
  	Comment.findOne({user:user},function(err,comment){
  		if(err){
  			res.status(500).send('err');
  		}else{
  	res.json(comment);

  		}
  	})
  		
  			
  		
  	}














}
