import React from 'react';
import App from '../App';

const Weather = (props) =>{
    return(
        <div className='container'>
            <div className='cards'>
                <h1>{props.city}</h1>
                <h5 className='py-4'>
                <i className={`wi ${props.weatherIcon} display-1`}></i>
                </h5>
                {props.temp_celsius ? (<h1>{props.temp_celsius}&deg;</h1>) : null}
                {minMaxTemp(props.temp_min, props.temp_max)}

                <h4 className='py-3'>{props.description}</h4>

            </div>
        </div>
    );
};


function minMaxTemp(min, max){
    if(min && max){
        return(
            <h3>
                <span className='px-4'>{min}&deg;</span>
                <span className='px-4'>{max}&deg;</span>
            </h3>
        )
    }
}

export default Weather;