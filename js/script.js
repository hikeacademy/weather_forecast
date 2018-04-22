// TODO: add load item while temperature is not loaded. This way, can also
// show how to change element properties.
// TODO: add icon for when we can't find weather value
// TODO: build map from weather code (200, 201, ...) to description. Or to image name. Unclear.
// (https://www.weatherbit.io/api/codes). Or just use the image link
// TODO: is there any way to keep key private?
// TODO: set responses for when the request fails.
// TODO: create response for when it can't find the city

// API Doc: https://www.weatherbit.io/api

// Default object to use when API is not available.
const weatherTranslations = {"Thunderstorm with light rain":"Trovoada com chuva leve","Thunderstorm with rain":"Trovoada com chuva","Thunderstorm with heavy rain":"Trovoada com chuva forte","Thunderstorm with light drizzle":"Trovoada com leve garoa","Thunderstorm with drizzle":"Trovoada com chuvisco","Thunderstorm with heavy drizzle":"Trovoada com chuvisco pesado","Thunderstorm with Hail":"Trovoada com Granizo","Light Drizzle":"Chuviscamento Claro","Drizzle":"Chuvisco","Heavy Drizzle":"Chuvisco Pesado","Light Rain":"Chuva Leve","Moderate Rain":"Chuva Moderada","Heavy Rain":"Chuva Forte","Freezing rain":"Chuva Gelada","Light shower rain":"Chuva de Chuva Leve","Shower rain":"Chuva de Chuva","Heavy shower rain":"Chuva de Chuva Intensa","Light snow":"Neve Clara","Snow":" Neve ","Heavy Snow":" Neve Pesada ","Mix snow/rain":"Mistura neve/chuva ","Sleet":" Granizo ","Heavy sleet":" Fortes granizo ","Snow shower":" Chuva de neve ","Heavy snow shower":"Chuva de neve pesada ","Flurries":" Flurries ","Mist":" Névoa ","Smoke":" Fumaça ","Haze":"Neblina","Sand/dust":"Areia/poeira","Fog":"Nevoeiro","Freezing Fog":"Nevoeiro Congelante","Clear sky":"Céu claro","Few clouds":"Poucas nuvens","Scattered clouds":"Nuvens Dispersas","Broken clouds":"Nuvens Partidas","Overcast clouds":"Nuvens Nubladas","Unknown Precipitation":"Precipitação Desconhecida"};

const example = {  
             "data":[  
                {  
                  "valid_date":"2017-04-01",
                   "ts":1503954000,
                   "datetime":"2017-04-01",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-02",
                   "ts":1503954000,
                   "datetime":"2017-04-02",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-03",
                   "ts":1503954000,
                   "datetime":"2017-04-03",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-04",
                   "ts":1503954000,
                   "datetime":"2017-04-04",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-05",
                   "ts":1503954000,
                   "datetime":"2017-04-05",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                },
                {  
                  "valid_date":"2017-04-06",
                   "ts":1503954000,
                   "datetime":"2017-04-06",
                   "wind_gust_spd":16.7,
                   "wind_spd":6.4,
                   "wind_dir":45,
                   "wind_cdir":"NE",
                   "wind_cdir_full":"northeast",
                   "temp":25,
                   "max_temp":23,
                   "min_temp":26,
                   "app_max_temp":26.64,
                   "app_min_temp":22.64,
                   "pop":0,
                   "precip":0,
                   "snow":0,
                   "snow_depth":0,
                   "slp":1017,
                   "pres":1003.5,
                   "dewpt":17.8,
                   "rh":64.3,
                   "weather":{  
                      "icon":"c04d",
                      "code":"804",
                      "description":"Overcast clouds"
                   },
                   "pod":"d",
                   "clouds_low":25,
                   "clouds_mid":100,
                   "clouds_hi":50,
                   "clouds":100,
                   "vis":10,
                   "max_dhi":178,
                   "uv":2,
                   "ozone":384.5
                }
             ],
             "city_name":"Raleigh",
             "lon":"-78.63861",
             "timezone":"America\/New_York",
             "lat":"35.7721",
             "country_code":"US",
             "state_code":"NC"
          };

