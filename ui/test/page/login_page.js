require('../page/mfa_choose_method.js');

 var Login_page = function(){
	 
	 this.userName = function(value){
		 
		 element(by.model('values.userName')).sendKeys(value);
	 };
	 
	 this.password = function(value){
		 
		 element(by.id('password-field')).sendKeys(value);
		 
	 };
	
	   this.remeberMe = function(){
		 
		 element(by.id('remeberMe')).click();
	 };
	 this.loginButton = function(){
		 
		 element(by.id('accountLogin')).click();
		 
		 return require('./mfa_choose_method.js');
	 };
	 
	 
 };
 
 module.exports = new Login_page();