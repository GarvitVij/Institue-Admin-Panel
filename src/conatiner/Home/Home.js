import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '../../component/UI/Paper/Paper';
import Chart from '../../component/Home/Charts/Chart'
import Notices from '../../component/Home/Notices/Notices'
import YearlyData from '../../component/Home/YearlyData/YearlyData'

class Home extends Component {
    state = {
        chartOne: {
            series:[573,569,238],
            options:{
                labels: ['Paid the fee', 'Updated Subjects', 'Not Logged in'],
                legend:{
                    position:"right"
                },
                colors: ["#1976d2","#388e3c", "#f57c00"]
                }
        },
        chartTwo:{
            series:[65464,53156,51656,21335,61656,23355],
            options:{
                labels: ['CS (M)', 'CS(E)','E & C(M)','E & C(E)', 'AM (M)','AM(E)'],
                legend:{
                    position:"right"
                },
                colors: ["#1976d2","#1e88e5","#388e3c", "#43a047" ,"#f57c00","#fb8c00"]
                } 
        },
        chartThree:{
            series: [
                {name: "Computer Engineering-M",data: [121312,123412,123123]},
                {name: "Computer Engineering-E",data: [121312,123412,123123]},
                {name: "Computer Engineering-B",data: [121312,123412,123123]},
                {name: "Electronics and Communication Engineering-M",data: [121312,123412,123123]},
                {name: "Electronics and Communication Engineering-E",data: [121312,123412,123123]},
                {name: "Electronics and Communication Engineering-B",data: [121312,123412,123123]},
                {name: "Automobile engineering-M",data: [121312,123412,123123]},
                {name: "Automobile engineering-E",data: [121312,123412,123123]},
                {name: "Automobile engineering-B",data: [121312,123412,123123]}
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
                },
                legend:{
                    position:"top"
                },
                colors: ["#1976d2","#1e88e5","#2196f3","#388e3c", "#43a047","#4caf50" ,"#f57c00","#fb8c00","#ff9800"]
            }
        },
        Yearlydata: [
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

    }

    
    render(){
        const paperStyle={
            border:'2px solid black',
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.5)',
            borderRadius: '40px',
            height: '100%',
            padding: 20
        }

        const yearlyDataElement = this.state.Yearlydata.map(yearData => (
            <Grid item md={4} xs={12}  key={yearData.year}>
                <Paper extraStyles={{...paperStyle, ...{display:'flex', justifyContent:'center'}}} elevation={2} bgcolor="white">  
                <YearlyData year={yearData.year} batch={yearData.batch} branches={yearData.branches} />
                </Paper>
            </Grid>
        ))

        return (
        <div>
            <Grid justify="space-between" alignItems="center" container spacing={3}>
              <Grid  item xs={12} lg={6}>
                <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
                    <Chart options={this.state.chartOne.options} heading="Student who" series={this.state.chartOne.series} type="pie" width={200} height={200} />
                </Paper>
              </Grid>
              <Grid  item xs={12} lg={6}>
              <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
                  <Chart options={this.state.chartTwo.options} heading="Fees paid by each branch" series={this.state.chartTwo.series} type="donut" width={200} height={200} />
              </Paper>
            </Grid>
           
            </Grid>
            <Grid justify="space-between" alignItems="center" container spacing={3}>
            <Grid item xs={12} >
            <Paper extraStyles={paperStyle} elevation={2} bgcolor="white">
                <Chart options={this.state.chartThree.options} heading="Detailed Report" series={this.state.chartThree.series} type="bar" height={300}  />
            </Paper>
          </Grid>
          </Grid>
            <Grid justify="space-between" alignItems="center" container spacing={3}>
                {yearlyDataElement}
          </Grid>
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