$(document).ready(function(){
    
    let api = "https://api.covid19api.com/total/country/indonesia";
    let api2 = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?where=Country_Region%20%3D%20%27INDONESIA%27&outFields=Country_Region,Last_Update,Confirmed,Recovered,Deaths&outSR=4326&f=json";
    /*let api = "https://api.kawalcorona.com/indonesia";
    let api2 = "https://api.covid19api.com/summary";*/

    $.ajax({
        url: api2,
        success: function(result) {
            let result2 = JSON.parse(result);
            let kasus = result2.features[0].attributes

            function commas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            $("#positif").text(commas(kasus.Confirmed));
            $("#sembuh").text(commas(kasus.Recovered));
            $("#meninggal").text(commas(kasus.Deaths));
            $("#tgl").text(tglrev);
        
            /*let kasus = result[result.length - 1];
            let tgl = kasus.Date;
            let tglcut = tgl.substr(0, 10);
            let tglrev = tglcut.split("-").reverse().join("-");

            function commas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            console.log(tglrev);
            $("#positif").text(commas(kasus.Confirmed));
            $("#sembuh").text(commas(kasus.Recovered));
            $("#meninggal").text(commas(kasus.Deaths));
            $("#tgl").text(tglrev);*/
            
        }
    
    });

    $.ajax({
        url: api,
        success: function(result) {
            let kasus = result[result.length - 1];
            let tgl = kasus.Date;
            let tglcut = tgl.substr(0, 10);
            let tglrev = tglcut.split("-").reverse().join("-");

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