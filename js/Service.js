// Szervíz

$(function () {

    
    // ? Változók
    var i = localStorage.getItem("ossz_db");
    var hyperX_cloud_flight = localStorage.getItem("hyper_db");
    var razer_viper_mini = localStorage.getItem("razer_db");
    var blitzwolf_bw_kb1 = localStorage.getItem("blitzwolf_db");
    var asus_geforce_rtx_4090 = localStorage.getItem("rtx_db");
    var intel_core_i9_10900K = localStorage.getItem("i9_db");
    var kingston_fury_16GB = localStorage.getItem("kingston_db");
    var dell_alienware_aw2521h = localStorage.getItem("dell_db");
    var alaplap_asus_rog_maximus_z690 = localStorage.getItem("alaplap_db");
    var asus_rog_strix_1000g = localStorage.getItem("strix_db");

    // TODO Amint betöltődik az oldal megkapja ezeket az értékeket
    $("#fooldal_hyper_cloud_flight_db").text(localStorage.getItem("hyper_db"));
    $("#item_number").text(localStorage.getItem("ossz_db"));



    // * HyperX Cloud Flight (Kosárba rakása)
    $("#hyper_shop").click(function () {
        i++;
        hyperX_cloud_flight++;
        localStorage.setItem("hyper_db",hyperX_cloud_flight);
        console.log('Hyperx a kosárban: ' + hyperX_cloud_flight + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        localStorage.setItem("ossz_db",i);
        $("#item_number").text(localStorage.getItem("ossz_db"));
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $("#fooldal_hyper_cloud_flight_db").text(localStorage.getItem("hyper_db"));
    });

    $("#hyper_shop_remove").click(function () {
        if (hyperX_cloud_flight > 0) {
            i--;
            hyperX_cloud_flight--;
            localStorage.setItem("hyper_db",hyperX_cloud_flight);
            console.log('Hyperx a kosárban: ' + hyperX_cloud_flight + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            $("#item_number").text(localStorage.getItem("ossz_db"));
            localStorage.setItem("ossz_db",i);
            $("#fooldal_hyper_cloud_flight_db").text(localStorage.getItem("hyper_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
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
        localStorage.setItem("ossz_db",i);
        $("#item_number").text(localStorage.getItem("ossz_db"));
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
            localStorage.setItem("ossz_db",i);
            $("#item_number").text(localStorage.getItem("ossz_db"));
            $("#fooldal_razer_viper_db").text(localStorage.getItem("razer_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }
    });


    // * BLITZWOLF BW-KB1 (Kosárba rakása)
    $("#fooldal_blitzwolf_bw-kb1_db").text(localStorage.getItem("blitzwolf_db"));

    $("#blitzwolf_bw-kb1_shop").click(function () {
        i++;
        blitzwolf_bw_kb1++;
        localStorage.setItem("blitzwolf_db",blitzwolf_bw_kb1);
        console.log('Blitzwolf a kosárban: ' + blitzwolf_bw_kb1 + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        localStorage.setItem("ossz_db",i);
        $("#item_number").text(localStorage.getItem("ossz_db"));
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $("#fooldal_blitzwolf_bw-kb1_db").text(localStorage.getItem("blitzwolf_db"));
    });

    $("#blitzwolf_bw-kb1_shop_remove").click(function () {
        if (blitzwolf_bw_kb1 > 0) {
            i--;
            blitzwolf_bw_kb1--;
            localStorage.setItem("blitzwolf_db",blitzwolf_bw_kb1);
            console.log('Blitzwolf a kosárban: ' + blitzwolf_bw_kb1 + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            localStorage.setItem("ossz_db",i);
            $("#item_number").text(localStorage.getItem("ossz_db"));
            $("#fooldal_blitzwolf_bw-kb1_db").text(localStorage.getItem("blitzwolf_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }

    });

    // * ASUS GeForce RTX 4090 OC 24GB GDDR6X (Kosárba rakása)
    $("#fooldal_rtx_4090_db").text(localStorage.getItem("rtx_db"));

    $("#rtx_4090_shop").click(function () {
        i++;
        asus_geforce_rtx_4090++;
        localStorage.setItem("rtx_db",asus_geforce_rtx_4090);
        console.log('Rtx a kosárban: ' + asus_geforce_rtx_4090 + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        localStorage.setItem("ossz_db",i);
        $("#item_number").text(localStorage.getItem("ossz_db"));
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $("#fooldal_rtx_4090_db").text(localStorage.getItem("rtx_db"));
    });

    $("#rtx_4090_shop_remove").click(function () {
        if (asus_geforce_rtx_4090 > 0) {
            i--;
            asus_geforce_rtx_4090--;
            localStorage.setItem("rtx_db",asus_geforce_rtx_4090);
            console.log('Rtx a kosárban: ' + asus_geforce_rtx_4090 + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            localStorage.setItem("ossz_db",i);
            $("#item_number").text(localStorage.getItem("ossz_db"));
            $("#fooldal_rtx_4090_db").text(localStorage.getItem("rtx_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }

    });

    // * Intel Core i9-10900K (Kosárba rakása)
    $("#fooldal_i9-10900K_db").text(localStorage.getItem("i9_db"));
    
    $("#i9-10900K_shop").click(function () {
        i++;
        intel_core_i9_10900K++;
        localStorage.setItem("i9_db",intel_core_i9_10900K);
        console.log('i9 a kosárban: ' + intel_core_i9_10900K + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        localStorage.setItem("ossz_db",i);
        $("#item_number").text(localStorage.getItem("ossz_db"));
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $("#fooldal_i9-10900K_db").text(localStorage.getItem("i9_db"));
    });

    $("#i9-10900K_shop_remove").click(function () {
        if (intel_core_i9_10900K > 0) {
            i--;
            intel_core_i9_10900K--;
            localStorage.setItem("i9_db",intel_core_i9_10900K);
            console.log('i9 a kosárban: ' + intel_core_i9_10900K + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            localStorage.setItem("ossz_db",i);
            $("#item_number").text(localStorage.getItem("ossz_db"));
            $("#fooldal_i9-10900K_db").text(localStorage.getItem("i9_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }

    });

    // * Kingston FURY 16GB KIT (Kosárba rakása)
    $("#fooldal_fury_16gb_db").text(localStorage.getItem("kingston_db"));

    $("#fury_16gb_shop").click(function () {
        i++;
        kingston_fury_16GB++;
        localStorage.setItem("kingston_db",kingston_fury_16GB);
        console.log('kingston a kosárban: ' + kingston_fury_16GB + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        localStorage.setItem("ossz_db",i);
        $("#item_number").text(localStorage.getItem("ossz_db"));
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $("#fooldal_fury_16gb_db").text(localStorage.getItem("kingston_db"));
    });

    $("#fury_16gb_shop_remove").click(function () {
        if (kingston_fury_16GB > 0) {
            i--;
            kingston_fury_16GB--;
            localStorage.setItem("kingston_db",kingston_fury_16GB);
            console.log('kingston a kosárban: ' + kingston_fury_16GB + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            localStorage.setItem("ossz_db",i);
            $("#item_number").text(localStorage.getItem("ossz_db"));
            $("#fooldal_fury_16gb_db").text(localStorage.getItem("kingston_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }

    });

    // * Dell Alienware AW2521H Gaming monitor (Kosárba rakása)
    $("#fooldal_alienware_db").text(localStorage.getItem("dell_db"));

    $("#alienware_shop").click(function () {
        i++;
        dell_alienware_aw2521h++;
        localStorage.setItem("dell_db",dell_alienware_aw2521h);
        console.log('dell a kosárban: ' + dell_alienware_aw2521h + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        localStorage.setItem("ossz_db",i);
        $("#item_number").text(localStorage.getItem("ossz_db"));
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $("#fooldal_alienware_db").text(localStorage.getItem("dell_db"));
    });

    $("#alienware_shop_remove").click(function () {
        if (dell_alienware_aw2521h > 0) {
            i--;
            dell_alienware_aw2521h--;
            localStorage.setItem("dell_db",dell_alienware_aw2521h);
            console.log('dell a kosárban: ' + dell_alienware_aw2521h + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            localStorage.setItem("ossz_db",i);
            $("#item_number").text(localStorage.getItem("ossz_db"));
            $("#fooldal_alienware_db").text(localStorage.getItem("dell_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }

    });

    // * Alaplap ASUS ROG MAXIMUS Z690 EXTREME (Kosárba rakása)
    $("#fooldal_asus_maximus_db").text(localStorage.getItem("alaplap_db"));

    $("#asus_maximus_shop").click(function () {
        i++;
        alaplap_asus_rog_maximus_z690++;
        localStorage.setItem("alaplap_db",alaplap_asus_rog_maximus_z690);
        console.log('alaplap a kosárban: ' + alaplap_asus_rog_maximus_z690 + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        localStorage.setItem("ossz_db",i);
        $("#item_number").text(localStorage.getItem("ossz_db"));
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $("#fooldal_asus_maximus_db").text(localStorage.getItem("alaplap_db"));
    });

    $("#asus_maximus_shop_remove").click(function () {
        if (alaplap_asus_rog_maximus_z690 > 0) {
            i--;
            alaplap_asus_rog_maximus_z690--;
            localStorage.setItem("alaplap_db",alaplap_asus_rog_maximus_z690);
            console.log('alaplap a kosárban: ' + alaplap_asus_rog_maximus_z690 + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            localStorage.setItem("ossz_db",i);
            $("#item_number").text(localStorage.getItem("ossz_db"));
            $("#fooldal_asus_maximus_db").text(localStorage.getItem("alaplap_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }

    });

    // * Asus ROG-STRIX-1000G tápegység, 80+ arany (Kosárba rakása)
    $("#fooldal_rog_strix_tap_db").text(localStorage.getItem("strix_db"));

    $("#rog_strix_tap_shop").click(function () {
        i++;
        asus_rog_strix_1000g++;
        localStorage.setItem("strix_db",asus_rog_strix_1000g);
        console.log('strix a kosárban: ' + asus_rog_strix_1000g + 'db');
        console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
        localStorage.setItem("ossz_db",i);
        $("#item_number").text(localStorage.getItem("ossz_db"));
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
        $("#fooldal_rog_strix_tap_db").text(localStorage.getItem("strix_db"));
    });

    $("#rog_strix_tap_shop_remove").click(function () {
        if (asus_rog_strix_1000g > 0) {
            i--;
            asus_rog_strix_1000g--;
            localStorage.setItem("strix_db",asus_rog_strix_1000g);
            console.log('strix a kosárban: ' + asus_rog_strix_1000g + 'db');
            console.log('Ennyi áru van a kosárban összesen: ' + i + 'db');
            localStorage.setItem("ossz_db",i);
            $("#item_number").text(localStorage.getItem("ossz_db"));
            $("#fooldal_rog_strix_tap_db").text(localStorage.getItem("strix_db"));
            if (i > 9) {
                $("#item_number").removeClass("item_number");
                $("#item_number").addClass("item_number_two");
            }
        }

    });

});