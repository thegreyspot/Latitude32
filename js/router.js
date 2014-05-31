// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'localstorage',
  'views/header/HeaderView',
  'views/cards/CardsContainerView',
  //'models/session/SessionModel'
], function($, _, Backbone, localstorage, HeaderView, CardsContainerView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '': 'workPage',
      '!': 'workPage'//for linkedin
    },
    initialize: function(){  
    	//track every route change as a page view in google analytics
        this.bind('all', this.trackPageview);
    },
    /*trackPageview: function () { //Google analytics
		var url = Backbone.history.getFragment();
		if (!/^\//.test(url)) url = '/' + url;
		ga('send', {
		  'hitType': 'pageview',
		  'page': url
		});
    }*/
  });
  
  //Operating system version
  var os = (function() {
	var ua = navigator.userAgent.toLowerCase();
	return {
		isWin2K: /windows nt 5.0/.test(ua),
	    isXP: /windows nt 5.1/.test(ua),
	    isVista: /windows nt 6.0/.test(ua),
	    isWin7: /windows nt 6.1/.test(ua)
	};
  }()); 
  
  var initialize = function(){ 	  	
  	//If this is IE10 (since it ignores conditional comments)
  	if ($.browser.version == 10) {
	  $("html").addClass("ie");
	}
	
	//If XP make some changes to handle no gpu acceleration
	if(os.isXP)
		$("html").addClass("xp");
	
	if(!(window.console && console.log)) {
	  console = {
	    log: function(){},
	    debug: function(){},
	    info: function(){},
	    warn: function(){},
	    error: function(){}
	  };
	}

    var app_router = new AppRouter;
    
    var headerView = new HeaderView();
    var cardsContainerView = new CardsContainerView();
      
    app_router.on('route:workPage', function(){
    	document.title = 'Our Work - Michael Humphries and Rotem K.';
    	headerView.render();
    	cardsContainerView.render();
    });
    
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
