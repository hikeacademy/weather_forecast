// TODO: add load item while temperature is not loaded. This way, can also
// show how to change element properties.
// TODO: add icon for when we can't find weather value
// TODO: 

$(function() {
    const api = 'https://api.openweathermap.org/data/2.5/forecast';
    const appid = 'df8e3ed5b04fe032ff13c07e08200374';
    const iconFolder = 'img/';

    const iconMap = {
        'clear': iconFolder + 'clear.png',
        'rain': iconFolder + 'rain.png',
        'clouds': iconFolder + 'clouds.png',
        'partly-cloudy': iconFolder + 'partly-cloudy.png'
    };

    getForecast('Sao Paulo');

    $('#search').on('click', function(e) {
        e.preventDefault();
        const newCity = $('#city').val();
        getForecast(newCity);
    });

    $('#city').on('focus', function(e) {
        // console.log($('#cities'));
        $('#cities')[0].style.display = 'block';
    });

    $('#city').on('focusout', function(e) {
        setTimeout(function() {
            $('#cities')[0].style.display = 'none';
        }, 100);
    });

    $('#city').on('keyup', function(e) {
        const filter = e.target.value.toUpperCase();
        const cities = document.querySelectorAll('#cities li');

        for(let i = 0; i < cities.length; i++) {
            let li = cities[i]; 
            let a = li.getElementsByTagName('a')[0];
            if(a.innerText.toUpperCase().indexOf(filter) > -1) {
                li.style.display = '';
            } else {
                li.style.display = 'none';
            }
        }
    });

    $('#cities').on('click', function(e) {
        const choice = e.target.innerText;
        getForecast(choice);
        $('#city').val(choice);
    });

    function getForecast(city) {
        $('#load-icon')[0].style.display = '';
        $('#forecast')[0].style.display = 'none';
        $.ajax({
            url: api,
            data: { 
                q: city, 
                APPID: appid,
                units: 'metric'
            },
            success: function(result) {
                $('#load-icon')[0].style.display = 'none';
                $('#forecast')[0].style.display = '';

                console.log(result);
                clearFields();

                const nextDays = result.list.splice(0, 15);

                const nextDaysShort = nextDays.map(function(d) {
                    // return {
                    //     max: kelvinToCelsius(d.main.temp_max),
                    //     min: kelvinToCelsius(d.main.temp_min),
                    //     date: d.dt_txt
                    // };
                    return {
                        max: d.main.temp_max,
                        min: d.main.temp_min,
                        date: d.dt_txt
                    };
                });

                // console.log(nextDaysSho  rt);

                displayToday(nextDays[0]);
                displayOthers(nextDaysShort);
            }
        });
    }

    function clearFields() {
        $('#next-hours').empty();
    }

    function kelvinToCelsius(fahrenheit) {
        return (fahrenheit - 273);
    }

    function displayToday(today) {
        const temp = Math.round(today.main.temp);
        const weather = today.weather[0].main;
        const wind = today.wind.speed;
        const humidity = today.main.humidity;

        console.log('WEATHER: ', weather);

        $('#weather-icon').attr('src', iconMap[weather.toLowerCase()]);
        // $('#current-temperature').text(kelvinToCelsius(temp));
        $('#current-temperature').text(temp);
        $('#current-wind').text(wind);
        $('#current-weather').text(weather);
        $('#current-humidity').text(humidity);
    }

    function displayOthers(nextDays) {
        const nextHours = document.getElementById('next-hours');
        
        for(let i = 0; i < nextDays.length; i++) {
            const date = new Date(nextDays[i].date);
            const day = date.toLocaleDateString("pt-BR").substr(0, 5);
            const min = Math.round(nextDays[i].min);
            const max = Math.round(nextDays[i].max);

            const x = $(`<div class="hour-card">
                            <div class="day">${date.getDate()}/${date.getMonth() + 1}</div>
                            <div class="time">${date.getHours()}h</div>
                            <span class="max">${max}º</span>
                            <span class="min">${min}º</span>
                        </div>`);

            x.appendTo('#next-hours');
        }
    } 
});