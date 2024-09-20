//weather api from apiweathermap website
let apiKey = "998d956a25a3f031c9260b346dc6a19b";
let buttonReceive = document.getElementById("receiveTemp");
buttonReceive.addEventListener("click",function(){
    let getPlace = document.getElementById('getCity');
    async function receiveData(){
        let fetchDetails = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getPlace.value}&appid=${apiKey}&units=metric`);
        let converted = await fetchDetails.json();
        let getHum = document.getElementById("humid");
        let getDeg = document.getElementById("degree");
        let getWind = document.getElementById("windS");
        let placeEle = document.getElementById("place");
        let imageWea = document.getElementById("weatherImg");
        let showContent = document.getElementById("main-content")
        if(converted.weather[0].main == 'Snow'){
            imageWea.innerHTML = '<img src="snow.png">';
        }else if(converted.weather[0].main == 'Clear'){
            imageWea.innerHTML = '<img src="clear.png">';
        }else if(converted.weather[0].main == "Clouds"){
            imageWea.innerHTML = '<img src="clouds.png">'
        }else if(converted.weather[0].main == "Drizzle"){
            imageWea.innerHTML = '<img src="drizzle.png">'
        }else if(converted.weather[0].main == "Rain"){
            imageWea.innerHTML = '<img src="rain.png">'
        }else{
            imageWea.innerHTML = '<img src="mist.png">'
        }
        let degreeC = converted.main.temp;
        let place = converted.name;
        let humidi = converted.main.humidity;
        let windS = converted.wind.speed;
        getHum.innerHTML = humidi + '<span> &percnt;</span>';
        getDeg.innerHTML = degreeC + "<span> &deg;</span>";
        getWind.innerHTML = windS + "<span> Km/Hr</span>";
        placeEle.innerHTML = place;
        getPlace.value = ""
        showContent.style.display = "block"
    }
    receiveData()
})