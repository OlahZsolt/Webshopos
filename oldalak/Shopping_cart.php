<!doctype html>
<html lang="hu">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kosaram</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="../css/Shopping_cart.css" rel="stylesheet">
  </head>
  <body>

  <?php 

include('Header.php');

?>
    
    

    <div class="container">
      <div class="shopping_gadgets" >
        <div class="overflow-auto">
        <div class="container">

          <div class="row">
            <div style="text-align: center;" class="col">
              <h1>Kosaram</h1>
            </div>
          </div>

          <div id="hyperx_row" class="row">

            <div style="margin-top: 30px; text-align: center;" class="col-3">
              <img src="../assets/hyperx-cloud-flight.png" class="shopping_cart_image" alt="headset">
            </div>
            <div style="margin-top: 30px;" class="col-5">
              <label class="shopping_cart_description">Gaming szintű vezeték nélküli fejhallgató extra hosszú akkumulátor élettartammal</label>
            </div>
            <div style="margin-top: 30px;" class="col-4">
              <div style="margin-top: 10px;" class="row">

                <div style="text-align: right;" class="col">
                  <button id="hyper_minus" class="btn btn-dark"  > <label class="minus">-</label></button>
                </div>
                <div style="text-align: center;margin: auto;" class="col-2">
                  <label class="hyperX_cluod_cart_amount" id="hyperX_cloud_cart_amount">0</label>
                </div>
                <div class="col">
                  <button id="hyper_plus" class="btn btn-dark" >+</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Razer Viper Mini-->

          <div id="razer_row" class="row">

            <div style="margin-top: 30px; text-align: center;" class="col-3">
              <img src="../assets/razer-viper-mini.png" class="shopping_cart_image" alt="headset">
            </div>
            <div style="margin-top: 30px;" class="col-5">
              <label class="shopping_cart_description">Az ultrakönnyű súlyú gaming élmény határainak feszegetésére születve.</label>
            </div>
            <div style="margin-top: 30px;" class="col-4">
              <div style="margin-top: 10px;" class="row">

                <div style="text-align: right;" class="col">
                  <button id="razer_minus" class="btn btn-dark"  > <label class="minus">-</label></button>
                </div>
                <div style="text-align: center;margin: auto;" class="col-2">
                  <label class="hyperX_cluod_cart_amount" id="razer_viper_cart_amount">1</label>
                </div>
                <div class="col">
                  <button id="razer_plus" class="btn btn-dark" >+</button>
                </div>
              </div>
            </div>

          </div>

          <!-- Blitzwolf bw-kb1 -->

          <div id="blitzwolf_row" class="row">

            <div style="margin-top: 30px; text-align: center;" class="col-3">
              <img src="../assets/blitzwolf-keyboard.png" class="shopping_cart_image" alt="headset">
            </div>
            <div style="margin-top: 30px;" class="col-5">
              <label class="shopping_cart_description">Kényelem és minőség egyben. Kiváló választás minden játékos számára.</label>
            </div>
            <div style="margin-top: 30px;" class="col-4">
              <div style="margin-top: 10px;" class="row">

                <div style="text-align: right;" class="col">
                  <button id="blitzwolf_minus" class="btn btn-dark"  > <label class="minus">-</label></button>
                </div>
                <div style="text-align: center;margin: auto;" class="col-2">
                  <label class="hyperX_cluod_cart_amount" id="blitzwolf_cart_amount">1</label>
                </div>
                <div class="col">
                  <button id="blitzwolf_plus" class="btn btn-dark" >+</button>
                </div>
              </div>
            </div>

          </div>

          <!-- ASUS GeForce RTX 4090 OC 24GB GDDR6X -->

          <div id="rtx_row" class="row">

            <div style="margin-top: 30px; text-align: center;" class="col-3">
              <img src="../assets/rtx_4090_gpu.png" class="shopping_cart_image" alt="headset">
            </div>
            <div style="margin-top: 30px;" class="col-5">
              <label class="shopping_cart_description">Memória kapacitás 24 GB, Memória típus GDDR6X, Tápellátás 1 x 16pin</label>
            </div>
            <div style="margin-top: 30px;" class="col-4">
              <div style="margin-top: 10px;" class="row">

                <div style="text-align: right;" class="col">
                  <button id="rtx_minus" class="btn btn-dark"  > <label class="minus">-</label></button>
                </div>
                <div style="text-align: center;margin: auto;" class="col-2">
                  <label class="hyperX_cluod_cart_amount" id="rtx_cart_amount">1</label>
                </div>
                <div class="col">
                  <button id="rtx_plus" class="btn btn-dark" >+</button>
                </div>
              </div>
            </div>

          </div>

          <!-- Intel Core i9-10900K -->

          <div id="i9_row" class="row">

            <div style="margin-top: 30px; text-align: center;" class="col-3">
              <img src="../assets/i9-10900K-cpu.png" class="shopping_cart_image" alt="headset">
            </div>
            <div style="margin-top: 30px;" class="col-5">
              <label class="shopping_cart_description">10th gen Intel® Core™ i9 - 3.7 GHz - LGA 1200(Socket H5) - PC - 14 nm - Intel</label>
            </div>
            <div style="margin-top: 30px;" class="col-4">
              <div style="margin-top: 10px;" class="row">

                <div style="text-align: right;" class="col">
                  <button id="i9_minus" class="btn btn-dark"  > <label class="minus">-</label></button>
                </div>
                <div style="text-align: center;margin: auto;" class="col-2">
                  <label class="hyperX_cluod_cart_amount" id="i9_cart_amount">1</label>
                </div>
                <div class="col">
                  <button id="i9_plus" class="btn btn-dark" >+</button>
                </div>
              </div>
            </div>

          </div>

          <!-- Kingston FURY 16GB KIT -->

          <div id="kingston_row" class="row">

            <div style="margin-top: 30px; text-align: center;" class="col-3">
              <img src="../assets/kingston_fury_16gb_kit.png" class="shopping_cart_image" alt="headset">
            </div>
            <div style="margin-top: 30px;" class="col-5">
              <label class="shopping_cart_description">DDR4 5000MHz CL19 Renegade fekete színben - 2x8GB, PC4-40000, 19 CL, feszültség 1.55 V</label>
            </div>
            <div style="margin-top: 30px;" class="col-4">
              <div style="margin-top: 10px;" class="row">

                <div style="text-align: right;" class="col">
                  <button id="kingston_minus" class="btn btn-dark"  > <label class="minus">-</label></button>
                </div>
                <div style="text-align: center;margin: auto;" class="col-2">
                  <label class="hyperX_cluod_cart_amount" id="kingston_cart_amount">1</label>
                </div>
                <div class="col">
                  <button id="kingston_plus" class="btn btn-dark" >+</button>
                </div>
              </div>
            </div>

          </div>

          <!-- Dell Alienware AW2521H Gaming monitor -->

          <div id="dell_row" class="row">

            <div style="margin-top: 30px; text-align: center;" class="col-3">
              <img src="../assets/alienware_360hz.png" class="shopping_cart_image" alt="headset">
            </div>
            <div style="margin-top: 30px;" class="col-5">
              <label class="shopping_cart_description">Tapasztalja meg az elérhető legjobb IPS technológiát, akár 360 Hz-es natív frissítési frekvenciával.</label>
            </div>
            <div style="margin-top: 30px;" class="col-4">
              <div style="margin-top: 10px;" class="row">

                <div style="text-align: right;" class="col">
                  <button id="dell_minus" class="btn btn-dark"  > <label class="minus">-</label></button>
                </div>
                <div style="text-align: center;margin: auto;" class="col-2">
                  <label class="hyperX_cluod_cart_amount" id="dell_cart_amount">1</label>
                </div>
                <div class="col">
                  <button id="dell_plus" class="btn btn-dark" >+</button>
                </div>
              </div>
            </div>

          </div>

           <!-- Alaplap ASUS ROG MAXIMUS Z690 EXTREME -->

           <div id="alaplap_row" class="row">

            <div style="margin-top: 30px; text-align: center;" class="col-3">
              <img src="../assets/asus_rog_maximus.png" class="shopping_cart_image" alt="headset">
            </div>
            <div style="margin-top: 30px;" class="col-5">
              <label class="shopping_cart_description">A ROG Maximus Z690 Extreme a legfejlettebb alaplap a rajongók számára.</label>
            </div>
            <div style="margin-top: 30px;" class="col-4">
              <div style="margin-top: 10px;" class="row">

                <div style="text-align: right;" class="col">
                  <button id="alaplap_minus" class="btn btn-dark"  > <label class="minus">-</label></button>
                </div>
                <div style="text-align: center;margin: auto;" class="col-2">
                  <label class="hyperX_cluod_cart_amount" id="alaplap_cart_amount">1</label>
                </div>
                <div class="col">
                  <button id="alaplap_plus" class="btn btn-dark" >+</button>
                </div>
              </div>
            </div>

          </div>

           <!-- Asus ROG-STRIX-1000G tápegység, 80+ arany -->

           <div id="strix_row" class="row">

            <div style="margin-top: 30px; text-align: center;" class="col-3">
              <img src="../assets/asus_rog_strix_1000w.png" class="shopping_cart_image" alt="headset">
            </div>
            <div style="margin-top: 30px;" class="col-5">
              <label class="shopping_cart_description">1000W, teljesen moduláris - Táp teljesítmény (W) 1000 - Ventilátorok száma 1</label>
            </div>
            <div style="margin-top: 30px;" class="col-4">
              <div style="margin-top: 10px;" class="row">

                <div style="text-align: right;" class="col">
                  <button id="strix_minus" class="btn btn-dark"  > <label class="minus">-</label></button>
                </div>
                <div style="text-align: center;margin: auto;" class="col-2">
                  <label class="shopping_cart_amount" id="strix_cart_amount">1</label>
                </div>
                <div class="col">
                  <button id="strix_plus" class="btn btn-dark" >+</button>
                </div>
              </div>
            </div>

          </div>

          <div class="row">
            <div class="fekete_csik" ></div>
          </div>
          <div  class="row">
            <div style="text-align: center;" class="col">
              <label class="fizetendo_style" >Összesen fizetendő:</label>
            </div>
            <div style="text-align: center;" class="col">
              <label id="ossz_ar" class="fizetendo_style" >10000</label><label class="fizetendo_style" >&nbsp;Ft</label>
            </div>
          </div>

           <div style="margin-top: 30px; margin-bottom: 30px;" class="row">
            <div style="text-align: center;" class="col">
              <a href="Webshop.php" class="btn btn-danger" >Vissza</a>
            </div>
            <div style="text-align: center;" class="col">
              <a href="Pay.php" class="btn btn-primary" >Véglegesítés</a>
            </div>
           </div>



           




        </div>
      </div>
      </div>
    </div>

    <footer style="margin-top: 300px;" class="site-footer">
    <?php include('Footer.php'); ?>
  </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="../js/Shopping_cart.js"></script>
    <script src="../js/Service.js"></script>
  </body>
</html>