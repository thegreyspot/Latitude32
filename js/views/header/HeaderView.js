define([
  'jquery',
  'underscore',
  'backbone',
  'localstorage',
  'views/navigation/NavigationView',
  'text!templates/header/headerTemplate.html',
], function($, _, Backbone, localstorage, NavigationView, headerTemplate){
  var HeaderView = Backbone.View.extend({
    el: $("#master_header"),
    initialize: function(){
    },
    render: function(){
  		var compiledTemplate = _.template( headerTemplate);
  		this.$el.prepend(compiledTemplate);
      var navigationView = new NavigationView({el: this.$el.find('#master_navigation')});
      navigationView.render();
    }	
  });

  return HeaderView;
  
});
