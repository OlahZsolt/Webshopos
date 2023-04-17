// * JQUERY
$(function () {

    $('#hyperx_row').hide();
    $('#razer_row').hide();
    $('#blitzwolf_row').hide();
    $('#rtx_row').hide();
    $('#i9_row').hide();
    $('#kingston_row').hide();
    $('#dell_row').hide();
    $('#alaplap_row').hide();
    $('#strix_row').hide();

    var i = localStorage.getItem("ossz_db");
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

    $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
    +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));

    $("#hyperX_cloud_cart_amount").text(hyperx_mennyiseg);
    $("#razer_viper_cart_amount").text(razer_mennyiseg);
    $("#blitzwolf_cart_amount").text(blitzwolf_mennyiseg);
    $("#rtx_cart_amount").text(rtx_mennyiseg);
    $("#i9_cart_amount").text(i9_mennyiseg);
    $("#kingston_cart_amount").text(kingston_mennyiseg);
    $("#dell_cart_amount").text(dell_mennyiseg);
    $("#alaplap_cart_amount").text(alaplap_mennyiseg);
    $("#strix_cart_amount").text(strix_mennyiseg);

    // ? Hyperx van-e a kosárban

    if(localStorage.getItem("hyper_db") > 0)
    {
        $('#hyperx_row').show();
    }

    $("#hyper_plus").click(function(){
        i++;
        localStorage.setItem("ossz_db",i);
        hyperx_mennyiseg++;
        localStorage.setItem("hyper_db",hyperx_mennyiseg);
        $("#hyperX_cloud_cart_amount").text(hyperx_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('hyper: '+ hyperx_mennyiseg);
    })

    $("#hyper_minus").click(function(){
        i--;
        localStorage.setItem("ossz_db",i);
        hyperx_mennyiseg--;
        localStorage.setItem("hyper_db",hyperx_mennyiseg);
        $("#hyperX_cloud_cart_amount").text(hyperx_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('hyper: '+ hyperx_mennyiseg);
        if($("#hyperX_cloud_cart_amount").text() == 0)
        {
            $('#hyperx_row').hide();
        }
    })

    // ! Hyperx vége






    // ? Razer a kosárban

    if(localStorage.getItem("razer_db") > 0)
    {
        $('#razer_row').show();
    }

    $("#razer_plus").click(function(){
        i++;
        localStorage.setItem("ossz_db",i);
        razer_mennyiseg++;
        localStorage.setItem("razer_db",razer_mennyiseg);
        $("#razer_viper_cart_amount").text(razer_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('viper: '+ razer_mennyiseg);
    })

    $("#razer_minus").click(function(){
        i--;
        localStorage.setItem("ossz_db",i);
        razer_mennyiseg--;
        localStorage.setItem("razer_db",razer_mennyiseg);
        $("#razer_viper_cart_amount").text(razer_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('viper: '+ razer_mennyiseg);
        if($("#razer_viper_cart_amount").text() == 0)
        {
            $('#razer_row').hide();
        }
    })


    // ! Razer vége

    // ? Blitzwolf a kosárban

    if(localStorage.getItem("blitzwolf_db") > 0)
    {
        $('#blitzwolf_row').show();
    }

    $("#blitzwolf_plus").click(function(){
        i++;
        localStorage.setItem("ossz_db",i);
        blitzwolf_mennyiseg++;
        localStorage.setItem("blitzwolf_db",blitzwolf_mennyiseg);
        $("#blitzwolf_cart_amount").text(blitzwolf_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('blitzwolf: '+ blitzwolf_mennyiseg);
    })

    $("#blitzwolf_minus").click(function(){
        i--;
        localStorage.setItem("ossz_db",i);
        blitzwolf_mennyiseg--;
        localStorage.setItem("blitzwolf_db",blitzwolf_mennyiseg);
        $("#blitzwolf_cart_amount").text(blitzwolf_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('blitzwolf: '+ blitzwolf_mennyiseg);
        if($("#blitzwolf_cart_amount").text() == 0)
        {
            $('#blitzwolf_row').hide();
        }
    })

    // ! Blitzwolf vége

    // ? Rtx a kosárban

    if(localStorage.getItem("rtx_db") > 0)
    {
        $('#rtx_row').show();
    }

    $("#rtx_plus").click(function(){
        i++;
        localStorage.setItem("ossz_db",i);
        rtx_mennyiseg++;
        localStorage.setItem("rtx_db",rtx_mennyiseg);
        $("#rtx_cart_amount").text(rtx_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('rtx: '+ rtx_mennyiseg);
    })

    $("#rtx_minus").click(function(){
        i--;
        localStorage.setItem("ossz_db",i);
        rtx_mennyiseg--;
        localStorage.setItem("rtx_db",rtx_mennyiseg);
        $("#rtx_cart_amount").text(rtx_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('rtx: '+ rtx_mennyiseg);
        if($("#rtx_cart_amount").text() == 0)
        {
            $('#rtx_row').hide();
        }
    })

    // ! Rtx vége

    // ? i9 a kosárban

    if(localStorage.getItem("i9_db") > 0)
    {
        $('#i9_row').show();
    }

    $("#i9_plus").click(function(){
        i++;
        localStorage.setItem("ossz_db",i);
        i9_mennyiseg++;
        localStorage.setItem("i9_db",i9_mennyiseg);
        $("#i9_cart_amount").text(i9_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('i9: '+ i9_mennyiseg);
    })

    $("#i9_minus").click(function(){
        i--;
        localStorage.setItem("ossz_db",i);
        i9_mennyiseg--;
        localStorage.setItem("i9_db",i9_mennyiseg);
        $("#i9_cart_amount").text(i9_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('i9: '+ i9_mennyiseg);
        if($("#i9_cart_amount").text() == 0)
        {
            $('#i9_row').hide();
        }
    })

    // ! i9 vége

    // ? kingston a kosárban

    if(localStorage.getItem("kingston_db") > 0)
    {
        $('#kingston_row').show();
    }

    $("#kingston_plus").click(function(){
        i++;
        localStorage.setItem("ossz_db",i);
        kingston_mennyiseg++;
        localStorage.setItem("kingston_db",kingston_mennyiseg);
        $("#kingston_cart_amount").text(kingston_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('kingston: '+ kingston_mennyiseg);
    })

    $("#kingston_minus").click(function(){
        i--;
        localStorage.setItem("ossz_db",i);
        kingston_mennyiseg--;
        localStorage.setItem("kingston_db",kingston_mennyiseg);
        $("#kingston_cart_amount").text(kingston_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('kingston: '+ kingston_mennyiseg);
        if($("#kingston_cart_amount").text() == 0)
        {
            $('#kingston_row').hide();
        }
    })

    // ! kingston vége

    // ? dell a kosárban

    if(localStorage.getItem("dell_db") > 0)
    {
        $('#dell_row').show();
    }

    $("#dell_plus").click(function(){
        i++;
        localStorage.setItem("ossz_db",i);
        dell_mennyiseg++;
        localStorage.setItem("dell_db",dell_mennyiseg);
        $("#dell_cart_amount").text(dell_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('dell: '+ dell_mennyiseg);
    })

    $("#dell_minus").click(function(){
        i--;
        localStorage.setItem("ossz_db",i);
        dell_mennyiseg--;
        localStorage.setItem("dell_db",dell_mennyiseg);
        $("#dell_cart_amount").text(dell_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('dell: '+ dell_mennyiseg);
        if($("#dell_cart_amount").text() == 0)
        {
            $('#dell_row').hide();
        }
    })

    // ! dell vége

    // ? alaplap a kosárban

    if(localStorage.getItem("alaplap_db") > 0)
    {
        $('#alaplap_row').show();
    }

    $("#alaplap_plus").click(function(){
        i++;
        localStorage.setItem("ossz_db",i);
        alaplap_mennyiseg++;
        localStorage.setItem("alaplap_db",alaplap_mennyiseg);
        $("#alaplap_cart_amount").text(alaplap_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('alaplap: '+ alaplap_mennyiseg);
    })

    $("#alaplap_minus").click(function(){
        i--;
        localStorage.setItem("ossz_db",i);
        alaplap_mennyiseg--;
        localStorage.setItem("alaplap_db",alaplap_mennyiseg);
        $("#alaplap_cart_amount").text(alaplap_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('alaplap: '+ alaplap_mennyiseg);
        if($("#alaplap_cart_amount").text() == 0)
        {
            $('#alaplap_row').hide();
        }
    })

    // ! alaplap vége

    // ? strix a kosárban

    if(localStorage.getItem("strix_db") > 0)
    {
        $('#strix_row').show();
    }

    $("#strix_plus").click(function(){
        i++;
        localStorage.setItem("ossz_db",i);
        strix_mennyiseg++;
        localStorage.setItem("strix_db",strix_mennyiseg);
        $("#strix_cart_amount").text(strix_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('strix: '+ strix_mennyiseg);
    })

    $("#strix_minus").click(function(){
        i--;
        localStorage.setItem("ossz_db",i);
        strix_mennyiseg--;
        localStorage.setItem("strix_db",strix_mennyiseg);
        $("#strix_cart_amount").text(strix_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar)+(rtx_mennyiseg * rtx_ar)+(i9_mennyiseg * i9_ar)
        +(kingston_mennyiseg * kingston_ar)+(dell_mennyiseg * dell_ar)+(alaplap_mennyiseg * alaplap_ar)+(strix_mennyiseg * strix_ar));
        console.log('strix: '+ strix_mennyiseg);
        if($("#strix_cart_amount").text() == 0)
        {
            $('#strix_row').hide();
        }
    })

    // ! strix vége
    
});