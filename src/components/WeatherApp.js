import React, { useEffect, useState } from 'react';
import { SearchBar } from './SearchBar';
import { WeatherCard } from './WeatherCard';

export const WeatherApp = () => {
    // State for search field 
    const [searchInput, setSearchInput] = useState("Mumbai");
    // State to store weather info from the api 
    const [tempInfo, setTempInfo] = useState({})

    // Function for the input field 
    const searchFunction = (event) => {
        setSearchInput(event.target.value);
    }

    // A Async function to get the weather info from the  external api from this website ("https://openweathermap.org/current")
    const getWeatherInfo = async () => {
        try {
            // My api key 
            let apiKey = "fec700d1f2b76cfad595b26b33c9219e"
            // The api endpoint
            let url = ` https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${apiKey}`

            let res = await fetch(url);
            let data = await res.json();

            // Destructing the data received from the api 
            const { main: desc } = data.weather[0];
            const { temp, humidity } = data.main;
            const { country, sunset, sunrise } = data.sys;
            const { name } = data;
            const { speed: wind } = data.wind;


            let weatherInfo = {
                desc, temp, sunset, sunrise, humidity, country, name, wind
            }
            // Setting the data received from the api to the state 
            setTempInfo(weatherInfo);
        }
        // If any error this will catch it 
        catch (err) {
            return alert("No city of name " +searchInput+ " found");
            
        }
    }

    // Useeffect will run once the page is loaded to get information of weather of mumbai otherwise without useeffect the page will not load anything until an input is given 
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

