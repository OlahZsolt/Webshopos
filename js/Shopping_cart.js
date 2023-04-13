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

    

    // ? Hyperx van-e a kosárban

    var hyperx_mennyiseg = localStorage.getItem("hyperx_exists");
    

    $('#hyperX_cloud_cart_amount').text(hyperx_mennyiseg);

    $("#hyper_plus").click(function(){
        localStorage.setItem("hyperx_exists",hyperx_mennyiseg++ );
        $('#hyperX_cloud_cart_amount').text(localStorage.getItem("hyperx_exists"));
      });

    $("#hyper_minus").click(function(){
    if(hyperx_mennyiseg > 0){
        localStorage.setItem("hyperx_exists",hyperx_mennyiseg-- );
        $('#hyperX_cloud_cart_amount').text(localStorage.getItem("hyperx_exists"));
    }else {
        $('#hyperx_row').hide();
    }
    });
    

    /*if(hyperx_mennyiseg > 0){
        $('#hyperx_row').show();
    }*/

    // ! Hyperx vége






    // ? Razer a kosárban

    var razer_mennyiseg = localStorage.getItem("razer_db");
    var razer_ar= 19899;

    $("#razer_viper_cart_amount").text(razer_mennyiseg);
    $('#ossz_ar').text(razer_mennyiseg * razer_ar)
    console.log('viper: '+ razer_mennyiseg);

    if(localStorage.getItem("razer_db") > 0)
    {
        $('#razer_row').show();
    }

    $("#razer_plus").click(function(){
        razer_mennyiseg++;
        localStorage.setItem("razer_db",razer_mennyiseg);
        $("#razer_viper_cart_amount").text(razer_mennyiseg);
        $('#ossz_ar').text(razer_mennyiseg * razer_ar)
        console.log('viper: '+ razer_mennyiseg);
    })

    $("#razer_minus").click(function(){
        razer_mennyiseg--;
        localStorage.setItem("razer_db",razer_mennyiseg);
        $("#razer_viper_cart_amount").text(razer_mennyiseg);
        $('#ossz_ar').text(razer_mennyiseg * razer_ar)
        console.log('viper: '+ razer_mennyiseg);
        if($("#razer_viper_cart_amount").text() == 0)
        {
            $('#razer_row').hide();
        }
    })


    // ! Razer vége
    
});