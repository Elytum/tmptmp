'use strict'

//TEMPLATE

var OrderView = Marionette.ItemView.extend({
		//el: '#tweet-container',
		template: require('../../templates/order.hbs'),

		events: {
			'click #start-place' : 'showMap'
		},

		showMap: function(){
			console.log('SHOW ME THE MAP');
		}

	});

module.exports = OrderView;
