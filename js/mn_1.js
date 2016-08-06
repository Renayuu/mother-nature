$(document).ready(function(){
	
	console.log ("hello from mother nature");
	
	$.get("php/get/getBneAirWaste.php", function(data, status){
		let airData = $.parseJSON(data);
		let airCode = "";
		
		airCode += "<table class='table table-condensed'>";
		
		for (let i=0; i<airData.length; i++)
		{
			
			console.log(airData[i].substance + " " + airData[i].quantity_in_kg);
			airCode += "<tr>";
			airCode += "<td>";
			airCode += airData[i].substance;
			airCode += "</td>";
			airCode += "<td>";
			airCode += airData[i].quantity_in_kg
			airCode += "</td>";
			airCode += "</td>";
			
		}
		
		airCode += "</table>";
		
		$("#airdata").html(airCode);
		
	})
	
	
	
});