define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/timeline/timeLineTemplate.html'
], function($, _, Backbone, timeLineTemplate){
  var TimeLineView = Backbone.View.extend({
    initialize: function(){

    },
    render: function(){
    	//Add timeline line and circle to this card
    	var compiledTemplate = _.template(timeLineTemplate, this.model.attributes);
		this.$el.prepend(compiledTemplate);
	}	
  });

  return TimeLineView;
  
});
