import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Doughnut.css'
import { FaSortDown } from "react-icons/fa";


ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ChartDataLabels);

const data = {
    labels: ['Clutch', 'Battery', 'Filter', 'Coil', 'Brake Pad'],
    datasets: [
        {
            label: 'No of Purchase',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    // cutoutPercentage: 12,
    layout: {
        padding: 45,
    },
    plugins: {
        datalabels: {
            color: 'black',
            anchor: 'end',
            align: 'end',
            offset: 10,
            font: {
                size: 16, // Set the font size as needed
            },
            formatter: (value, context) => {
                return context.chart.data.labels[context.dataIndex];
            },
        },
        legend: {
            display: false,
        },
    },
    maintainAspectRatio: false, // Add this line to disable aspect ratio scaling
    responsive: true,
};



const DoughnutChart = () => {
    const [productisOpen, setproductisOpen] = useState(false);
    const [monthisOpen, setmonthisOpen] = useState(false);
    const chartRef = useRef(null);

    const toggleProduct = () => {
        setproductisOpen(!productisOpen);
    }
    const toggleMonth = () => {
        setmonthisOpen(!monthisOpen);
    }

    return (
        <div className='DoughnutWrapper'>
            <div className='DoughnutCont'>
                <div className='DFMAINDROP'>
                    <div className='DFProdCont'>
                        <div className='DFDropItems'>
                            <div className='DFDText'>Top 5 products</div>
                            <div className='DFDText'><FaSortDown onClick={toggleProduct} /></div>
                        </div>
                        {productisOpen && (
                            <div className='DFDropDownCont'>
                                <div id='LeftDrops' className='DFDropDownText'>Clutch</div>
                                <div id='LeftDrops' className='DFDropDownText'>Battery</div>
                                <div id='LeftDrops' className='DFDropDownText'>Filter</div>
                            </div>
                        )}
                    </div>
                    <div className='DFMonthCont'>
                        <div className='DFDropItems'>
                            <div className='DFDText'>current month</div>
                            <div className='DFDText'><FaSortDown onClick={toggleMonth} /></div>
                        </div>
                        {monthisOpen && (
                            <div id='RightDrops' className='DFDropDownCont'>
                                <div className='DFDropDownText'>Last 10 days</div>
                                <div className='DFDropDownText'>Last 5 days</div>
                                <div className='DFDropDownText'>Last 2 days</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='DoughCont'>
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </div>
    )
}

export default DoughnutChart