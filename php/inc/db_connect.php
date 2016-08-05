<?PHP

// connection to database
$db = new PDO('mysql:host=localhost;dbname=worthyp_mn;charset=utf8', 'worthyp_mn_web', 'k9_5(wp&Kc!2');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);

try 
{
    $testresult = $db->query("SELECT * FROM wastedata");
    //echo "Connected to db";
} 
catch(PDOException $ex) 
{
    echo "An Error occured!";
    echo $ex->getMessage();
}

?>