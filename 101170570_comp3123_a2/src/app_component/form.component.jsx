import React from 'react';

const Form = props =>{
    return(
        <div className='container'>
            <div>{props.error? error() : null}</div>
            <form onSubmit={props.loadWeather}>
            <div className='row'>
                <div className='col-md-3'>
                    <input type='text' className='form-control' name='city' autoComplete='off' placeholder='City'/>
                </div>
                <div className='col-md-3'>
                <input type='text' className='form-control' name='country' autoComplete='off' placeholder='Country'/>
                </div>
                <div className='col-md-3'>
                <button className='btn-warning'>Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    );
};

function error(){
    return(
        <div className='alert' role='alert'>Please Enter City and Country</div>
    )
}

export default Form;