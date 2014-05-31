define([
  'jquery',
  'underscore',
  'backbone',
  'models/card/CardModel'
], function($, _, Backbone, CardModel){
  var CardsCollection = Backbone.Collection.extend({
    model: CardModel,
    initialize: function(){
		
    }
  });
 
  return CardsCollection;
});
