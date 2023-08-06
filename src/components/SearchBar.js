import React from "react";

export const SearchBar = ({searchInput, searchFunction,getWeatherInfo}) => {
    return (
        <div className="container">
            <div className="my-3 input-group ">
                <input type="search" className="form-control" placeholder='Search Your City' value={searchInput} onChange={searchFunction} />
                <button className='btn btn-primary' onClick={getWeatherInfo}>Search</button>
            </div>



        </div>

    );
}