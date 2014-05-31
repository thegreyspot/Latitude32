define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/cards/custom/contactTemplate.html'
], function($, _, Backbone, intro_startTemplate){
  var contactView = Backbone.View.extend({
    initialize: function(){
		
    },
    render: function(){
		var that = this;
		var compiledTemplate = _.template(intro_startTemplate);
		this.$el.append(compiledTemplate);
    	
    	fitTextURL = 'libs/fitText/fitText';
    	require([
	        fitTextURL
	    ], function(fitTextURL){
			 that.$el.find("h1").fitText(0.5, { minFontSize: '35px', maxFontSize: '160px'});
			 that.$el.find("h2").fitText(1.2, { minFontSize: '20px', maxFontSize: '68px'});
			}
		);	
    }
  });

  return contactView;
});
