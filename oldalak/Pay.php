<!doctype html>
<html lang="hu">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Véglegesítés</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="../css/Pay.css" rel="stylesheet">
</head>
  <body>


    <div class="sikeres_rendeles" hidden>
      <div class="sikeres_szoveg">
        <div class="container">
          <div class="row">
            <div style="text-align: center;" class="col">
              <label style="color: green;font-size: 25px; font-weight: bold;" >Sikeres megrendelés!</label>
            </div>
          </div>
          <div class="row">
            <div style="text-align: center; margin-top: 20px;" class="col">
              <label style="font-size: 20px; color: black;" >A további információkat elküldtük az e-mail címére</label>
            </div>
          </div>
          <div class="row">
            <div style="text-align: center; margin-top: 20px;" class="col">
              <label style="font-size: 15px; color: black;" >Az alábbi a megrendelés azonosítója: #</label><label id="megrendeles_azonosito" style="font-size: 15px; color: black; font-weight: bold;"></label>
            </div>
          </div>
          <div class="row">
            <div style="text-align: center; margin-top: 20px;" class="col">
              <button id="visszateres" class="btn btn-secondary" >Visszatérés a fő oldalra</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <?php 

include('Header.php');
$id=$_SESSION["user_id"];
$con= new mysqli('localhost','root','','webshop_users');
$stmt = $con->prepare("SELECT * FROM registration WHERE id = $id ");
    
    $stmt->execute();
    $stmt_result = $stmt->get_result();
    $data = $stmt_result->fetch_assoc();

?>

      

      <div class="container">
        <div class="shopping_gadgets">
            <div class="row">
                <div style="text-align: center;" class="col">
                  <h1>Véglegesítés</h1>
                </div>
              </div>

              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok_cim">Szállítási adatok</label>
                </div>
              </div>
              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok">Megye</label>
                </div>
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok"><?php echo $data['deliveryState'] ?></label>
                </div>
              </div>
              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok">Város</label>
                </div>
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok"><?php echo $data['deliveryCity'] ?></label>
                </div>
              </div>
              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok">Cím</label>
                </div>
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok"><?php echo $data['deliveryAddress'] ?></label>
                </div>
              </div>
              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok">Házszám</label>
                </div>
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok"><?php echo $data['deliveryAddress2'] ?></label>
                </div>
              </div>

              <div style="margin-top: 20px;" class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok_cim">Számlázási adatok</label>
                </div>
              </div>
              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok">Név</label>
                </div>
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok"><?php echo $data['lastName']." ".$data['firstName'] ?></label>
                </div>
              </div>
              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok">Megye</label>
                </div>
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok"><?php echo $data['state'] ?></label>
                </div>
              </div>
              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok">Város</label>
                </div>
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok"><?php echo $data['city'] ?></label>
                </div>
              </div>
              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok">Cím</label>
                </div>
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok"><?php echo $data['address'] ?></label>
                </div>
              </div>
              <div class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok">Házszám</label>
                </div>
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok"><?php echo $data['address2'] ?></label>
                </div>
              </div>

              <div style="margin-top: 20px;" class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok_cim">Szállítási lehetőségek</label>
                </div>
              </div>
              <div  style="margin-left: 20%; margin-right: 20%;" class="row">
                <select id="szallitas_select_inputs" class="form-select" aria-label="Default select example">
                  <option selected>Szállítási lehetőségek...</option>
                  <option value="1">Házhozszállítás a GLS futárszolgálattal (+2000Ft)</option>
                  <option value="2">Packeta pontra szállítás (+1800Ft)</option>
                  <option value="3">Foxpost automatába szállítás (+1500Ft)</option>
                </select>
              </div>

              <div style="margin-top: 20px;" class="row">
                <div style="margin-left: 12%;" class="col">
                    <label class="szallitasi_adatok_cim">Fizetési lehetőségek</label>
                </div>
              </div>
              <div style="margin-left: 20%; margin-right: 20%;" class="row">
                <select id="fizetes_select_inputs" class="form-select" aria-label="Default select example">
                  <option selected>Fizetési lehetőségek...</option>
                  <option value="1">Utánvét (+500Ft)</option>
                  <option value="2">Előre utalás (Ingyenes)</option>
                  <option value="3">Online fizetés (Ingyenes)</option>
                </select>
              </div>



              <div style="margin-top: 30px; margin-bottom: 30px;" class="row">
                <div style="text-align: center;" class="col">
                  <label class="fizetendo_style" >Összesen fizetendő:</label>
                </div>
                <div style="text-align: center;" class="col">
                  <label id="ossz_ar_veglegesites" class="fizetendo_style" >10000</label><label class="fizetendo_style" >&nbsp;Ft</label>
                </div>
              </div>

              <div style="margin-top: 30px; margin-bottom: 30px;" class="row">
                <div style="text-align: center;" class="col">
                  <a href="Webshop.php" class="btn btn-danger" >Vissza</a>
                </div>
                <div style="text-align: center;" class="col">
                  <a id="befejezes" class="btn btn-primary" >Befejezés</a>
                </div>
               </div>

               <div class="row"></div>

        </div>
    </div>

 
    <footer style="margin-top: 100px;" class="site-footer">
    <?php include('Footer.php'); ?>
  </footer>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="../js/Pay.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
  </body>
</html>