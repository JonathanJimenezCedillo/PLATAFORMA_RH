$(document).ready(function(){
    $("#search").keyup(function(e){
       let search = $("#search").val();

        $.ajax({
        url: '../../Modelo/respuestaCargos.php',
        type: 'POST',
        data: {search: search},
        success:function(respuesta){
            $("#main").html(respuesta);
            window.onbeforeunload;
        }
    });

    });
});
