var articleController = require('../article/articleController.js');
var commentController = require('../comments/commentController.js');






module.exports=function(app,exress){
	//  Article Routes
	app.post('/api/article/create/',articleController.createArticle);
	app.put('/api/article/edit/:title',articleController.editArticle);
	app.delete('/api/article/delete/:title',articleController.removeArticle);
	app.get('/api/article/view/',articleController.viewAllArticle);
	app.get('/api/article/view/:title',articleController.viewArticleByItsTitle);
	app.delete('api/article/delete/',articleController.removeAllArticles);

	//=============================================================//
	//         Comments Routes  
	app.post('/api/comments/create/',commentController.createComment);
	app.put('/api/comments/edit/:user',commentController.editComment);
	app.delete('/api/comments/delete/:user',commentController.removeComment);
	app.get('/api/comments/view/',commentController.viewAllComments);
	app.get('/api/comments/view/:user',commentController.viewCommentByItsUser);
	app.delete('api/comments/delete/',commentController.removeAllComments);      

}