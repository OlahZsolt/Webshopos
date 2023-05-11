<!doctype html>
<html lang="hu">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Dániel és Zsolt Webshopja</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link rel="stylesheet" href="../css/Webshop.css">
</head>

<body>

<?php 

include('Header.php');

?>

  <div class="pop_shopping_cart">
    <a href="Shopping_cart.php" style="border-radius: 70%; width: 50px; height: 50px;" class="btn btn-light">
      <img src="../assets/shopping_cart.png" class="shopping_cart_size" alt="shopping_cart"></a>
    <img href="Availability.php" src="../assets/shopping_numbers.png" class="shopping_numbers_size"
      alt="shopping_numbers">
    <label id="item_number" class="item_number">0</label>
  </div>

  <div class="container">


    <div class="row" style="text-align: center; margin-left: 80px; margin-top: 7px; margin-bottom: 70px;">
      <!--Kiemelt ajánlatok-->

      <div style="margin-top: 7%;" class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;" data-bs-theme="dark">
          <img src="../assets/hyperx-cloud-flight.png" class="card-img-top" alt="headset">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">HyperX Cloud Flight</h5>
              </div>
              <div style="margin: auto;" class="col-2">
                <label>x</label><label id="fooldal_hyper_cloud_flight_db">0</label>
              </div>
            </div>
            <p class="card-text">Gaming szintű vezeték nélküli fejhallgató extra hosszú akkumulátor élettartammal
            </p>
            <div class="row">
              <div class="col"><a id="hyper_shop" class="btn btn-primary">Kosárba</a></div>
              <div class="col-2"><a id="hyper_shop_remove" class="btn btn-danger">-</a></div>
              <div style="margin: auto;" class="col-4"><label class="aru_ar"> 36 899Ft</label></div>
            </div>

          </div>
        </div>
      </div>

      <div style="margin-top: 7%;" class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;" data-bs-theme="dark">
          <img src="../assets/razer-viper-mini.png" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">Razer Viper Mini</h5>
              </div>
              <div style="margin: auto;" class="col-2">
                <label>x</label><label id="fooldal_razer_viper_db">0</label>
              </div>
            </div>
            <p class="card-text">Az ultrakönnyű súlyú gaming élmény határainak feszegetésére születve.</p>
            <div class="row">
              <div class="col"><a id="razer_viper_shop" class="btn btn-primary">Kosárba</a></div>
              <div class="col-2"><a id="razer_viper_shop_remove" class="btn btn-danger">-</a></div>
              <div style="margin: auto;" class="col-4"><label class="aru_ar"> 19 899Ft</label></div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 7%;" class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;" data-bs-theme="dark">
          <img src="../assets/blitzwolf-keyboard.png" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">BLITZWOLF BW-KB1</h5>
              </div>
              <div style="margin: auto;" class="col-2">
                <label>x</label><label id="fooldal_blitzwolf_bw-kb1_db">0</label>
              </div>
            </div>
            <p class="card-text">Kényelem és minőség egyben. Kiváló választás minden játékos számára.</p>
            <div class="row">
              <div class="col"><a id="blitzwolf_bw-kb1_shop" class="btn btn-primary">Kosárba</a></div>
              <div class="col-2"><a id="blitzwolf_bw-kb1_shop_remove" class="btn btn-danger">-</a></div>
              <div style="margin: auto;" class="col-4"><label class="aru_ar"> 22 499Ft</label></div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 7%;" class="margin-7 col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;" data-bs-theme="dark">
          <img src="../assets/rtx_4090_gpu.png" class="card-img-top" alt="headset">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">ASUS GeForce RTX 4090 OC 24GB GDDR6X</h5>
              </div>
              <div style="margin: auto;" class="col-2">
                <label>x</label><label id="fooldal_rtx_4090_db">0</label>
              </div>
            </div>
            <p class="card-text">Memória kapacitás 24 GB, Memória típus GDDR6X, Tápellátás 1 x 16pin
            </p>
            <div class="row">
              <div class="col"><a id="rtx_4090_shop" class="btn btn-primary">Kosárba</a></div>
              <div class="col-2"><a id="rtx_4090_shop_remove" class="btn btn-danger">-</a></div>
              <div style="margin: auto;" class="col-5"><label class="aru_ar"> 896 260Ft</label></div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 7%;" class="margin-7 col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;" data-bs-theme="dark">
          <img src="../assets/i9-10900K-cpu.png" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">Intel Core i9-10900K</h5>
              </div>
              <div style="margin: auto;" class="col-2">
                <label>x</label><label id="fooldal_i9-10900K_db">0</label>
              </div>
            </div>
            <p class="card-text">10th gen Intel® Core™ i9 - 3.7 GHz - LGA 1200(Socket H5) - PC - 14 nm - Intel</p>
            <div class="row">
              <div class="col"><a id="i9-10900K_shop" class="btn btn-primary">Kosárba</a></div>
              <div class="col-2"><a id="i9-10900K_shop_remove" class="btn btn-danger">-</a></div>
              <div style="margin: auto;" class="col-5"><label class="aru_ar"> 207 630Ft</label></div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 7%;" class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;" data-bs-theme="dark">
          <img src="../assets/kingston_fury_16gb_kit.png" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">Kingston FURY 16GB KIT</h5>
              </div>
              <div style="margin: auto;" class="col-2">
                <label>x</label><label id="fooldal_fury_16gb_db">0</label>
              </div>
            </div>
            <p class="card-text">DDR4 5000MHz CL19 Renegade fekete színben - 2x8GB, PC4-40000, 19 CL, feszültség 1.55 V
            </p>
            <div class="row">
              <div class="col"><a id="fury_16gb_shop" class="btn btn-primary">Kosárba</a></div>
              <div class="col-2"><a id="fury_16gb_shop_remove" class="btn btn-danger">-</a></div>
              <div style="margin: auto;" class="col-5"><label class="aru_ar"> 111 790Ft</label></div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 7%;" class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;" data-bs-theme="dark">
          <img src="../assets/alienware_360hz.png" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">Dell Alienware AW2521H Gaming monitor</h5>
              </div>
              <div style="margin: auto;" class="col-2">
                <label>x</label><label id="fooldal_alienware_db">0</label>
              </div>
            </div>
            <p class="card-text">Tapasztalja meg az elérhető legjobb IPS technológiát, akár 360 Hz-es natív frissítési
              frekvenciával.</p>
            <div class="row">
              <div class="col"><a id="alienware_shop" class="btn btn-primary">Kosárba</a></div>
              <div class="col-2"><a id="alienware_shop_remove" class="btn btn-danger">-</a></div>
              <div style="margin: auto;" class="col-5"><label class="aru_ar"> 279 890Ft</label></div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 7%;" class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;" data-bs-theme="dark">
          <img src="../assets/asus_rog_maximus.png" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">Alaplap ASUS ROG MAXIMUS Z690 EXTREME</h5>
              </div>
              <div style="margin: auto;" class="col-2">
                <label>x</label><label id="fooldal_asus_maximus_db">0</label>
              </div>
            </div>
            <p class="card-text">A ROG Maximus Z690 Extreme a legfejlettebb alaplap a rajongók számára.</p>
            <div class="row">
              <div class="col"><a id="asus_maximus_shop" class="btn btn-primary">Kosárba</a></div>
              <div class="col-2"><a id="asus_maximus_shop_remove" class="btn btn-danger">-</a></div>
              <div style="margin: auto;" class="col-5"><label class="aru_ar"> 537 131Ft</label></div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 7%;" class="col-lg-4 col-md-6 col-sm-12">
        <div class="card" style="width: 18rem;" data-bs-theme="dark">
          <img src="../assets/asus_rog_strix_1000w.png" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">Asus ROG-STRIX-1000G tápegység, 80+ arany</h5>
              </div>
              <div style="margin: auto;" class="col-2">
                <label>x</label><label id="fooldal_rog_strix_tap_db">0</label>
              </div>
            </div>
            <p class="card-text">1000W, teljesen moduláris - Táp teljesítmény (W) 1000 - Ventilátorok száma 1</p>
            <div class="row">
              <div class="col"><a id="rog_strix_tap_shop" class="btn btn-primary">Kosárba</a></div>
              <div class="col-2"><a id="rog_strix_tap_shop_remove" class="btn btn-danger">-</a></div>
              <div style="margin: auto;" class="col-4"><label class="aru_ar"> 88 960Ft</label></div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>

  <footer class="site-footer">
    <?php include('Footer.php'); ?>
</footer>

  <!--scripts-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="../js/Service.js"></script>
  <script src="../js/Webshop.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
</body>

</html>