// * JQUERY
$(function () {

    $('#hyperx_row').hide();
    $('#razer_row').hide();
    $('#blitzwolf_row').hide();
    $('#rtx_row').hide();
    $('#i9_row').hide();
    $('#kingstone_row').hide();
    $('#dell_row').hide();
    $('#maximus_row').hide();
    $('#strix_row').hide();

    var hyperx_mennyiseg = localStorage.getItem("hyper_db");
    var hyperx_ar= 36899;
    var razer_mennyiseg = localStorage.getItem("razer_db");
    var razer_ar= 19899;
    var blitzwolf_mennyiseg = localStorage.getItem("blitzwolf_db");
    var blitzwolf_ar= 22499;

    $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar));

    $("#hyperX_cloud_cart_amount").text(hyperx_mennyiseg);
    console.log('hyperx: '+ hyperx_mennyiseg);
    $("#razer_viper_cart_amount").text(razer_mennyiseg);
    console.log('viper: '+ razer_mennyiseg);
    $("#blitzwolf_cart_amount").text(blitzwolf_mennyiseg);
    console.log('viper: '+ razer_mennyiseg);

    // ? Hyperx van-e a kosárban

    if(localStorage.getItem("hyper_db") > 0)
    {
        $('#hyperx_row').show();
    }

    $("#hyper_plus").click(function(){
        hyperx_mennyiseg++;
        localStorage.setItem("hyper_db",hyperx_mennyiseg);
        $("#hyperX_cloud_cart_amount").text(hyperx_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar))
        console.log('hyper: '+ hyperx_mennyiseg);
    })

    $("#hyper_minus").click(function(){
        hyperx_mennyiseg--;
        localStorage.setItem("hyper_db",hyperx_mennyiseg);
        $("#hyperX_cloud_cart_amount").text(hyperx_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar))
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
        razer_mennyiseg++;
        localStorage.setItem("razer_db",razer_mennyiseg);
        $("#razer_viper_cart_amount").text(razer_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar))
        console.log('viper: '+ razer_mennyiseg);
    })

    $("#razer_minus").click(function(){
        razer_mennyiseg--;
        localStorage.setItem("razer_db",razer_mennyiseg);
        $("#razer_viper_cart_amount").text(razer_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar))
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
        blitzwolf_mennyiseg++;
        localStorage.setItem("blitzwolf_db",blitzwolf_mennyiseg);
        $("#blitzwolf_cart_amount").text(blitzwolf_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar))
        console.log('blitzwolf: '+ blitzwolf_mennyiseg);
    })

    $("#blitzwolf_minus").click(function(){
        blitzwolf_mennyiseg--;
        localStorage.setItem("blitzwolf_db",blitzwolf_mennyiseg);
        $("#blitzwolf_cart_amount").text(blitzwolf_mennyiseg);
        $('#ossz_ar').text((razer_mennyiseg * razer_ar)+(hyperx_mennyiseg * hyperx_ar)+(blitzwolf_mennyiseg * blitzwolf_ar))
        console.log('blitzwolf: '+ blitzwolf_mennyiseg);
        if($("#blitzwolf_cart_amount").text() == 0)
        {
            $('#blitzwolf_row').hide();
        }
    })

    // ! Blitzwolf vége
    
});