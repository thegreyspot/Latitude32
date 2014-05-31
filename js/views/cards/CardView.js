define([
  'jquery',
  'underscore',
  'backbone',
  'views/timeline/TimeLineView',
  'text!templates/cards/cardTemplate.html',
  'text!templates/cards/cardListTemplate.html',
  'text!templates/timeline/circleTemplate.html'
], function($, _, Backbone, TimeLineView, cardTemplate, cardListTemplate, circleTemplate){
  var CardView = Backbone.View.extend({
    initialize: function(){

    },
    render: function(){
    	var that = this;
    	
    	//Load in timeline with circle and line
    	var timeLineView = new TimeLineView({el: that.$el, model: this.model});
    	timeLineView.render();
    	
		//Add class that states if card is odd or even
		that.$el.addClass(this.model.get("type"));
		
		//Assign a unique slug
		that.$el.attr('id', this.model.get("slug"));
		
		//Load a extra view if this card is custom
		if(this.model.get("custom")){
			customView = 'views/cards/custom/'+ this.model.get("slug") +'CardView';
	    	require([
		        customView
		    ], function(CustomView){
					var customView = new CustomView({el: that.$el, model: that.model});
					customView.render();
				}
			);	
		}else{
			//Load basic structure of card
	    	var compiledTemplate = _.template(cardTemplate, this.model.attributes);
			that.$el.append(compiledTemplate);

			that.$el.addClass("project");
	    	//Load template for paragraph text
	    	templateFile = 'text!templates/cards/texts/'+ this.model.get("slug") +'Template.html';
	    	require([
		        templateFile
		    ], function(template){
					var compiledTemplate = _.template(template);
					that.$el.find(".description").append(compiledTemplate);
				}
			);
			//Load in list of what was accomplished in this project
			var compiledTemplate = _.template(cardListTemplate, this.model.attributes);
			that.$el.find(".lists").append(compiledTemplate);
		}
		console.log(this.model)
		var compiledTemplate = _.template(circleTemplate, this.model.attributes);
		this.$el.prepend(compiledTemplate);
		
    }
  });

  return CardView;
  
});
