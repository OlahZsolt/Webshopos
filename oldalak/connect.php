<?php
  $email=$_POST['email'];
  $password=$_POST['password'];
  $lastName=$_POST['lastName'];
  $firstName=$_POST['firstName'];
  $phone=$_POST['phone'];
  $address=$_POST['address'];
  $address2=$_POST['address2'];
  $city=$_POST['city'];
  $state=$_POST['state'];
  $zip=$_POST['zip'];
 
  $deliveryAddress=$_POST['deliveryAddress'];
  $deliveryAddress2=$_POST['deliveryAddress2'];
  $deliveryCity=$_POST['deliveryCity'];
  $deliveryState=$_POST['deliveryState'];
  $deliveryZip=$_POST['deliveryZip'];

//adatbázis kapcsolás

$conn= new mysqli('localhost','root','','webshop_users');
$sql= "SELECT * FROM registration WHERE email = '$email'";
$result = mysqli_query($conn, $sql);
$rowCount = mysqli_num_rows($result);
if($rowCount>0){
    echo "<div class='alert alert-danger'>Az email már foglalt!</div>";
}
else{

  if($conn->connect_error){
      die('Megszakadt a kapcsolat : '.$conn->connect_error);
    }
  else{
    $stmt= $conn->prepare("insert into registration(email,password,lastName,firstName,phone,address,address2,city,state,zip,deliveryAddress,deliveryAddress2,deliveryCity,deliveryState,deliveryZip)
    values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssissssssssss",$email,$password,$lastName,$firstName,$phone,$address,$address2,$city,$state,$zip,$deliveryAddress,$deliveryAddress2,$deliveryCity,$deliveryState,$deliveryZip);
    $stmt->execute();
    echo "Sikeres regisztráció...";
    $stmt->close();
    $conn->close();
    }
}
?>

