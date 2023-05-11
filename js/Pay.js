$(function () {
    var hyperx_mennyiseg = localStorage.getItem("hyper_db");
    var hyperx_ar= 36899;
    var razer_mennyiseg = localStorage.getItem("razer_db");
    var razer_ar= 19899;
    var blitzwolf_mennyiseg = localStorage.getItem("blitzwolf_db");
    var blitzwolf_ar= 22499;
    var rtx_mennyiseg = localStorage.getItem("rtx_db");
    var rtx_ar= 896260;
    var i9_mennyiseg = localStorage.getItem("i9_db");
    var i9_ar= 207630;
    var kingston_mennyiseg = localStorage.getItem("kingston_db");
    var kingston_ar= 111790;
    var dell_mennyiseg = localStorage.getItem("dell_db");
    var dell_ar= 279890;
    var alaplap_mennyiseg = localStorage.getItem("alaplap_db");
    var alaplap_ar= 537131;
    var strix_mennyiseg = localStorage.getItem("strix_db");
    var strix_ar= 88960;
    var szallitasi_ar = 0;
    var fizetes_ar = 0


    $('#szallitas_select_inputs').on('change', function() {
        if(this.value == 1)
        {
            szallitasi_ar = 2000;
        }
        else if(this.value == 2)
        {
            szallitasi_ar = 1800;
        }
        else{
            szallitasi_ar = 1500;
        }
        $('#ossz_ar_veglegesites').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
+(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar)+szallitasi_ar+fizetes_ar);
      });

      $('#fizetes_select_inputs').on('change', function() {
        if(this.value == 1)
        {
            fizetes_ar = 500;
        }
        else if(this.value == 2)
        {
            fizetes_ar = 0;
        }
        else{
            fizetes_ar = 0;
        }
        $('#ossz_ar_veglegesites').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
+(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar)+szallitasi_ar+fizetes_ar);
      });

$('#ossz_ar_veglegesites').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
+(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar)+szallitasi_ar+fizetes_ar);

$("#befejezes").click(function(){
    $('.sikeres_rendeles').attr('hidden', false);
    $('#megrendeles_azonosito').text(Math.floor((Math.random() * 8674859684) + 2342323343));
});

$("#visszateres").click(function(){
    localStorage.setItem("strix_db", '0');
    localStorage.setItem("alaplap_db", '0');
    localStorage.setItem("dell_db", '0');
    localStorage.setItem("kingston_db", '0');
    localStorage.setItem("i9_db", '0');
    localStorage.setItem("rtx_db", '0');
    localStorage.setItem("blitzwolf_db", '0');
    localStorage.setItem("razer_db", '0');
    localStorage.setItem("hyper_db", '0');
    localStorage.setItem("ossz_db", '0');
    window.location.href = 'Webshop.php';
});
});