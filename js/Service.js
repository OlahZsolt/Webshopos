// Szervíz

$(function () {

    

    // ? Változók
    var i = 0;
    var hyperX_cloud_flight = 0;
    var razer_viper_mini = localStorage.getItem("razer_db");
    var blitzwolf_bw_kb1 = 0;
    var asus_geforce_rtx_4090 = 0;
    var intel_core_i9_10900K = 0;
    var kingston_fury_16GB = 0;
    var dell_alienware_aw2521h = 0;
    var alaplap_asus_rog_maximus_z690 = 0;
    var asus_rog_strix_1000g = 0;

    // ! Amint betöltődik az oldal megkapja ezeket az értékeket
    $('#fooldal_hyper_cloud_flight_db').text(localStorage.getItem("hyperx_exists"+1));
    // * HyperX Cloud Flight (Kosárba rakása)
    $("#hyper_shop").click(function () {


        localStorage.setItem("hyperx_exists",hyperX_cloud_flight ++);

        var letezik = localStorage.getItem("hyperx_exists");
        i++;
        hyperX_cloud_flight++;

        $("#fooldal_hyper_cloud_flight_db").text(hyperX_cloud_flight);
        $("#item_number").text(i);
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $('#fooldal_hyper_cloud_flight_db').text(localStorage.getItem("hyperx_exists"));
    });

    $("#hyper_shop_remove").click(function () {
        if (hyperX_cloud_flight > 0) {
            i--;
            localStorage.setItem("hyperx_exists",hyperX_cloud_flight-- );
            console.log(localStorage.getItem("hyperx_exists")+' kivonás után');
            $("#fooldal_hyper_cloud_flight_db").text(localStorage.getItem("hyperx_exists"));
            $("#item_number").text(i);
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }
        if(localStorage.getItem("hyperx_exists") == 0) {
            localStorage.setItem("hyperx_exists",0 );
            var letezik_0 = localStorage.getItem("hyperx_exists");
            console.log(letezik_0+' 0?');
            $("#fooldal_hyper_cloud_flight_db").text(localStorage.getItem("hyperx_exists"));
        }
    });










    // * Razer Viper Mini (Kosárba rakása)
    $("#fooldal_razer_viper_db").text(localStorage.getItem("razer_db"));
    
    $("#razer_viper_shop").click(function () {
        i++;
        razer_viper_mini++;
        localStorage.setItem("razer_db",razer_viper_mini);
        console.log('Razer Viper Mini a kosárban: ' + razer_viper_mini + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#item_number").text(i);
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $("#fooldal_razer_viper_db").text(localStorage.getItem("razer_db"));
    });

    $("#razer_viper_shop_remove").click(function () {
        if (razer_viper_mini > 0) {
            i--;
            razer_viper_mini--;
            localStorage.setItem("razer_db",razer_viper_mini);
            console.log('Razer Viper Mini a kosárban: ' + razer_viper_mini + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            $("#item_number").text(i);
            $("#fooldal_razer_viper_db").text(localStorage.getItem("razer_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }
    });









    // * BLITZWOLF BW-KB1 (Kosárba rakása)
    $("#blitzwolf_bw-kb1_shop").click(function () {
        blitzwolf_bw_kb1++;
        i++;
        console.log('BLITZWOLF BW-KB1 a kosárban: ' + blitzwolf_bw_kb1 + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_blitzwolf_bw-kb1_db").text(blitzwolf_bw_kb1);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    $("#blitzwolf_bw-kb1_shop_remove").click(function () {
        if (blitzwolf_bw_kb1 > 0) {
            blitzwolf_bw_kb1--;
        i--;
        console.log('BLITZWOLF BW-KB1 a kosárban: ' + blitzwolf_bw_kb1 + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_blitzwolf_bw-kb1_db").text(blitzwolf_bw_kb1);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }

        }

    });

    // * ASUS GeForce RTX 4090 OC 24GB GDDR6X (Kosárba rakása)
    $("#rtx_4090_shop").click(function () {
        i++;
        asus_geforce_rtx_4090++;
        console.log('ASUS GeForce RTX 4090 OC 24GB GDDR6X a kosárban: ' + asus_geforce_rtx_4090 + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_rtx_4090_db").text(asus_geforce_rtx_4090);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    $("#rtx_4090_shop_remove").click(function () {
        if (asus_geforce_rtx_4090 > 0) {
            i--;
            asus_geforce_rtx_4090--;
            console.log('ASUS GeForce RTX 4090 OC 24GB GDDR6X a kosárban: ' + asus_geforce_rtx_4090 + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            $("#fooldal_rtx_4090_db").text(asus_geforce_rtx_4090);
            $("#item_number").text(i);
    
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }

        }

    });

    // * Intel Core i9-10900K (Kosárba rakása)
    $("#i9-10900K_shop").click(function () {
        i++;
        intel_core_i9_10900K++;
        console.log('Intel Core i9-10900K a kosárban: ' + intel_core_i9_10900K + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_i9-10900K_db").text(intel_core_i9_10900K);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    $("#i9-10900K_shop_remove").click(function () {
        if (intel_core_i9_10900K > 0) {
            i--;
        intel_core_i9_10900K--;
        console.log('Intel Core i9-10900K a kosárban: ' + intel_core_i9_10900K + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_i9-10900K_db").text(intel_core_i9_10900K);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }

        }

    });

    // * Kingston FURY 16GB KIT (Kosárba rakása)
    $("#fury_16gb_shop").click(function () {
        i++;
        kingston_fury_16GB++;
        console.log('Kingston FURY 16GB KIT a kosárban: ' + kingston_fury_16GB + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_fury_16gb_db").text(kingston_fury_16GB);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    $("#fury_16gb_shop_remove").click(function () {
        if (kingston_fury_16GB > 0) {
            i--;
            kingston_fury_16GB--;
            console.log('Kingston FURY 16GB KIT a kosárban: ' + kingston_fury_16GB + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            $("#fooldal_fury_16gb_db").text(kingston_fury_16GB);
            $("#item_number").text(i);
    
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }

        }

    });

    // * Dell Alienware AW2521H Gaming monitor (Kosárba rakása)
    $("#alienware_shop").click(function () {
        i++;
        dell_alienware_aw2521h++;
        console.log('Dell Alienware AW2521H Gaming monitor a kosárban: ' + dell_alienware_aw2521h + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_alienware_db").text(dell_alienware_aw2521h);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    $("#alienware_shop_remove").click(function () {
        if (dell_alienware_aw2521h > 0) {
            i--;
        dell_alienware_aw2521h--;
        console.log('Dell Alienware AW2521H Gaming monitor a kosárban: ' + dell_alienware_aw2521h + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_alienware_db").text(dell_alienware_aw2521h);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }

        }

    });

    // * Alaplap ASUS ROG MAXIMUS Z690 EXTREME (Kosárba rakása)
    $("#asus_maximus_shop").click(function () {
        i++;
        alaplap_asus_rog_maximus_z690++;
        console.log('Alaplap ASUS ROG MAXIMUS Z690 EXTREME a kosárban: ' + alaplap_asus_rog_maximus_z690 + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_asus_maximus_db").text(alaplap_asus_rog_maximus_z690);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    $("#asus_maximus_shop_remove").click(function () {
        if (alaplap_asus_rog_maximus_z690 > 0) {
            i--;
        alaplap_asus_rog_maximus_z690--;
        console.log('Alaplap ASUS ROG MAXIMUS Z690 EXTREME a kosárban: ' + alaplap_asus_rog_maximus_z690 + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_asus_maximus_db").text(alaplap_asus_rog_maximus_z690);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }

        }

    });

    // * Asus ROG-STRIX-1000G tápegység, 80+ arany (Kosárba rakása)
    $("#rog_strix_tap_shop").click(function () {
        i++;
        asus_rog_strix_1000g++;
        console.log('Asus ROG-STRIX-1000G tápegység, 80+ arany a kosárban: ' + asus_rog_strix_1000g + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        $("#fooldal_rog_strix_tap_db").text(asus_rog_strix_1000g);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    $("#rog_strix_tap_shop_remove").click(function () {
        if (asus_rog_strix_1000g > 0) {
            i--;
            asus_rog_strix_1000g--;
            console.log('Asus ROG-STRIX-1000G tápegység, 80+ arany a kosárban: ' + asus_rog_strix_1000g + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            $("#fooldal_rog_strix_tap_db").text(asus_rog_strix_1000g);
            $("#item_number").text(i);
    
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }

        }

    });

});