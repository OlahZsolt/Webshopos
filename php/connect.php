<?php
 $email=$_POST['email'];
 $password=$_POST['password'];
 $lastName=$_POST['lastName'];
 $firstName=$_POST['firstName'];
 $phone=$_POST['phone'];
 $address=$_POST['address'];
 $address2=$_POST['address2'];
 $city=$_POST['city'];


//adatbázis kapcsolás

$conn= new mysqli('localhost','root','','webshop_users');
if($conn->connect_error){
    die('Megszakadt a kapcsolat : '.$conn->connect_error);
}
else{
    $stmt= $conn->prepare("insert into registration(email,password,lastName,firstName,phone,address,address2,city)
    values(?,?,?,?,?,?,?,?)");
    $stmt->bind_param("s,s,s,s,i,s,s,s",$email,$password,$lastName,$firstName,$phone,$address,$address2,$city);
    $stmt->execute();
    echo "Sikeres regisztráció...";
    $stmt->close();
    $conn->close();
}

?>

