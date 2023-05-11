<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Regisztráció</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="../css/Registration.css">
</head>

<body>


<?php 

include('Header.php');

?>

  <div class="center">

    <form class="row g-3" action="connect.php" method="post">
      <h1>Regisztráció</h1>
      <h3>Személyes adatok</h3>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" name="email">
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">Jelszó</label>
        <input type="password" class="form-control" id="inputPassword4" name="password">
      </div>
      <div class="col-md-6">
        <label for="inputLastName" class="form-label">Vezetéknév</label>
        <input type="text" class="form-control" id="inputLastName" name="lastName">
      </div>
      <div class="col-md-6">
        <label for="inputFirstName" class="form-label">Keresztnév</label>
        <input type="text" class="form-control" id="inputFirstName" name="firstName">
      </div>
      <div class="col-md-6">
        <label for="inputPhone" class="form-label">Telefonszám</label>
        <input type="text" class="form-control" id="inputPhone" placeholder="+36701233214" name="phone">
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Cím</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Utcanév, közterület típus" name="address">
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Házszám</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Házszám, épület, vagy ajtó" name="address2">
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Város</label>
        <input type="text" class="form-control" id="inputCity" name="city">
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">Megye</label>
        <select id="inputState" class="form-select" name="state">
          <option selected>Válassz...</option>
          <option value="Bács-Kiskun">Bács-Kiskun</option>
          <option value="Baranya">Baranya</option>
          <option value="Békés">Békés</option>
          <option value="Borsod-Abaúj-Zemplén">Borsod-Abaúj-Zemplén</option>
          <option value="Csongrád">Csongrád</option>
          <option value="Fejér">Fejér</option>
          <option value="Győr-Moson-Sopron">Győr-Moson-Sopron</option>
          <option value="Hajdú-Bihar">Hajdú-Bihar</option>
          <option value="Heves">Heves</option>
          <option value="Jász-Nagykun-Szolnok">Jász-Nagykun-Szolnok</option>
          <option value="Komárom-Esztergom">Komárom-Esztergom</option>
          <option value="Nógrád">Nógrád</option>
          <option value="Pest">Pest</option>
          <option value="Somogy">Somogy</option>
          <option value="Szabolcs-Szatmár-Bereg">Szabolcs-Szatmár-Bereg</option>
          <option value="Tolna">Tolna</option>
          <option value="Vas">Vas</option>
          <option value="Veszprém">Veszprém</option>
          <option value="Zala">Zala</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Irányítószám</label>
        <input type="text" class="form-control" id="inputZip" name="zip">
      </div>
      <h3>Szállítási adatok</h3>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Cím</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="Utcanév, közterület típus" name="deliveryAddress">
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Házszám</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Házszám, épület, vagy ajtó" name="deliveryAddress2">
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Város</label>
        <input type="text" class="form-control" id="inputCity" name="deliveryCity">
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">Megye</label>
        <select id="inputState" class="form-select" name="deliveryState">
          <option selected>Válassz...</option>
          <option value="Bács-Kiskun">Bács-Kiskun</option>
          <option value="Baranya">Baranya</option>
          <option value="Békés">Békés</option>
          <option value="Borsod-Abaúj-Zemplén">Borsod-Abaúj-Zemplén</option>
          <option value="Csongrád">Csongrád</option>
          <option value="Fejér">Fejér</option>
          <option value="Győr-Moson-Sopron">Győr-Moson-Sopron</option>
          <option value="Hajdú-Bihar">Hajdú-Bihar</option>
          <option value="Heves">Heves</option>
          <option value="Jász-Nagykun-Szolnok">Jász-Nagykun-Szolnok</option>
          <option value="Komárom-Esztergom">Komárom-Esztergom</option>
          <option value="Nógrád">Nógrád</option>
          <option value="Pest">Pest</option>
          <option value="Somogy">Somogy</option>
          <option value="Szabolcs-Szatmár-Bereg">Szabolcs-Szatmár-Bereg</option>
          <option value="Tolna">Tolna</option>
          <option value="Vas">Vas</option>
          <option value="Veszprém">Veszprém</option>
          <option value="Zala">Zala</option>
        </select>
      </div>
      <div class="col-md-2">
        <label for="inputZip" class="form-label">Irányítószám</label>
        <input type="text" class="form-control" id="inputZip" name="deliveryZip">
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Regisztrálok</button>
      </div>
    </form>
  </div>



  <footer style="margin-top: 1237px;" class="site-footer">
  <?php include('Footer.php'); ?>
</footer>




  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
</body>

</html>