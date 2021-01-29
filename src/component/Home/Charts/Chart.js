import ApexChart from 'react-apexcharts'
import React from 'react';

   const Chart = (props) => {  
    return(
        <ApexChart options={props.options} series={props.series} type={props.type} widht={props.widht} height={props.height} />
        )}

export default Chart