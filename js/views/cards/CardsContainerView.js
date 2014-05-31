define([
  'jquery',
  'underscore',
  'backbone',
  'animatescroll',
  'collections/cards/CardsCollection',
  'views/cards/CardView',
  'views/timeline/CircleView',
], function($, _, Backbone, animatescroll, CardsCollection, CardView, CircleView){
  var CardsContainerview = Backbone.View.extend({
    el: $("#cards"),
    previousScroll: 0,
    initialize: function(){
		//listen to window's scroll to see  what div is currently active'
		//$(window).scroll(_.bind(this.setActive, this));
    },
    render: function(){
    	var that = this;
    	
		var cardsCollection = new CardsCollection();
		i=0;
		cardsCollection.add([
			{type: i++, slug:"intro_start", year:"begin", custom: true},	
			{	type: i++, 
				slug:"wnmu", 
				project:"WNMU.edu Redesign", 
				client: "Western New Mexico University",
				year: "2014", 
				code:["Wordpress Multi-site", "SCSS w/ Compass", "Endless Scroll"], 
				design:["Responsive","Cats and shit"]},	
			{	type: i++, 
				slug:"socialtrak_product_page", 
				project:"SoicalTrak Product Page", 
				client: "Valuecentric IQ", 
				url: "https://social.vciq.com",
				year: "2013", 
				code:["Backbone.js", "Underscore.js", "SCSS w/ Compass"], 
				design:["Responsive","Cats","shits"]},
			{	type: i++, 
				slug:"socialtrak", 
				project:"SoicalTrak", 
				client: "Valuecentric IQ", 
				url: "https://social.vciq.com/app",
				year: "2013", 
				code:["Backbone.js", "Underscore.js", "RESTful API", "CORS", "Highcharts"], 
				design:["Responsive","Cats","shits"]},
			{	type: i++, 
				slug:"musicbee", 
				project:"MusicBee Redesign", 
				client: "MusicBee Project", 
				url: "http://getmusicbee.com",
				year: "2011", 
				code:["PHP", "jQuery", "Custom Simple Machine Forum Theme"], 
				design:["Responsive","Cats","shits"],
			},	
			{type: i++, slug:"contact", year:"End", custom: true, isLast: true},						
		]);
		
		var cardView;
		$.each(cardsCollection.models, function(i, card){
			that.$el.append('<article class="card"></article>');
			cardView = new CardView({el: that.$el.find(".card:last"), model: card});
			cardView.render();
		});

		

		//Add font responsiveness to headers
		fitTextURL = 'libs/fitText/fitText';
    	require([
	        fitTextURL
	    ], function(fitTextURL){
			 $("#cards .card h1").fitText(1.8, { minFontSize: '18px', maxFontSize: '40px'});
			 $("#cards .card h2").fitText(2.0, { minFontSize: '16px', maxFontSize: '25px'});
			 $("#cards .card h3").fitText(2.0, { minFontSize: '18px', maxFontSize: '50px'});
			}
		);	
    }
    
  });

  return CardsContainerview;
  
});
