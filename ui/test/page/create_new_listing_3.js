/*   require('../page/create_new_listing_4.js');  */

   var create_sell_3 = function(){
	   
	 this.paymentTimeFrame = function(value){
		 
		 element(by.model('values.paymentTimeFrame')).sendKeys(value);
	 };
	    this.paymentMethod = function(value){
		 
		 element(by.model('values.paymentMethod')).sendKeys(value); 
	 }; 
	    this.deliveryTerms = function(value){
		 
		 element(by.model('values.deliveryTerms')).sendKeys(value);
	 };
	   this.Marketplace = function(){ 
		 
		 element(by.id('Marketplace')).click();
	   };
	    this.usGovernment = function(){
		 
		 element(by.model('values.usGovernment')).click();
	 };
		 this.internationalGovernment = function(){
		 
		 element(by.model('values.internationalGovernment')).click();
	 };	 
     
	    this.preferredVendors = function(){
		 
		 element(by.id('preferredVendors')).click();
	 };
	  this.selectGroup = function(){
		 
		 element(by.id('selectGroup')).click();
	 };
	
        this.markertPlaceSearch = function(value){
		 
		 element(by.model('markertPlaceSearch')).sendKeys(value);
	 };	 	 
	  this.addtionalNotes = function(value){
		 
		 element(by.model('values.addtionalNotes')).sendKeys(value);
	 };	 
	 
	    this.next = function(){
		 
		 element(by.id('next')).click();
		 
		  /*  return require('.create_new_listing_4.js');  */
	 };	  
    
	 
 }; 

 
 module.exports = new create_sell_3();
