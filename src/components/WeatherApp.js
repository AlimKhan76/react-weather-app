import React, { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { WeatherCard } from './WeatherCard';

export const WeatherApp = () => {
    const [searchInput, setSearchInput] = useState("Mumbai");
    const [tempInfo, setTempInfo] = useState({})

    const searchFunction = (event) => {
        setSearchInput(event.target.value);
    }

    const getWeatherInfo = async () => {
        try {
            let apiKey = "fec700d1f2b76cfad595b26b33c9219e"
            let url = ` https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${apiKey}`

            let res = await fetch(url);
            let data = await res.json();

            const { main: desc } = data.weather[0];
            const { temp, humidity } = data.main;
            const { country, sunset, sunrise } = data.sys;
            const { name } = data;
            const { speed: wind } = data.wind;


            let weatherInfo = {
                desc, temp, sunset, sunrise, humidity, country, name, wind
            }
            setTempInfo(weatherInfo);
        }
        catch (err) {
            return alert("No city of name " +searchInput+ " found");
            
        }
    }

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <div className='container '>
            <SearchBar searchInput={searchInput} getWeatherInfo={getWeatherInfo} searchFunction={searchFunction} />
            <WeatherCard tempInfo={tempInfo} />
        </div>
    );
}

