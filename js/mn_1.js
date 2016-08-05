$(document).ready(function(){
	
	console.log ("hello from mother nature");
	
	$.get("php/get/getBneAirWaste.php", function(data, status){
		console.log(data[0].substance);
	})
	
	
	
});