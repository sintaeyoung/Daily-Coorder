import React from 'react';
import ApexCharts from 'react-apexcharts';

type props={
    props :any;
}

class Pie_chart extends React.Component{
  
    render(){
        return (
            <>
                <ApexCharts
                    type="pie"
                    series={[44,55,13,43,22]}
                    options={{
                        chart:{
                            width:100,
                            height:150
                        },
                        legend:{
                            position:"bottom"
                        },
                    }}
                    labels={['Team A', 'Team B', 'Team C', 'Team D', 'Team E']}
                    responsive={[
                        {
                            breakpoint:280
                        }
                    ]}
                    
                />
            </>
        );
    }
}

export default Pie_chart;