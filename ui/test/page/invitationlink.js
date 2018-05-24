 require('../page/account_info.js'); 

var InvitationLink = function(){
	
	this.in_link = function(){
		
	element(by.partialLinkText('link')).click();
	return require('./account_info.js');
	};

};
 module.exports = new InvitationLink();