import React, { useEffect, useState } from 'react';
import '../styles/BitcoinRate.css';
import axios from 'axios';
import BpiChart from './BpiChart';

const BitcoinRate = () => {

    const [ rate, setRate] = useState();

const gettingRate = () => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        .then(result => {
            //console.log(result.data.bpi.USD.rate_float);
            let rateResult = result.data.bpi.USD.rate_float;
            let final = Math.round(rateResult);
            setRate(new Intl.NumberFormat('es-CL').format(final))
        })
        .catch( err => {
            console.log(err);
        });
    }

     
    useEffect(() => {
        gettingRate();
        setInterval(
            () => gettingRate(),
            1000
            );        
    })

 
     
    return (
        <div className="container-rate-chart">
            <div className="container-rate">
                <h4>Valor actual</h4>
                <h2><span className="usd-symbol">$</span>{rate} USD</h2>
            </div>
        <BpiChart/>
        </div>
    )
}

export default BitcoinRate;
