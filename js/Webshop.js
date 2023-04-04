// * JQUERY
$(document).ready(function(){
    var i=0;

    $("#hyper_shop").click(function(){
        i++;
        console.log(i);
        $("#item_number").text(i);

        if(i > 9){
            $("#item_number").removeClass("item_number");
            $("#item_number").addClass("item_number_two");
        }

      });

      $("#item_number").text(i);
});