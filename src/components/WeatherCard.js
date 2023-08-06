import React, { useEffect, useState } from 'react'

// The card which appear below the search bar, it contains all the information about the weather 
export const WeatherCard = ({ tempInfo }) => {
    const [weatherMood, setWeatherMood] = useState("");


    useEffect(() => {
        if (tempInfo.desc) {
            switch (tempInfo.desc) {
                case "Haze":
                    setWeatherMood(" bi-cloud-haze");
                    break;
                case "Clouds":
                    setWeatherMood(" bi-clouds");
                    break;
                case "ThunderStorm":
                    setWeatherMood(" bi-cloud-lighting rain");
                    break;
                case "Drizzle":
                    setWeatherMood("bi-cloud-drizzle");
                    break;
                case "Rain":
                    setWeatherMood("bi-cloud-rain-heavy");
                    break;
                case "Snow":
                    setWeatherMood("bi-cloud-snow");
                    break;

                default:
                    setWeatherMood(" bi-brightness-high ")
                    break;
            }
        }

    }, [tempInfo.desc])





    // Convert the sunset time which the api provides in seconds into readable format 
    let sec = tempInfo.sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    // Convert the sunrise time which the api provides in seconds into readable format 
    let risesec = tempInfo.sunrise;
    let risedate = new Date(risesec * 1000);
    let risetimeStr = `${risedate.getHours()}:${risedate.getMinutes()}`;

    return (
        <div className='d-flex my-5 justify-content-center'>
            <article className='border border-black rounded-4 w-75'>
                {/* section with the weather icon */}
                <div className="border-bottom border-black d-flex justify-content-center">
                    <i className={`bi ${weatherMood}`} style={{ fontSize: "10vw" }}></i>
                </div>

                {/* section with the info about the temp, date & time, description of weather, city name  */}
                <div className="row mx-0">
                    <div className="col-md-8 text-white bg-dark" >
                        <div className="row align-items-center">
                            <div className="col-6">
                                <p style={{ fontSize: "5vw" }}>
                                    {tempInfo.temp + `\u00B0C`}
                                </p>
                            </div>
                            <div className="col-6">
                                <h1>{tempInfo.desc}</h1>
                                <p>{tempInfo.name},{tempInfo.country}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <h1>
                            {new Date().toLocaleDateString()}
                        </h1>
                        <h3>{new Date().toLocaleTimeString()}</h3>
                    </div>
                </div>

                {/* 4 cards section */}
                <div className="row mx-0 py-2 text-center border-top border-black">
                    <div className="col-md-3  border-end border-black">
                        <i className='bi bi-sunset'></i>
                        <p>{risetimeStr}</p>
                        <p>Sunrise</p>
                    </div>

                    <div className="col-md-3 border-end border-black">
                        <i className='bi bi-sunset'></i>
                        <p>{timeStr}</p>
                        <p>Sunset</p>
                    </div>

                    <div className="col-md-3 border-end border-black">
                        <i className='bi bi-moisture'></i>
                        <p>{tempInfo.humidity}%</p>
                        <p>Humidity</p>
                    </div>

                    <div className="col-md-3 ">
                        <i className='bi bi-wind'></i>
                        <p>{tempInfo.wind} km/h</p>
                        <p>Wind</p>
                    </div>
                </div>
            </article>
        </div>
    )
}
