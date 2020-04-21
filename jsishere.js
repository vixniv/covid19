$(document).ready(function(){
    
    let api = "https://api.kawalcorona.com/indonesia/";
    /*let api = "https://api.kawalcorona.com/indonesia";*/

    $.ajax({
        url: api,
        success: function(result) {
            $("#positif").text(result[0].positif);
            $("#sembuh").text(result[0].sembuh);
            $("#meninggal").text(result[0].meninggal);
            


        }
    
    
    
    });
    
        /*$.ajax({url: api, success: function(result){
         $("#terjangkit").html(result[0].positif);
         $("#sembuh").html(result[0].sembuh);
         $("#meninggal").html(result[0].meninggal);
        }});*/
    



});