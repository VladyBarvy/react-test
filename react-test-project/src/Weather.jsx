// src/Weather.js
import React, { useEffect, useState } from 'react';
import './Weather.css'


const Weather = ( {cityTemp} ) => {
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [cloud, setCloud] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = '1534fae249c04858b82121313241410'; // замените на ваш API-ключ

  
    useEffect(() => {


        const fetchWeather = async () => {
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityTemp}`);
                if (!response.ok) {
                    throw new Error('Ошибка сети');
                }
                const data = await response.json();
                setTemperature(data.current.temp_c);
                setHumidity(data.current.humidity);
                setCloud(data.current.condition.text);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [API_KEY]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка: {error}</p>;

    return (
      















       <div className="bibrovich">
          <div>
            Температура: {temperature} °C
          </div>

          <div>
            Влажность: {humidity} %
          </div>

          <div>
            Облачность: {cloud}
          </div>
       </div>

    

    



 


           
        
    );
};

export default Weather;
