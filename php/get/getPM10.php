<?PHP

$url = "http://www.ehp.qld.gov.au/cgi-bin/air/xml.php?category=1&region=ALL";
$xml = simplexml_load_file($url);
//print_r($xml);

//echo "hello";

//foreach($xml->children() as $station) { 
//    echo $station->measurement. ", ";  
//} 

echo $xml->category->region->station[6]->measurement[0];
	
?>