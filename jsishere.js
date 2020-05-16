$(document).ready(function(){
    
    let api = "https://api.covid19api.com/total/country/indonesia";
    let api2 = "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1/query?where=Country_Region%20%3D%20%27INDONESIA%27&outFields=Country_Region,Last_Update,Confirmed,Recovered,Deaths&outSR=4326&f=json";
    /*let api = "https://api.kawalcorona.com/indonesia";
    let api2 = "https://api.covid19api.com/summary";*/
    let apiprovinsi = "https://indonesia-covid-19-api.now.sh/api/provinsi";
    idFunction();
    function idFunction() {
    $.ajax({
        url: api2,
        success: function(result) {
            let result2 = JSON.parse(result);
            let kasus = result2.features[0].attributes;

            let dateStamp= kasus.Last_Update;
            let currentTime = new Date(dateStamp);
            let month = currentTime.getMonth() + 1;
            let day = currentTime.getDate();
            let year = currentTime.getFullYear();
            let date = day + "-" + month + "-" + year;

            function commas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

            $("#positif").text(commas(kasus.Confirmed));
            $("#sembuh").text(commas(kasus.Recovered));
            $("#meninggal").text(commas(kasus.Deaths));
            $("#tgl").text(date);
        
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
    }
    
    $('.ind').click(idFunction);
    $('.jakarta').click(function(){
        let kelas = $(this).data('provinsi');
        provFunction(kelas);
    });
    $('.jatim').click(function(){
        let kelas = $(this).data('text');
        provFunction(kelas);
    });
    $('.jabar').click(function(){
        let kelas = $(this).data('text');
        provFunction(kelas);
    });
    $('.jateng').click(function(){
        let kelas = $(this).data('text');
        provFunction(kelas);
    });
    
    /*berhasil ini $('.jatim').click(function() {
        // function data goes here 
        console.log($(this).data('text'));
        });
        
        $('.jakarta').click(provFunction);*/

    function provFunction(x) {
        

        $.ajax({
            url: apiprovinsi,
            success: function(result) {
                console.log(result.data.length);
                var kelas = this.class;
                console.log(x);
    
                let tes = result.data.filter(obj => {
                    if (obj.provinsi == "DKI Jakarta") {
                        return obj.provinsi.kasusPosi;
                    };
                
                for(var i = 0; i < result.data.length; i++ ){
                    let provinsi = result.data[i].provinsi;
                    function commas(x) {
                        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    }
                    if (provinsi == x) {
                        console.log(result.data[i].kasusPosi);
                        $("#positif").text(commas(result.data[i].kasusPosi));
                        $("#sembuh").text(commas(result.data[i].kasusSemb));
                        $("#meninggal").text(commas(result.data[i].kasusMeni));
                    }

                };
                    
                });
            
            }
        
        });
    }

    

    /*$.ajax({
        url: api,
        success: function(result) {
            let kasus = result[result.length - 1];
            let tgl = kasus.Date;
            let tglcut = tgl.substr(0, 10);
            let tglrev = tglcut.split("-").reverse().join("-");

            $("#tgl").text(tglrev);
        
        }
    
    });*/
    
        /*$.ajax({url: api, success: function(result){
         $("#terjangkit").html(result[0].positif);
         $("#sembuh").html(result[0].sembuh);
         $("#meninggal").html(result[0].meninggal);
        }});
        
        $("#positif").text(result.Countries[102].TotalConfirmed);
        $("#sembuh").text(result.Countries[102].TotalDeaths);
        $("#meninggal").text(result.Countries[102].TotalRecovered); */
    
        $('.ui.dropdown')
        .dropdown()
        ;


});

/*function provFunction() {
    document.getElementById("positif").innerHTML = "Hello World";
  }*/