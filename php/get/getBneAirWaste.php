<?PHP

// get all events

require_once '../inc/db_connect.php';

//$stmt = $db->prepare("SELECT SUM(quantity_in_kg) FROM wastedata WHERE Type='air' AND site_address_suburb='Brisbane'");
$stmt = $db->prepare("SELECT * FROM wastedata WHERE Type='air' AND site_address_suburb='Brisbane'");
$stmt->execute();
//$result = $stmt->fetchAll();
$result = $stmt->fetchAll();
//$result = json_encode($result);

echo json_encode($result);

?>