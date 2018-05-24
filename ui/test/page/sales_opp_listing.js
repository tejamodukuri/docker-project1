
 
 require('../page/create_new_listing_1.js'); 

var sale_opp_listing = function(){
	   
	   this.newSellEdit = function(){
		 
	  element(by.id('newSellEdit')).click();
		
	 }; 
	    
	 this.sort = function(){
		 
	  element(by.id('sort')).click();

	 };  
	     
	 this.viewOffers = function(){
		 
	  element(by.id('viewOffers')).click();

	 };  
	 
	 
	this.newSellList = function(){
		 
	  element(by.id('newSellList')).click();
	  return require('./create_new_listing_1'); 
		
	 };
};
module.exports = new sale_opp_listing();
     