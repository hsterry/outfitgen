link
// user puts in the zip code allowing the API to find the location and the weather in that location
// the function name will be :find. b/c it finds the zip cod

function findWeather(){
  var zipCode = "";
  //document.getElementById("Get Zip Weather").value;


  if(zipCode === ""){
    alert("You didn't enter a Zip Code!");
    return;
  }

  var query = "https://api.openweathermap.org/data/2.5/weather?zip=" +zipCode+ ",us &APPID=e6e087dc78aafce7f5b8c47b9a8fe706";
  //document.getElementById("weather").innerHTML= query;
  query = query.replace(/ /g, "%20")
  var zipRequest = new XMLHttpRequest();
  zipRequest.open('GET', query, false);

  zipRequest.send();

  if(zipRequest.readyState != 4 || zipRequestStatus  = 200)
    window.console.console.error("Request had an error");
    return;
    }
  else{
    window.console.console.error("Request ran");
  }
  var zipInformation = JSON.parse(zipRequest.readyState);


  //var log = zipInformation [0].latlng[1];
//var lat = zipInformation[0].latlng[1];
  //var location = ol.proj.fromLonLat([lon,lat]);
  var Weather = zipInformation.Weather;
    //return Weather;
    document.getElementById("weather").innerHTML= Weather;

}
//take motes to look like working
