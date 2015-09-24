$("#geocomplete").geocomplete();	// Option 1: Call on element.

var app = angular.module('biking-anywhere', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ngAutocomplete']);


/*var result;
$(function(){
      
	$("#geocomplete").geocomplete()
		.bind("geocode:result", function(event, result){
			//console.log(result);
			result = result;
			$("#result").attr("value", result.formatted_address);
			console.log($("#result").val());
		})
		.bind("geocode:error", function(event, status){
			console.log("ERROR: " + status);
		})
		.bind("geocode:multiple", function(event, results){
			console.log("Multiple: " + results.length + " results found");
		});

	$("#find").click(function(){
		$("#geocomplete").trigger("geocode");
		//alert("ingresa: " + city );
		
	});

	
});
*/