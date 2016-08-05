<?PHP

// get all events

require_once '../inc/db_connect.php';

$stmt = $db->prepare("SELECT * FROM wastedata");
$stmt->execute();
$result = $stmt->fetchAll();

$result = json_encode($result);

echo $result;



?>