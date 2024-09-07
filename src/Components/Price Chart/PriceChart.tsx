import { createChart,  } from 'lightweight-charts';
import { useEffect, useRef } from 'react';

interface IPriceChart {
  width: number, 
  height: number,
  changeColor: boolean,
  changeTheSchedule: string,
}

export const PriceChart = (props: IPriceChart) =>{
     const ref = useRef(null);

     const chartOptions = {
      width: props.width, 
      height: props.height,
      layout: {
            background: {color: 'transparent' },
            textColor:  "#0e0d0d",
        },
        grid: {
            vertLines: { color: 'transparent' },
            horzLines: { color: 'transparent' },
        },      
};
     
const chartAdditionalOptions = {
  width: props.width, 
      height: props.height,
      layout: {
            background: {color: 'transparent' },
            
        },
        grid: {
            vertLines: { color: 'transparent' },
            horzLines: { color: 'transparent' },
        }, 
  overlayPriceScales: {
          borderVisible: false,
          borderColor: 'transparent',
          textColor: 'transparent'
        },
        leftPriceScale: {
          ticksVisible: true,
          visible: false,
          textColor: 'transparent'
        },
        rightPriceScale:  {
          ticksVisible: true,
          visible: false,
          textColor: 'transparent'
        },
        timeScale:{
          visible: false,

        },
        handleScroll: {
          horzTouchDrag: false,
          pressedMouseMove: false,
          mouseWheel: false,
          vertTouchDrag: false
        },
        kineticScroll:{
          mouse: false,
          touch: false
        },
        crosshair:{
          horzLine: { color: 'transparent' },
          vertLine: { color: 'transparent' },
        },
        handleScale:{
          mouseWheel: false,
          pinch: false,
        },
}

     
 useEffect(() => {

  if (ref.current) {
     const chart = createChart(ref.current, props.changeTheSchedule === "CompanyPage" ? chartOptions : chartAdditionalOptions);

      const lineSeries = chart.addAreaSeries({lineColor: "#6ec21b", priceLineVisible: false, lineWidth: 2, bottomColor: "#0cf81734"});
      lineSeries.setData([
        { time: '2017-04-11', value: 80.01 },
        { time: '2018-04-12', value: 96.63 },
        { time: '2018-04-13', value: 76.64 },
        { time: '2018-04-14', value: 81.89 },
        { time: '2018-04-15', value: 74.43 },
        { time: '2018-04-16', value: 80.01 },
        { time: '2018-04-17', value: 96.63 },
        { time: '2018-04-18', value: 176.64},
        { time: '2018-04-19', value: 81.89 },
        { time: '2018-04-20', value: 74.43 },
        { time: '2019-04-11', value: 80.01 },
        { time: '2019-04-12', value: 96.63 },
        { time: '2019-04-13', value: 76.64 },
        { time: '2019-04-14', value: 81.89 },
        { time: '2019-04-15', value: 74.43 },
        { time: '2019-04-16', value: 80.01 },
        { time: '2019-04-17', value: 96.63 },
        { time: '2019-04-18', value: 76.64 },
        { time: '2019-04-19', value: 81.89 },
        { time: '2019-04-20', value: 74.43 },
        { time: '2024-04-20', value: 164.43},
      ]);
  }
  }, []);



    return(   
        <div className='company__div__chart' ref={ref}></div>
    )
}