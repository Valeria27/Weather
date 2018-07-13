export interface IWeather{

        "id":number,
        "name": string,
        "coord":{  
            "lon":number,
            "lat":number
         },
        "main":{  
           "temp":number,
           "temp_min":number,
           "temp_max":number,
           "pressure":number,
           "sea_level":number,
           "grnd_level":number,
           "humidity":number
        },
        "dt":number,
        "wind":{  
           "speed":number,
           "deg":number
        },
        "rain":{  
           "3h":number
        },
        "clouds":{  
           "all":number
        },
        "weather":[  
           {  
              "id":number,
              "main":string,
              "description":string,
              "icon":string
           }
        ]
  
}