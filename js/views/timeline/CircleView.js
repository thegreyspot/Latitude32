define([
  'jquery',
  'underscore',
  'backbone',
  'animatescroll',
  'text!templates/Timeline/circleTemplate.html'
], function($, _, Backbone, animatescroll, circleTemplate){
  var CircleView = Backbone.View.extend({
  	currentCard: null,
  	previousCard: null,
    initialize: function(){

    },
    render: function(){
    	var that = this;
    	//Add circle to container
    	var compiledTemplate = _.template(circleTemplate, this.model);
		this.$el.prepend(compiledTemplate);

    	//Track what div is scrolled into view
    	 _.bindAll(this, 'scrolled');
	    // bind to window
	    $(window).scroll(this.scrolled);
	    this.currentCard = $('#cards .card:first-of-type').attr("id");
	    console.log(this.currentCard);
	    this.setDom();
	},
	events: {
		'click .circle' : 'moveToNextCard'
	},
	moveToNextCard: function(){
		/*if(this.model.get("isLast")){//go to the top
			$('#cards').moveTo(1);
			return;
		}
		$("#cards").moveDown();*/
	},
	scrolled: function(){
		this.previousCard = this.currentCard;
		this.currentCard = $(this.findCurrentDiv()).attr("id");
		console.log(this.currentCard)
		this.setDom();
	},
	findCurrentDiv: function(){
		var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();
	    //console.log("docViewTop: " + docViewTop + " docViewBottom: " + docViewBottom)
	    cards = $('#cards .card');
	    return _.find(cards, function(elem){
	    	var elemTop = $(elem).offset().top - ($(elem).height()/2);
	    	var elemBottom = elemTop + ($(elem).height());
	    	//console.log("elemTop: " + elemTop + " elemBottom: " + elemBottom)
	    	if((docViewTop >= elemTop) && (docViewTop <= elemBottom))
	    		return elem;
	    });
	},
	setDom: function(){
		$('html').removeClass(this.previousCard);
		$('html').addClass(this.currentCard);
	}
	
  });

  return CircleView;
  
});
