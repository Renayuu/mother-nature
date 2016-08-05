<?PHP

$url = "http://www.ehp.qld.gov.au/cgi-bin/air/xml.php?category=1&region=ALL";
$xml = simplexml_load_file($url);
//print_r($xml);

//echo "hello";

//foreach($xml->children() as $station) { 
//    echo $station->measurement. ", ";  
//} 

$reading = $xml->category->region[1]->station[1]->measurement[2];

echo $reading;
	
?>