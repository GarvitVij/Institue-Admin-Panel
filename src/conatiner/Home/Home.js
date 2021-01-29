import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '../../component/UI/Paper/Paper';
import Chart from '../../component/Home/Charts/Chart'
import Notices from '../../component/Home/Notices/Notices'
import YearlyData from '../../component/Home/YearlyData/YearlyData'


class Home extends Component {
    state = {
        options:{},
        series:[130,123,123],
        label:['filled', 'Not', 'mayve']
    }


    
    render(){



        const Yearlydata = [
            {
                year: "Year 1",
                batch: "2021-2022",
                branches: [
                    {
                        branch: "Computer Engineering",
                        Morning: {
                            timing: "Morning",
                            total: 70,
                            paid: 30,
                        },
                        Evening: {
                            timing: "Evening",
                            total: 70,
                            paid: 30,
                        }
                    },
                    {
                        branch: "Automobile Engineering",
                        Morning: {
                            timing: "Morning",
                            total: 70,
                            paid: 30,
                        },
                        Evening: {
                            timing: "Evening",
                            total: 70,
                            paid: 30,
                        }
                    },
                    {
                        branch: "Electronics and Communication Engineering",
                        Morning: {
                            timing: "Morning",
                            total: 70,
                            paid: 30,
                        },
                        Evening: {
                            timing: "Evening",
                            total: 70,
                            paid: 30,
                        }
                    }
                ]
            },
            {
                year: "Year 2",
                batch: "2022-2023",
                branches: [
                    {
                        branch: "Computer Engineering",
                        Morning: {
                            timing: "Morning",
                            total: 70,
                            paid: 30,
                        },
                        Evening: {
                            timing: "Evening",
                            total: 70,
                            paid: 30,
                        }
                    },
                    {
                        branch: "Automobile Engineering",
                        Morning: {
                            timing: "Morning",
                            total: 70,
                            paid: 30,
                        },
                        Evening: {
                            timing: "Evening",
                            total: 70,
                            paid: 30,
                        }
                    },
                    {
                        branch: "Electronics and Communication Engineering",
                        Morning: {
                            timing: "Morning",
                            total: 70,
                            paid: 30,
                        },
                        Evening: {
                            timing: "Evening",
                            total: 70,
                            paid: 30,
                        }
                    }
                ]
            },
            {
                year: "Year 3",
                batch: "2023-2024",
                branches: [
                    {
                        branch: "Computer Engineering",
                        Morning: {
                            timing: "Morning",
                            total: 70,
                            paid: 30,
                        },
                        Evening: {
                            timing: "Evening",
                            total: 70,
                            paid: 30,
                        }
                    },
                    {
                        branch: "Automobile Engineering",
                        Morning: {
                            timing: "Morning",
                            total: 70,
                            paid: 30,
                        },
                        Evening: {
                            timing: "Evening",
                            total: 70,
                            paid: 30,
                        }
                    },
                    {
                        branch: "Electronics and Communication Engineering",
                        Morning: {
                            timing: "Morning",
                            total: 70,
                            paid: 30,
                        },
                        Evening: {
                            timing: "Evening",
                            total: 70,
                            paid: 30,
                        }
                    }
                ]
            }
        ]


        const paperStyle={
            border:'2px solid black',
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.5)',
            borderRadius: '40px',
            height: '100%',
            padding: 20
        }
        const optionss= {
            series: [
                {
                    name: "CS-M",
                    data: [121312,123412,123123]
                },
                {
                    name: "CS-B",
                    data: [121312,123412,123123]
                },
                {
                    name: "CS-E",
                    data: [121312,123412,123123]
                },
                {
                    name: "EE-M",
                    data: [121312,123412,123123]
                },
                {
                    name: "EE-B",
                    data: [121312,123412,123123]
                },
                {
                    name: "EE-E",
                    data: [121312,123412,123123]
                },{
                    name: "AU-M",
                    data: [121312,123412,123123]
                },{
                    name: "AU-B",
                    data: [121312,123412,123123]
                },{
                    name: "AU-E",
                    data: [121312,123412,123123]
                }
            ],
            options:{
                chart:{
                    type:"bar",
                    height:200,
                    stacked: true
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                stroke:{
                    width: 1
                },
                xaxis: {
                    categories: ["Year 1", "year 2", "year 3"]
                }
            }
            
        } 

        const yearlyDataElement = Yearlydata.map(yearData => (
            <Grid item sm={4}  xs={12} key={yearData.year}>
                <Paper extraStyles={{...paperStyle, ...{display:'flex', justifyContent:'center'}}} elevation={2} bgcolor="white">  
                <YearlyData year={yearData.year} batch={yearData.batch} branches={yearData.branches} />
                </Paper>
            </Grid>
        ))

        return (
        <div>
            {/*Charts Grid*/}
            <Grid justify="space-between" alignItems="center" container spacing={3}>
              <Grid  item sm={12} md={6}>
                <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
                    <Chart options={this.state.options} series={this.state.series} type="pie" width={200} height={200} />
                </Paper>
              </Grid>
              <Grid  item sm={12} md={6}>
              <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
                  <Chart options={this.state.options} series={[123,0,123,123,123,123]} type="donut" width={200} height={200} />
              </Paper>
            </Grid>
            </Grid>
            {/*Bigger Pie*/}
            <Grid justify="space-between" alignItems="center" container spacing={3}>
            <Grid item xs={12} >
            <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
                <Chart options={optionss.options} series={optionss.series} type="bar" height={300}  />
            </Paper>
          </Grid>
          </Grid>

            {/*Yearly Data Grid*/}
            <Grid justify="space-between" alignItems="center" container spacing={3}>
                {yearlyDataElement}
          </Grid>

          
          {/*Notices*/}


        <Grid alignItems="center" container spacing={3}>
            <Grid item xs={12}>
                <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
                    <Notices />
                </Paper>
            </Grid>
        </Grid>
        </div>
        )
    }
}

export default Home