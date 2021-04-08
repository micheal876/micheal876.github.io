const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=c1564f58fdf3273f60c4d74f8dafc30b';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        var current = jsObject.weather[0].main;
        var ftemp = jsObject.main.temp;
        var hum = jsObject.main.humidity;
        document.getElementById('currently').textContent = current;
        document.getElementById('currentTemp').textContent = Math.round(ftemp);
        document.getElementById('humidity').textContent = hum;
    });

    const getURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=c1564f58fdf3273f60c4d74f8dafc30b';

    fetch(getURL)
        .then((response) => response.json())
        .then((jsObject) => {

            const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('12:00:00'));
    
            const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
            let day = 0;
            fivedayforecast.forEach(forecast => {
                let d = new Date(forecast.dt_txt);
                const imagesrc = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
                const desc = forecast.weather[0].description;
    
                document.getElementById(`forecast`).textContent = Math.floor(forecast.main.temp);
                document.getElementById(`dayofweek`).textContent = weekdays[d.getDay()];
                document.getElementById(`img`).setAttribute('src', imagesrc);
                document.getElementById(`img`).setAttribute('alt', desc);
    
                day++;
            });
        });
    
