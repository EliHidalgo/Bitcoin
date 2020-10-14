import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { LineChart } from 'react-chartkick'
import 'chart.js'
import '../styles/BpiChart.css';

const BpiChart = () => {
    const [ chartValues, setChartValues] = useState({});

    const gettingBpiValues = () => {
        axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-08-09&end=2020-09-09')
            .then(result => {
                console.log(result.data.bpi);
                setChartValues(result.data.bpi);                             
            })
            .catch( err => {
                console.log(err);
            });
        }

        useEffect(() => {
            
            gettingBpiValues();
        }, [])


    return (
        <div className="container-chart">
            <p>Período Agosto - Septiembre 2020</p>
            <LineChart data={chartValues}/>        
        </div>
    )
}

export default BpiChart;
