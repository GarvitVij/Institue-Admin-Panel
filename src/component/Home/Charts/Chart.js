import ApexChart from 'react-apexcharts'
import React from 'react';
import Typography from '../../MUI/Typography/Typography'
import PropTypes from 'prop-types';

   const Chart = (props) => {
       const TypographyStyles = {align:'center'}  
    return(
        <React.Fragment>
        <Typography styles={TypographyStyles}>{props.heading}</Typography>
        <ApexChart options={props.options} series={props.series} type={props.type} height={props.height} />
        </React.Fragment>
        )}

Chart.propTypes = {
    heading: PropTypes.string,
    options: PropTypes.object,
    series: PropTypes.array,
    height: PropTypes.number
}

export default Chart