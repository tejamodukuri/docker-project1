require('../page/profile_details.js'); 

 var confirmation = function(){
	 
	  this.acceptTermsAndConditions = function(){
			 element(by.name('termsAndCondit')).click();
		 };

	 this.nextbutton = function(){
			 element(by.id('confirmationCompleteOnboarding')).click();
			 return require('./profile_details.js');
		 };
	 
	 
 };
 
 module.exports = new confirmation();