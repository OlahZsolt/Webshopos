// Szervíz

$(document).ready(function () {

    // ? Változók
    var i = 0;
    var hyperX_cloud_flight = 0;
    var razer_viper_mini = 0;
    var blitzwolf_bw_kb1 = 0;
    var asus_geforce_rtx_4090 = 0;
    var intel_core_i9_10900K = 0;
    var kingston_fury_16GB = 0;
    var dell_alienware_aw2521h = 0;
    var alaplap_asus_rog_maximus_z690 = 0;
    var asus_rog_strix_1000g = 0;

    // ? Adatok local stroge-ba helyezése


/*
    var formData = {
        set : function (){
            var  formData = [];
            localStorage.removeItem('formData ');
            $('form input[type=text]').each(function(){
                formData .push({ name: this.name, value: this.value});
            });
            localStorage.formData = JSON.stringify(formData);
        },
        get : function (){
            if(localStorage.formData  != undefined){
                formData  = JSON.parse(localStorage.formData);
                for (var i = 0; i < formData.length; i++) {
                    $('[name='+formData[i].name+']').val(formData[i].value);
                }
            }
        }
    }
    formData.get();
    $("input").change( function() {
        formData.set();
    });
*/






    // * HyperX Cloud Flight (Kosárba rakása)
    $("#hyper_shop").click(function () {
        i++;
        hyperX_cloud_flight++;
        console.log('HyperX Cloud Flight a kosárban: '+hyperX_cloud_flight+'db');
        console.log('Ennyi áru van a kosárban összesen: '+i+'db');
        $("#fooldal_hyper_cloud_flight_db").text(hyperX_cloud_flight);
        $("#item_number").text(i);
        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    // * Razer Viper Mini (Kosárba rakása)
    $("#razer_viper_shop").click(function () {
        i++;
        razer_viper_mini++;
        console.log('Razer Viper Mini a kosárban: '+razer_viper_mini+'db');
        console.log('Ennyi áru van a kosárban összesen: '+i+'db');
        $("#fooldal_razer_viper_db").text(razer_viper_mini);
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    // * BLITZWOLF BW-KB1 (Kosárba rakása)
    $("#blitzwolf_bw-kb1_shop").click(function () {
        blitzwolf_bw_kb1++;
        i++;
        console.log('BLITZWOLF BW-KB1 a kosárban: '+blitzwolf_bw_kb1+'db');
        console.log('Ennyi áru van a kosárban összesen: '+i+'db');
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    // * ASUS GeForce RTX 4090 OC 24GB GDDR6X (Kosárba rakása)
    $("#rtx_4090_shop").click(function () {
        i++;
        asus_geforce_rtx_4090++;
        console.log('ASUS GeForce RTX 4090 OC 24GB GDDR6X a kosárban: '+asus_geforce_rtx_4090+'db');
        console.log('Ennyi áru van a kosárban összesen: '+i+'db');
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    // * Intel Core i9-10900K (Kosárba rakása)
    $("#i9-10900K_shop").click(function () {
        i++;
        intel_core_i9_10900K++;
        console.log('Intel Core i9-10900K a kosárban: '+intel_core_i9_10900K+'db');
        console.log('Ennyi áru van a kosárban összesen: '+i+'db');
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    // * Kingston FURY 16GB KIT (Kosárba rakása)
    $("#fury_16gb_shop").click(function () {
        i++;
        kingston_fury_16GB++;
        console.log('Kingston FURY 16GB KIT a kosárban: '+kingston_fury_16GB+'db');
        console.log('Ennyi áru van a kosárban összesen: '+i+'db');
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    // * Dell Alienware AW2521H Gaming monitor (Kosárba rakása)
    $("#alienware_shop").click(function () {
        i++;
        dell_alienware_aw2521h++;
        console.log('Dell Alienware AW2521H Gaming monitor a kosárban: '+dell_alienware_aw2521h+'db');
        console.log('Ennyi áru van a kosárban összesen: '+i+'db');
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    // * Alaplap ASUS ROG MAXIMUS Z690 EXTREME (Kosárba rakása)
    $("#asus_maximus_shop").click(function () {
        i++;
        alaplap_asus_rog_maximus_z690++;
        console.log('Alaplap ASUS ROG MAXIMUS Z690 EXTREME a kosárban: '+alaplap_asus_rog_maximus_z690+'db');
        console.log('Ennyi áru van a kosárban összesen: '+i+'db');
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

    // * Asus ROG-STRIX-1000G tápegység, 80+ arany (Kosárba rakása)
    $("#rog_strix_tap_shop").click(function () {
        i++;
        asus_rog_strix_1000g++;
        console.log('Asus ROG-STRIX-1000G tápegység, 80+ arany a kosárban: '+asus_rog_strix_1000g+'db');
        console.log('Ennyi áru van a kosárban összesen: '+i+'db');
        $("#item_number").text(i);

        if (i > 9) {
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }
    });

});