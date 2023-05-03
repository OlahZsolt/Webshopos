<?php 
$email= $_POST['email'];
$password= $_POST['password'];

$con= new mysqli('localhost','root','','webshop_users');
if($con -> connect_error){
    die("Megszakadt a kapcsolat: ".$con->connect_error);
}else{
    $stmt = $con->prepare("SELECT * FROM registration WHERE email = ?");
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    if($stmt_result->num_rows > 0 ){
        $data = $stmt_result->fetch_assoc();
        if($data['password'] === $password){
            echo "<h2>Sikeres bejelentkezés</h2>";
        }
        else{
            echo "<h2>Nem megfelelő az email vagy a jelszó</h2>";
        }
    } else{
        echo "<h2>Nem megfelelő az email vagy a jelszó</h2>";
    }
}

?>