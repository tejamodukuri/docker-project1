  /* require('../page/create_new_listing_3.js');  */
   var create_sell_2 = function(){
	   
	 this.productName = function(value){
		 
		 element(by.model('values.productName')).sendKeys(value);
	 };
	    this.productNotes = function(value){
		 
		 element(by.model('values.productNotes')).sendKeys(value); 
	 }; 
	    this.productType = function(value){
		 
		 element(by.model('values.productType')).sendKeys(value);
	 };
	   this.manufactureDateCalendar = function(){
		 
		 element(by.id('manufactureDateCalendar')).click();
	   };
     
	    this.productOriginCity = function(value){
		 
		 element(by.model('values.productOriginCity')).sendKeys(value);
	 };
	  this.country = function(value){
		 
		 element(by.id('country')).sendKeys(value);
	 };
	    this.state = function(value){
		 
		 element(by.id('state')).sendKeys(value);
	 };
	   
	 
	    this.packageUnits = function(value){
		 
		 element(by.model('values.packageUnits')).sendKeys(value);
		 
	 };	 
        this.packageType = function(value){
		 
		 element(by.model('values.packageType')).sendKeys(value);	
		 
     };
		  this.packageContainer = function(value){
		 
		 element(by.model('values.packageContainer')).sendKeys(value);
	 };	 
		  this.productQuantity = function(value){
		 
		 element(by.model('values.productQuantity')).sendKeys(value);
	 };
		  this.lotNumber = function(value){
		 
		 element(by.model('values.lotNumber')).sendKeys(value);
	 };
		  this.pricePerUnit = function(value){
		 
		 element(by.model('values.pricePerUnit')).sendKeys(value);
	 };  
          this.totalPrice = function(value){
		 
		 element(by.model('values.totalPrice')).sendKeys(value);	 
	 
     }; 
	   this.addProduct = function(value){
		 
		 element(by.id('addProduct')).click();	 
	 
     }; 
        this.createNew = function(){
		 
		 element(by.id('createNew')).click();
	 };  
	     this.reviewProductsRemove = function(){
		 
		 element(by.id('reviewProductsRemove')).click();
	 };  
	  this.next = function(){
		 
		 element(by.id('next')).click();
		    return require('./create_new_listing_3.js');  
	 };  
   };	 
 
 module.exports = new create_sell_2();
