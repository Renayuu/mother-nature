$(document).ready(function(){
	
	console.log ("hello from mother nature brisbane");
	
	refreshData();
	
	setInterval(function(){
		refreshData()
	}, 60000);
	
	
	
});

function refreshData()
{
	console.log("refreshData called");
	
	$.get("php/get/getPM10BneVal.php", function(data, status){
		let pm10 = data;
		let resprate = 99;
		let rr_attr = "10ms";
		
		console.log("PM10 is " + pm10);
		
		if (pm10<8)
		{
			resprate = 30;
			rr_attr = "5s";
		}
		else if (pm10<10)
		{
			resprate = 40;
			rr_attr = "4s";
		}
		else if (pm10<12)
		{
			resprate = 50;
			rr_attr = "3s";
		}
		else if (pm10<14)
		{
			resprate = 60;
			rr_attr = "2s";
		}
		else
		{
			resprate = 70;
			rr_attr = "1s";
		}
		
		$("#pm10").slideUp(1000);
		$("#resprate").slideUp(1000);
		$("#pm10").empty();
		$("#pm10").html(data);
		$("#resprate").empty();
		$("#resprate").html(resprate);
		$("#pm10").slideDown(1000);
		$("#resprate").slideDown(1000);
		$("animateMotion").attr("dur", rr_attr);
		
	})
	
	$.get("php/get/getBneAirWaste.php", function(data, status){
		let airData = $.parseJSON(data);
		let airCode = "";
		
		airCode += "<table class='table table-condensed'>";
		
		for (let i=0; i<airData.length; i++)
		{
			
			//console.log(airData[i].substance + " " + airData[i].quantity_in_kg);
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
		
		$("#airdetails").empty();
		$("#airdetails").html(airCode);
		
	})
	
	$.get("php/get/getBneLandWaste.php", function(data, status){
		let landData = $.parseJSON(data);
		let landCode = "";
		
		landCode += "<table class='table table-condensed'>";
		
		for (let i=0; i<landData.length; i++)
		{
			
			//console.log(airData[i].substance + " " + airData[i].quantity_in_kg);
			landCode += "<tr>";
			landCode += "<td>";
			landCode += landData[i].substance;
			landCode += "</td>";
			landCode += "<td>";
			landCode += landData[i].quantity_in_kg
			landCode += "</td>";
			landCode += "</td>";
			
		}
		
		landCode += "</table>";
		
		
		$("#landdetails").empty();
		$("#landdetails").html(landCode);
		
		
	})
	
	$.get("php/get/getBneWaterWaste.php", function(data, status){
		let waterData = $.parseJSON(data);
		let waterCode = "";
		
		waterCode += "<table class='table table-condensed'>";
		
		for (let i=0; i<waterData.length; i++)
		{
			
			//console.log(airData[i].substance + " " + airData[i].quantity_in_kg);
			waterCode += "<tr>";
			waterCode += "<td>";
			waterCode += waterData[i].substance;
			waterCode += "</td>";
			waterCode += "<td>";
			waterCode += waterData[i].quantity_in_kg
			waterCode += "</td>";
			waterCode += "</td>";
			
		}
		
		waterCode += "</table>";
		
		
		$("#waterdetails").empty();
		$("#waterdetails").html(waterCode);
		
		
	})
	
	$.get("php/get/getBneTransfer.php", function(data, status){
		let transferData = $.parseJSON(data);
		let transferCode = "";
		
		transferCode += "<table class='table table-condensed'>";
		
		for (let i=0; i<transferData.length; i++)
		{
			
			//console.log(airData[i].substance + " " + airData[i].quantity_in_kg);
			transferCode += "<tr>";
			transferCode += "<td>";
			transferCode += transferData[i].substance;
			transferCode += "</td>";
			transferCode += "<td>";
			transferCode += transferData[i].quantity_in_kg
			transferCode += "</td>";
			transferCode += "</td>";
			
		}
		
		transferCode += "</table>";
		
		
		$("#transferdetails").empty();
		$("#transferdetails").html(transferCode);
		
		
	})
	
	$("#airdetails").slideUp(1000);
	$("#landdetails").slideUp(1000);
	$("#waterdetails").slideUp(1000);
	$("#transferdetails").slideUp(1000);
	
	$("#transferdetails").slideDown(1000);
	$("#landdetails").slideDown(1000);
	$("#waterdetails").slideDown(1000);
	$("#airdetails").slideDown(1000);
	
}