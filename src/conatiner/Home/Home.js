import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '../../component/UI/Paper/Paper';
import PieChart from '../../component/Home/PieChart/PieChart'
import Notices from '../../component/Home/Notices/Notices'
import YearlyData from '../../component/Home/YearlyData/YearlyData'

class Home extends Component {
    state = {
        options:{},
        series:[130,123,123],
        label:['filled', 'Not', 'mayve']
    }

    
    render(){

        const paperStyle={
            border:'2px solid black',
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.5)',
            borderRadius: '40px',
            height: '100%',
            padding: 20
        }
    
        return (
        <div>
            <Grid justify="space-between" alignItems="center" container spacing={4}>
              <Grid item xs={5}>
                <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
                    <PieChart options={this.state.options} series={this.state.series} type="pie" width={200} height={200} />
                </Paper>
              </Grid>
              <Grid item xs={7} >
                <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
                    <Notices />
                </Paper>
              </Grid>
            </Grid>


            <Grid justify="space-between" alignItems="center" container spacing={3}>
            <Grid item xs={4}>
              <Paper extraStyles={{...paperStyle, ...{display:'flex', justifyContent:'center'}}} elevation={2} bgcolor="white">
                  <YearlyData year="Year 1" batch="2021-2022" />
              </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper extraStyles={{...paperStyle, ...{display:'flex', justifyContent:'center'}}} elevation={2} bgcolor="white">
                    <YearlyData year="Year 2" batch="2021-2022"  />
                </Paper>
            </Grid>
            <Grid item xs={4}>
            <Paper extraStyles={{...paperStyle, ...{display:'flex', justifyContent:'center'}}} elevation={2} bgcolor="white">
                <YearlyData year="Year 3" batch="2021-2022" />
            </Paper>
             </Grid>
          </Grid>
        </div>
        )
    }
}

export default Home