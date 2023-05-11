<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bejelentkezés</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel=" stylesheet" href="../css/Login.css">
</head>

<body>

<?php 

include('Header.php');

?>

  <div class="center">
    <form action="login.php" method="post">
        <h1>Bejelentkezés</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email cím</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required>
        
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Jelszó</label>
        <input type="password" class="form-control" id="exampleInputPassword1" name="password" required>
      </div>
      
      <button type="submit" class="btn btn-primary">Belépés</button>

    </form>
  </div>



  <footer style="margin-top: 837px;" class="site-footer">
  <?php include('Footer.php'); ?>
</footer>



  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
  crossorigin="anonymous"></script>
</body>

</html>