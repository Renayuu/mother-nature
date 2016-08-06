<?PHP

// get all events

require_once '../inc/db_connect.php';

$stmt = $db->prepare("SELECT * FROM wastedata WHERE Type='Tran' AND site_address_suburb='Gladstone'");
$stmt->execute();
$result = $stmt->fetchAll();
//$result = $stmt->fetch();
$result = json_encode($result);

echo $result;



?>