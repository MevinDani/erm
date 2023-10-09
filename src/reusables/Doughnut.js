import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Doughnut.css'


ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ChartDataLabels);

const data = {
    labels: ['Clutch', 'Battery', 'Filter', 'Coil', 'Brake Pad'],
    datasets: [
        {
            label: 'No of Purchase',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
        padding: 35,
    },
    plugins: {
        datalabels: {
            color: 'black',
            anchor: 'end',
            align: 'end',
            offset: 10,
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
                            <div className='DFDText'><i class="fa-solid fa-sort-down" onClick={toggleProduct}></i></div>
                        </div>
                        {productisOpen && (
                            <div className='DFDropDownCont'>
                                <div className='DFDropDownText'>Last 10 days</div>
                                <div className='DFDropDownText'>Last 5 days</div>
                                <div className='DFDropDownText'>Last 2 days</div>
                            </div>
                        )}
                    </div>
                    <div className='DFMonthCont'>
                        <div className='DFDropItems'>
                            <div className='DFDText'>current month</div>
                            <div className='DFDText'><i class="fa-solid fa-sort-down" onClick={toggleMonth}></i></div>
                        </div>
                        {monthisOpen && (
                            <div className='DFDropDownCont'>
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