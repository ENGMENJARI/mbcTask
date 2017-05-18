var React = require('react');
var ReactDOM = require('react-dom');

var AddArticle = React.createClass({
	submit:function(){

	}
	render:function(){
		return (
			<div>
			<h2>welcome to Article App</h2>
			<form onSubmit={this.submit}>
			title<input type="text" placeholder="title"/>
			author<input type="text" placeholder="author"/>
			content<input type="text" placeholder="content"/>


			</form>
			</div>

			)
	}
});

module.exports=AddArticle;