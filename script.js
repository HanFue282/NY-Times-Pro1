var apiKey = "&api-key=oYsDbQz4r85wSZJBzgzQvPkzRUe6GpCO";
var searchTerms = $("#search-terms");
var queryUrl =
	"https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
	"&" +
	searchTerm +
	apiKey;

// var searchTerm = "Plants";

$.ajax({
	url: queryUrl,
	method: "GET"
}).then(function(response) {
	// console.log(response);
});
