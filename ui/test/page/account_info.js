
var Account_info = function(){
	
	this.userName = function(value){
		 
		 element(by.model('values.username')).sendKeys(value);
	 };
	 this.confir_username = function(value){
		 
		 element(by.model('values.confir_username')).sendKeys(value);
	 };
	 
	 
	 this.password = function(value){
		 
		 element(by.model('values.accInfoPassword')).sendKeys(value);
		 
	 };
	  this.confirm_password = function(value){
		 
		 element(by.id('confirm_password')).sendKeys(value);
		 
	 };
	 this.phoneCode = function(value){
		 
		 element(by.model('values.phoneCode')).sendKeys(value);
	 };
	  this.phonenumber = function(value){
		 
		 element(by.model('values.phonenumber')).sendKeys(value);
	 };
	 this.nextButton = function(){
		 
		 element(by.id('accInfoNext')).click();
	 };
};
 module.exports = new Account_info();