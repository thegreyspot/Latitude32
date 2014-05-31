define([
  'underscore',
  'backbone',
  'deepmodel'
], function(_, Backbone, DeepModel) {
	var CardModel = Backbone.DeepModel.extend({
		defaults: { 
			type: null, //even or odd
			slug: null, //name of div
			project: null,//name of project
			client: null,//name of client
			url: false,//url to site
			year: null,
		    isLast: false,//Is last card, so timeline ends
		    custom: false, //does this need to load a special view
		    			  //if true, load view: [template_file]CardView.js
		    code: [],
		    design:[]
		},		
		initialize: function () {

	    }
	});

  	return CardModel;
});