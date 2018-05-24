
  require ('../page/invitationlink.js'); 
  require ('../page/login_page.js'); 
  require ('../page/mfa_request.js'); 
  require ('../page/intakeform.js'); 
    require ('../page/sales_opp_listing.js');
  require ('../page/create_new_listing_1.js');  
  require ('../page/create_new_listing_2.js');
  require ('../page/create_new_listing_3.js');
  require ('../page/create_new_listing_4.js');
var home_page = function(){
	this.intakeForm = function(){
		element(by.id('intakeForm')).click();
		return require('./intakeform.js');
	};	
	
this.InvitationLink = function(){
		
		element(by.id('invitationLink')).click();
		return require('./invitationlink.js');
	};
this.Login_page = function(){
		
		element(by.id('login')).click();
		return require('./login_page.js');
	};

this.MfaRequest = function(){
		
		element(by.id('mfaRequest')).click();
		return require('./mfa_request.js');
	};	
this.ExternalSystems = function(){
		
		element(by.id('externalSystems')).click();
		return require('./external_systems.js');
	};	
	
this.tradingPartners = function(){
		
		element(by.id('tradingPartners')).click();
	};		
	
this.otherPersonsProfile = function(){
		
		element(by.id('othprofile')).click();
	};	
	
	
this.groupsOrFavorites = function(){
		
		element(by.id('groupfev')).click();
	};	
this.salesOpportunitiesListing = function(){
		
		element(by.partialLinkText('sales Opportunities listing')).click();
		return require('./sales_opp_listing.js');
	};
this.createNewSellListingStep0ne = function(){
		
		element(by.id('createNewSellListingStep-1')).click();
		return require('./create_new_listing_1.js');
	};	
this.createNewSellListingStepTwo = function(){
		
		element(by.id('createNewSellListingStep-2')).click();
		return require('./create_new_listing_2.js');
	};			
this.createNewSellListingStepThree = function(){
		
		element(by.id('createNewSellListingStep-3')).click();
		return require('./create_new_listing_3.js');
	};			
this.createNewSellListingStepFour = function(){
		
		element(by.id('createNewSellListingStep-4')).click();
		return require('./create_new_listing_4.js');
	};			
	
};
module.exports = new home_page();