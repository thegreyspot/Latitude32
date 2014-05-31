define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/navigation/navigationTemplate.html'
], function($, _, Backbone, navigationTemplate){
  var HeaderView = Backbone.View.extend({
    initialize: function(){

    },
    render: function(){
  		var compiledTemplate = _.template( navigationTemplate);
  		this.$el.prepend(compiledTemplate);
    }
  });

  return HeaderView; 
});
