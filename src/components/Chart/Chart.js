import React from "react";
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    // let maxValue = 0
    // const getMaxValue = () => {
    //     props.dataPoints.map(item => {
    //         if (item.value > maxValue)
    //             maxValue = item.value
    //     })
    //     return maxValue
    // }
    // iki türlü maksimum bulma
    const allPoints = props.dataPoints.map(item => item.value);
    const totalMaxValue = Math.max(...allPoints)

    return (
        <div className='chart'>
            {props.dataPoints.map(points =>
                <ChartBar
                    key={points.label}
                    value={points}
                    maxValue={totalMaxValue}/>)}
        </div>
    )

};

export default Chart