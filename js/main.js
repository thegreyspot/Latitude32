// Author: Michael Humphries <thegreyspot@gmail.com>
// Barebones Kit by: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    localstorage: 'libs/backbone/backbone.localStorage-min',
    deepmodel: 'libs/backbone/deep-model.min',
    templates: '../templates',
    async: 'libs/async/async',
    animatescroll: 'libs/animatescroll/animatescroll',
    fitText: 'libs/fitText/fitText',
    onepagescroll: 'libs/onepagescroll/jquery.onepage-scroll.min'
  },
  shim: {	
  			underscore: {
		        exports: '_'
		    },
		    jquery: {
		        exports: '$'
		    },
  			backbone:{
	  		  //These script dependencies should be loaded before loading
	          //backbone.js
	          deps: ['underscore', 'jquery'],
	          //Once loaded, use the global 'Backbone' as the
	          //module value.
	          exports: 'Backbone'
	  		},
		    animatescroll:{
	  			deps: ['jquery']
	  		},
	  		onepagescroll:{
	  			deps: ['jquery']
	  		}
  		}
});


require([
  // Load our app module and pass it to our definition function
  'app'

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
