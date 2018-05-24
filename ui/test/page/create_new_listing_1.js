 require('../page/create_new_listing_2.js'); 

 var create_selling1 = function(){
	
	 this.sell = function(){
		 
		 element(by.id('sell')).click();
	 };
	 this.retailer = function(){
		 
		 element(by.id('listAsRetailer')).click();
	 };
	 
	  this.oneTimeRequest = function(){
		 
		 element(by.id('oneTimeRequest')).click();
	 };
	 	 
	  this.recurringRequest = function(){
		 
		 element(by.id('recurringRequest')).click();
	 };
	   this.weekly = function(){
		 
		 element(by.id('weekly')).click();
	 };

	 	 this.templateName = function(value){
		 
		 element(by.model('values.templateName')).sendKeys(value);
		 
	 };
	  	 this.requestName = function(value){
		 
		 element(by.model('values.requestName')).sendKeys(value);
		 
	 };
	
	   this.saveAsTemplate = function(){
		 
		 element(by.id('saveAsTemplate')).click();
	 };
	    this.next = function(){
		 
		 element(by.id('next')).click();
	 };
	 
 };
 
 module.exports = new create_selling1();