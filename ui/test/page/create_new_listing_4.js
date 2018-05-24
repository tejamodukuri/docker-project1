/*   require('../page/sales_opp_listing.js'); */ 

   var create_sell_4 = function(){
	   
	 this.termsAndConditions = function(value){
		 
		 element(by.id('termsAndConditions')).click();
	 };
	    this.publicListing = function(value){
		 
		 element(by.id('publicListing')).click(); 
	}; 
	  this.agreeTerms = function(value){
		 
		 element(by.id('agreeTerms')).click();
		  /* return require('.sales_opp_listing.js');  */
	 };
	 };	  
    module.exports = new create_sell_4();