$(function() {
    const apiURL = 'https://api.weatherbit.io/v2.0/forecast/daily';
    // const apiKey = '';
    const apiKey = '8498be461f15420b86aa0a722d0d8d95';
    const iconLink = 'https://www.weatherbit.io/static/img/icons/';
    const weekdays = {
        '0': 'Dom',
        '1': 'Seg',
        '2': 'Ter',
        '3': 'Qua',
        '4': 'Qui',
        '5': 'Sex',
        '6': 'Sáb'
    };

    getForecast('Sao Paulo');

    /**
     * Show list when user clicks on input field.
     */
    $('#city').on('focus', function(e) {
        $('#cities').css('display', 'block');
    });

    /**
     * Hide list when user clicks out of list.
     */
    $('#city').on('focusout', function(e) {
        setTimeout(function() {
            $('#cities').css('display', 'none');
        }, 100);
    });

    /**
     * Filter list as user types on the input field.
     */
    $('#city').on('keyup', function(e) {
        // Uppercased value inside input field.
        const filter = e.target.value.toUpperCase();

        // List of city itens. 
        const cities = document.querySelectorAll('#cities li');

        // Loop over the city itens. If the city passes the filter, it's
        // displayed. Otherwise, it isn't.
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

    /**
     * When Search button is clicked, we get the forecast for the city on the
     * input field.
     */
    $('#search').on('click', function(e) {
        // Prevent from submiting form.
        e.preventDefault();
        const newCity = $('#city').val();
        getForecast(newCity);
    });

    /**
     * When user clicks on an item, select the city, set that as in the input
     * value and get the forecast of that city.
     * TODO: there's some bug, probably related to when the click is not on
     * an <li> item.
     */
    $('#cities').on('click', function(e) {
        const choice = e.target.innerText;
        getForecast(choice);
        $('#city').val(choice);
    });

    /**
     * Call API for city whose forecast we want to know.
     * In case the API call succeeds, display results with today's detailed
     * forecast and the following days general forecast. In case it doesn't,
     * display error message.
     */
    function getForecast(city) {
        $('#load-icon').css('display', '');
        $('#forecast').css('display', 'none');
        clearFields();

        // const result = example;

        // $('#load-icon').css('display', 'none');
        // $('#forecast').css('display', '');

        // const nextDays = result.data;
        // const nextDaysShort = nextDays.map(function(d) {
        //     return {
        //         max: d.max_temp,
        //         min: d.min_temp,
        //         date: d.valid_date
        //     };
        // });

        // displayToday(nextDays[0]);
        // displayNextDays(nextDaysShort);
        $.ajax({
            url: apiURL,
            data: { 
                city: city, 
                key: apiKey
            },
            success: function(result) {
                $('#load-icon').css('display', 'none');
                $('#forecast').css('display', '');
                $('#city-name').text(result.city_name);

                console.log(result);

                const nextDays = result.data.slice(1);

                const nextDaysShort = nextDays.map(function(d) {
                    return {
                        max: d.max_temp,
                        min: d.min_temp,
                        date: d.valid_date
                    };
                });

                displayToday(nextDays[0]);
                displayNextDays(nextDaysShort);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(xhr.responseText);
            }
        });
        
    }

    /**
     * Empty next days field.
     * Used when we are getting a new city.
     */
    function clearFields() {
        $('#next-days').empty();
    }

    /**
     * Based on the information of a day, sets today's field.
     * Set weather icon, temperature, wind, weather state and humidity.
     */
    function displayToday(today) {
        const temperature = Math.round(today.temp);
        const weather = today.weather.description;
        const weatherPt = weatherTranslations[weather];
        const weatherIcon = today.weather.icon;
        const windSpeed = today.wind_spd.toFixed(2);
        const humidity = today.rh;

        $('#weather-icon').attr('src', `${iconLink + weatherIcon}.png`);
        $('#current-temperature').text(temperature);
        $('#current-wind').text(windSpeed);
        $('#current-weather').text(weatherPt);
        $('#current-humidity').text(humidity);
    }

    /**
     * Display information for next days.
     * Shows the date, the week day and the min an max temperatures.
     * Iterates over the elements in the array given and creates as many HTML
     * elements as there are elements in the array.
     */
    function displayNextDays(nextDays) {
        // Iterate over all elements in the array.
        for(let i = 0; i < nextDays.length; i++) {
            // Create date object from the date string.
            const date = new Date(nextDays[i].date);
            const min = Math.round(nextDays[i].min);
            const max = Math.round(nextDays[i].max);

            const day = $(`<div class="day-card">
                            <div class="date">${date.getDate()}/${date.getMonth() + 1}</div>
                            <div class="weekday">${weekdays[date.getDay()]}</div>
                            <span class="max">${max}°</span>
                            <span class="min">${min}°</span>
                        </div>`);

            day.appendTo('#next-days');
        }
    } 
});