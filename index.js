var request = require('request');

$(function() {
	function IndexViewModel() {
		this.searchTerm = ko.observable();
		this.results = ko.observableArray();

		this.search = function() {
			var vm = this;
			request.get('http://search.twitter.com/search.json?q=' + this.searchTerm(), function (error, response, body) {
				if (!error && response.statusCode === 200) {
					var tweets = JSON.parse(body);
					
					$.each(tweets.results, function (index, item) {
						vm.results.push(item);
					})					
				}
			});
		};
	}
	ko.applyBindings(new IndexViewModel());
});