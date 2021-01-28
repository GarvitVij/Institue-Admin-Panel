import Chart from 'react-apexcharts'
import React from 'react';

   const PieChart = (props) => {  
    return(
        <Chart options={props.options} series={props.series} type={props.type} widht={props.widht} height={props.height} />
        )}

export default PieChart