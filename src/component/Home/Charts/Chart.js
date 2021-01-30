import ApexChart from 'react-apexcharts'
import React from 'react';
import Typography from '../../MUI/Typography/Typography'

   const Chart = (props) => {
       const TypographyStyles = {align:'center'}  
    return(
        <React.Fragment>
        <Typography styles={TypographyStyles}>{props.heading}</Typography>
        <ApexChart options={props.options} series={props.series} type={props.type} widht={props.widht} height={props.height} />
        </React.Fragment>
        )}

export default Chart