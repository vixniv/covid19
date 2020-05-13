$(document).ready(function(){
    
    let api = "https://api.covid19api.com/total/country/indonesia";
    let api2 = "https://api.covid19api.com/summary";
    /*let api = "https://api.kawalcorona.com/indonesia";*/

    $.ajax({
        url: api,
        success: function(result) {
            let kasus = result[result.length - 1];
            let tgl = kasus.Date;
            let tglcut = tgl.substr(0, 10);
            let tglrev = tglcut.split("-").reverse().join("-");

            function commas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            console.log(tglrev);
            $("#positif").text(commas(kasus.Confirmed));
            $("#sembuh").text(commas(kasus.Deaths));
            $("#meninggal").text(commas(kasus.Recovered));
            $("#tgl").text(tglrev);
            


        }
    
    
    
    });
    
        /*$.ajax({url: api, success: function(result){
         $("#terjangkit").html(result[0].positif);
         $("#sembuh").html(result[0].sembuh);
         $("#meninggal").html(result[0].meninggal);
        }});
        
        $("#positif").text(result.Countries[102].TotalConfirmed);
        $("#sembuh").text(result.Countries[102].TotalDeaths);
        $("#meninggal").text(result.Countries[102].TotalRecovered); */
    



});