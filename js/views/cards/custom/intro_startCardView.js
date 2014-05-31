define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/cards/custom/intro_startTemplate.html'
], function($, _, Backbone, intro_startTemplate){
  var introStartView = Backbone.View.extend({
    initialize: function(){
		
    },
    render: function(){
		var that = this;
		var compiledTemplate = _.template(intro_startTemplate);
    this.$el.append(compiledTemplate);
    	
  	fitTextURL = 'libs/fitText/fitText';
    templateFile = 'text!templates/cards/texts/intro_startTemplate.html';
  	require([
      fitTextURL,
      templateFile
    ], function(fitTextURL, templateFile){
      that.$el.find("h1").fitText(0.5, { minFontSize: '35px', maxFontSize: '160px'});
      that.$el.find("h2").fitText(1.2, { minFontSize: '20px', maxFontSize: '68px'});
      var compiledTemplate = _.template(templateFile);
      that.$el.find(".description").append(compiledTemplate);
		}
		);	
    }
  });

  return introStartView;
});
