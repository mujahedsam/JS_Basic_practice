var btn1=document.getElementById("btn1");

btn1.addEventListener("click",function(){
    var ourrequest=new XMLHttpRequest();

    var cityName="hyderabad";
    var apiKey = '97586f59ccfd7022939ef6e2683d06b7';
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=metric&appid=' + apiKey;

    ourrequest.open('GET',url);
    ourrequest.onload=function(){
        var data=JSON.parse(ourrequest.responseText);
        console.log(data.name);
        console.log(data.weather[0].description);
        console.log(data.main.temp +"C is the temperature")
    }
    ourrequest.send();
})