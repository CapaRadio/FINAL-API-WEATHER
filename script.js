const APIKEY = '8bd6a74ebc83731a9ff599b8bbc4e397';










// Appel a l'API openWeather avec ville en paramètre de fonction
let apiCall = function(city){

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;


fetch(url).then(res => res.json().then((data)=> {
    console.log(data);
    document.querySelector('#city').innerHTML = data.name
    document.querySelector('#temp').innerHTML = "<i class='fa-solid fa-temperature-low'></i>" + data.main.temp + '°';
    document.querySelector('#humidity').innerHTML = "<i class='fa-solid fa-droplet'></i>" + data.name.humidity + '%';
    document.querySelector('#wind').innerHTML = "<i class='fa-solid fa-wind'></i>" + data.wind.speed + 'km/h';
})
).catch(err => console.log('Erreur : ' + err));

}


// Ecouteur d'évent sur la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
  let ville = document.querySelector('#inputCity').value; 

  apiCall(ville);
});


// Appel par défaut au chargement de la page
apiCall('Paris');
