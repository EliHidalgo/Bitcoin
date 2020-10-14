import React, { useCallback, useEffect, useState } from 'react';
import '../styles/BitcoinRate.css';
import axios from 'axios';
import BpiChart from './BpiChart';

const BitcoinRate = () => {

    const [ rate, setRate] = useState();

const gettingRate = useCallback(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        .then(result => {
            //console.log(result.data.bpi.USD.rate);
            let rateResult = result.data.bpi.USD.rate;
            let rateSlice1 = rateResult.slice(0,2);
            let rateSlice2 = rateResult.slice(3)
            let newRate = rateSlice1.concat(rateSlice2);
            //console.log(newRate, 'newRate', typeof newRate)
            let floatRate = parseFloat(newRate);
            //console.log(floatRate, 'floatRate', typeof floatRate);
            let final = Math.round(floatRate);
            setRate(new Intl.NumberFormat('es-CL').format(final))
        })
        .catch( err => {
            console.log(err);
        }); } , []);

     
    useEffect(() => {
        setInterval(
            () => gettingRate(),
            1000
            );        
    }, [gettingRate])

 
     
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
