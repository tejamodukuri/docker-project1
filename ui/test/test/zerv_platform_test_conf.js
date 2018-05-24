var util= require('util');
var waiting = browser.sleep(2000);
 var home_page = require('../page/home_page.js');		
		var host_name = require('../host/base_host.json');
 	describe('to test the zerv application',function(){
	    beforeEach(function(){
		browser.manage().window().maximize();
		// browser.ignoreSynchronization = true;
		browser.get(host_name.BaseHost);
	    });
	   
		it('this is intake form Form insertaion', function(){
		var intakeForm  = home_page.intakeForm();
		expect(browser.getCurrentUrl()).toMatch(host_name.intakeForm1);
		intakeForm.legalBusinessName(host_name.intakeForm.legalBusinessName);
		intakeForm.description(host_name.intakeForm.description);
		intakeForm.businessTypeSupplier();
		intakeForm.businessTypeRetailer();
		intakeForm.businessTypeManufacturer();
		intakeForm.businessTypeConsumer();
		intakeForm.businessTypeDistributor();
		intakeForm.businessTypeGovernment();
		intakeForm.country(host_name.intakeForm.country);
		intakeForm.address(host_name.intakeForm.address);
		intakeForm.zip(host_name.intakeForm.zip);
		intakeForm.state(host_name.intakeForm.state);
		intakeForm.city(host_name.intakeForm.city);
		intakeForm.email(host_name.intakeForm.email); 
		intakeForm.phoneCode(host_name.intakeForm.phoneCode);
		intakeForm.phoneNumber(host_name.intakeForm.phoneNumber);
		intakeForm.firstName(host_name.intakeForm.firstName);
		intakeForm.lastName(host_name.intakeForm.lastName);
		intakeForm.purchasingPreferencesComponentsSelectAll();
		intakeForm.purchasingPreferencesAmmoTypeSelectAll();
	 	intakeForm.purchasingPreferencesBrandSelectAll();
		intakeForm.purchasingPreferencesTradePartnersSelectAll();
		intakeForm.sellingPreferencesComponentsSelectAll();
		intakeForm.sellingPreferencesAmmoTypeSelectAll();
	 	intakeForm.sellingPreferencesBrandSelectAll();
		intakeForm.sellingPreferencesTradePartnersSelectAll();
		intakeForm.purchasingPreferencesTermsOfSale();
		intakeForm.sellingPreferencesTradeOfSaleSelectAll();
		intakeForm.intakeSave();
		// expect(browser.getCurrentUrl()).toMatch(host_name.InvitationLink1);
	    });
	   it('it should be able to create account', function(){
		var InvitationLink  = home_page.InvitationLink();
		expect(browser.getCurrentUrl()).toMatch(host_name.InvitationLink1);
		var Account_info = InvitationLink.in_link();
		expect(browser.getCurrentUrl()).toMatch(host_name.accountInformation1);
		Account_info.userName(host_name.Account_info.userName);
		Account_info.confir_username(host_name.Account_info.confir_username);
		Account_info.password(host_name.Account_info.password);
		Account_info.confirm_password(host_name.Account_info.confirm_password);
		Account_info.nextButton();
		 expect(browser.getCurrentUrl()).toMatch(host_name.login1);
		// expect(browser.getCurrentUrl()).toMatch(host_name.mfaChooseMethod1);
	    }); 

	it('it should be able to login', function(){
		var Login_page  = home_page.Login_page();
		expect(browser.getCurrentUrl()).toMatch(host_name.login1);
		Login_page.userName(host_name.Login_page.userName);
		Login_page.password(host_name.Login_page.password);
		Login_page.remeberMe();
		var profile = Login_page.loginButton();
	 	expect(browser.getCurrentUrl()).toMatch(host_name.mfaChooseMethod1);
	    });


	it('it should be able to Do MFA for Email', function(){
		MfaRequest  = home_page.MfaRequest();
		expect(browser.getCurrentUrl()).toMatch(host_name.mfaRequest1);
		MfaChooseMethod = MfaRequest.mfaRequestNext();
		expect(browser.getCurrentUrl()).toMatch(host_name.mfaChooseMethod1);
		MfaChooseMethod.emailButton();
		var mfaEnterCodeEmail = MfaChooseMethod.SendCodeButton1();
		expect(browser.getCurrentUrl()).toMatch(host_name.mfaEnterCodeEmail11);
	    mfaEnterCodeEmail.temporaryIdentificationCode(host_name.mfaEnterCodeEmail.temporaryIdentificationCode);
	    mfaEnterCodeEmail.password(host_name.mfaEnterCodeEmail.password);
		profile = mfaEnterCodeEmail.MfaCodeEmailSendCodeButton();
	    expect(browser.getCurrentUrl()).toMatch(host_name.externalSystems1); 
	    });

	it('it should be able to Do MFA for Text', function(){
		var MfaRequest  = home_page.MfaRequest();
		expect(browser.getCurrentUrl()).toMatch(host_name.mfaRequest1);
		var MfaChooseMethod = MfaRequest.mfaRequestNext();
		expect(browser.getCurrentUrl()).toMatch(host_name.mfaChooseMethod1);
		MfaChooseMethod.TextButton();
		var mfaEnterCodePhoneText = MfaChooseMethod.SendCodeButton();
		expect(browser.getCurrentUrl()).toMatch(host_name.mfaEnterCodePhoneText1);
	    mfaEnterCodePhoneText.temporaryIdentificationCode(host_name.mfaEnterCodePhoneText.temporaryIdentificationCode);
	    mfaEnterCodePhoneText.password(host_name.mfaEnterCodePhoneText.password);
		var profile = mfaEnterCodePhoneText.PhoneTextSendCodeButton();
		 expect(browser.getCurrentUrl()).toMatch(host_name.externalSystems1); 
	    });

	it('it should be able to Do MFA for Call', function(){
		MfaRequest  = home_page.MfaRequest();
		expect(browser.getCurrentUrl()).toMatch(host_name.mfaRequest1);
		MfaChooseMethod = MfaRequest.mfaRequestNext();
		expect(browser.getCurrentUrl()).toMatch(host_name.mfaChooseMethod1);
		MfaChooseMethod.callButton();
		var mfaEnterCodePhoneCall = MfaChooseMethod.SendCodeButton2();
		expect(browser.getCurrentUrl()).toMatch(host_name.mfaEnterCodePhoneCall1);
	    mfaEnterCodePhoneCall.temporaryIdentificationCode(host_name.mfaEnterCodePhoneCall.temporaryIdentificationCode);
	    mfaEnterCodePhoneCall.password(host_name.mfaEnterCodePhoneCall.password);
		profile = mfaEnterCodePhoneCall.PhoneCallSendCodeButton();
	    expect(browser.getCurrentUrl()).toMatch(host_name.externalSystems1); 
	    });

	

	it('should perform onboarding automation', function(){
		var ExternalSystems  = home_page.ExternalSystems();
		expect(browser.getCurrentUrl()).toMatch(host_name.externalSystems1);
 		ExternalSystems.samdata();
		ExternalSystems.waitforangular();
		ExternalSystems.regid(host_name.ExternalSystems1.regid); 
		ExternalSystems.connectAccount();  
		ExternalSystems.waitforangular();
	    var companyInfo = ExternalSystems.nextbutton();
		expect(browser.getCurrentUrl()).toMatch(host_name.companyInfo1);
	    companyInfo.legalBusinessName(host_name.companyInfo.legalBusinessName);
		companyInfo.doingBusinessAs(host_name.companyInfo.doingBusinessAs);
		companyInfo.corporateStructureDescription(host_name.companyInfo.corporateStructureDescription);
		companyInfo.mailingAddress(host_name.companyInfo.mailingAddress);
		companyInfo.state(host_name.companyInfo.state);
		companyInfo.zip(host_name.companyInfo.zip);
		 companyInfo.country(host_name.companyInfo.country);
		companyInfo.expirationDate(host_name.companyInfo.expirationDate);
		companyInfo.pscCode(host_name.companyInfo.pscCode);
		companyInfo.duns(host_name.companyInfo.duns);
		companyInfo.cage(host_name.companyInfo.cage);
		companyInfo.iCertify();
		companyInfo.iAccept();
		var profileDetails = companyInfo.nextbutton();
		expect(browser.getCurrentUrl()).toMatch(host_name.profileDetails1);
	 	profileDetails.companyDescription(host_name.profileDetails.companyDescription);
		profileDetails.businessClassification(host_name.profileDetails.businessClassification);
		// profileDetails.companyLogo();
		profileDetails.facebook(host_name.profileDetails.facebook);
		profileDetails.instagram(host_name.profileDetails.instagram);
		profileDetails.twitter(host_name.profileDetails.twitter);
		profileDetails.accountType(host_name.profileDetails.accountType);
		profileDetails.EIN(host_name.profileDetails.EIN);
		profileDetails.FFLLicenseNumber(host_name.profileDetails.FFLLicenseNumber);
		profileDetails.ATFLicenseNumber(host_name.profileDetails.ATFLicenseNumber);
		profileDetails.ITARLicenseNumber(host_name.profileDetails.ITARLicenseNumber);
		profileDetails.BusinessTaxLicenseNumber(host_name.profileDetails.BusinessTaxLicenseNumber);
		var addIntrests = profileDetails.nextbutton();
		expect(browser.getCurrentUrl()).toMatch(host_name.addInterests1);
		addIntrests.alertName(host_name.addIntrests.alertName); 
		addIntrests.imInterestedInBuying();
		addIntrests.purchasingPreferencesComponentsSelectAll();
		addIntrests.purchasingPreferencesAmmoTypeSelectAll();
		addIntrests.purchasingPreferencesBrandSelectAll();
		addIntrests.purchasingPreferencesTradePartnersSelectAll();
		addIntrests.purchasingPreferencesTermsOfSaleImmediate();
	    var tokenAccess = addIntrests.nextbutton();
		expect(browser.getCurrentUrl()).toMatch(host_name.tokenAccess1);
		tokenAccess.eitherPublicAddress(host_name.tokenAccess.eitherPublicAddress);
		tokenAccess.zervPublicAddress(host_name.tokenAccess.zervPublicAddress);
		var confirmation = tokenAccess.nextbutton();
		expect(browser.getCurrentUrl()).toMatch(host_name.confirmation1);
		confirmation.acceptTermsAndConditions();
		profile = confirmation.nextbutton();
		expect(browser.getCurrentUrl()).toMatch(host_name.profile1);
	    });

		it('it Should View Trading Partners ', function(){
		var tradingPartners  = home_page.tradingPartners();
		expect(browser.getCurrentUrl()).toMatch(host_name.vendors1);
		});
		it('it Should View Other Persons Profile ', function(){
		var otherPersonsProfile  = home_page.otherPersonsProfile();
		expect(browser.getCurrentUrl()).toMatch(host_name.X_personProfile1);
		});
		it('it Should View Groups/Favorites ', function(){
		var groupsOrFavorites  = home_page.groupsOrFavorites();
		expect(browser.getCurrentUrl()).toMatch(host_name.groupsFavorites1);
		});
		
}); 
	describe('to test the zerv application',function(){
	    beforeEach(function(){
		browser.manage().window().maximize();
		// browser.ignoreSynchronization = true;
		browser.get(host_name.BaseHost);
	    });
			it('it should verify sales opp listing for new sell edit and navigate to create list_1', function(){
				var sale_opp_listing  = home_page.salesOpportunitiesListing();
				expect(browser.getCurrentUrl()).toMatch(host_name.sales_opp_listing);
				 sale_opp_listing.newSellEdit();
				 expect(browser.getCurrentUrl()).toMatch(host_name.create_listing_one);
			}); 
			it('it should verify sales opp listing and navigate to sellListingDetails', function(){
				var sale_opp_listing  = home_page.salesOpportunitiesListing();
				expect(browser.getCurrentUrl()).toMatch(host_name.sales_opp_listing);
				sale_opp_listing.viewOffers();
				expect(browser.getCurrentUrl()).toMatch(host_name.sellListingDetails);
			});
			it('it should verify sales opp listing for new sale list and navigate to create list_1', function(){
				var sale_opp_listing  = home_page.salesOpportunitiesListing();
				expect(browser.getCurrentUrl()).toMatch(host_name.sales_opp_listing);
				sale_opp_listing.newSellList();
				expect(browser.getCurrentUrl()).toMatch(host_name.create_listing_one);
			});
			
			   it('it should navigate to the create new listing-2', function(){
			var create_selling1  = home_page.createNewSellListingStep0ne();
			expect(browser.getCurrentUrl()).toMatch(host_name.create_listing_one);
			create_selling1.sell();
			create_selling1.retailer();
			create_selling1.oneTimeRequest();
			create_selling1.recurringRequest();
			create_selling1.weekly();
			create_selling1.templateName(host_name.create_selling1.templateName)
			create_selling1.requestName(host_name.create_selling1.requestName)
			create_selling1.saveAsTemplate();
			create_selling1.next();
			expect(browser.getCurrentUrl()).toMatch(host_name.create_new_listing_two);
			browser.sleep(3000); 
			 });
			
		});	
