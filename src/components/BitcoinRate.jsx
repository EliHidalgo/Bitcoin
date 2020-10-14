import React, { useCallback, useEffect, useState } from 'react';
import '../styles/BitcoinRate.css';
import axios from 'axios';
import BpiChart from './BpiChart';

const BitcoinRate = () => {

    const [ rate, setRate] = useState();

const gettingRate = useCallback(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json')
        .then(result => {
            console.log(result.data.bpi.USD.rate);
            //console.log(result.data.time.updated);
            let slicing = result.data.bpi.USD.rate;
            let slicing2 = slicing.slice(0,2);
            let slicing3 = slicing.slice(3)
            let newRate = slicing2.concat(slicing3);
            //console.log(newRate, 'newRate', typeof newRate)
            setRate(new Intl.NumberFormat('es-CL').format(newRate))
            //console.log(newRate, 'it worked');
            /*let finalRate = parseFloat(newRate);
            setRate(Math.round(finalRate));*/
        })
        .catch( err => {
            console.log(err);
        }); } , []);
console.log(typeof rate, 'rate')
     
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
