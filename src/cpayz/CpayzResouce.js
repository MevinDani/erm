import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './CpayzResource.css'

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

const data1 = {
    labels: ['1 Leave Apln'],
    datasets: [
        {
            label: 'Leave Apln',
            data: [1],
            backgroundColor: [
                '#048FB0',
            ],
            borderColor: [
                '#048FB0',
            ],
            borderWidth: 1,
        },
    ],
}

const data2 = {
    labels: ['218 Active Emp'],
    datasets: [
        {
            label: 'Active Emp',
            data: [218],
            backgroundColor: [
                '#FF8000',
            ],
            borderColor: [
                '#FF8000',
            ],
            borderWidth: 1,
        },
    ],
}

const data3 = {
    labels: ['20 Birthdar Alert'],
    datasets: [
        {
            label: 'Birthdar Alert',
            data: [20],
            backgroundColor: [
                '#008000',
            ],
            borderColor: [
                '#008000',
            ],
            borderWidth: 1,
        },
    ],
}

const data4 = {
    labels: ['2 Request'],
    datasets: [
        {
            label: 'Request',
            data: [2],
            backgroundColor: [
                '#191970',
            ],
            borderColor: [
                '#191970',
            ],
            borderWidth: 1,
        },
    ],
}

const options = {
    cutoutPercentage: 12,
    layout: {
        padding: 30,
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


const CpayzResouce = ({ handleClick }) => {

    return (
        <div className='CPR-Wrapeer'>

            <div className='CPR-Square-Cont3'>
                <div className='CPR-Square-Items3'>
                    <div className='CPR-Square3'>
                        <div>(10)</div>
                        <div>Passport Expiry</div>
                    </div>
                    <div className='CPR-Square3'>
                        <div>(10)</div>
                        <div>Insurance Expiry</div>
                    </div>
                </div>
                <div className='CPR-Square-Items3'>
                    <div id='SQ2' className='CPR-Square3'>
                        <div>(10)</div>
                        <div>Visa Expiry</div>
                    </div>
                    <div id='SQ2' className='CPR-Square3'>
                        <div>(10)</div>
                        <div>D.Licence Expiry</div>
                    </div>
                </div>
                <div className='CPR-Square-Items3'>
                    <div id='SQ3' className='CPR-Square3'>
                        <div>(10)</div>
                        <div>Emirates ID Expiry</div>
                    </div>
                    <div id='SQ3' className='CPR-Square3'>
                        <div>(10)</div>
                        <div>Fleet Reg.Expiry</div>
                    </div>
                </div>
                <div className='CPR-Square-Items3'>
                    <div id='SQ4' className='CPR-Square3'>
                        <div>(10)</div>
                        <div>Personal ID Expiry</div>
                    </div>
                    <div id='SQ4' className='CPR-Square3'>
                        <div>(10)</div>
                        <div>Documents Expiry</div>
                    </div>
                </div>
            </div>

            {/* <div className='CPR-Square-Cont'>
                <div className='CPR-Square-Items'>
                    <div className='CPR-Square'>
                        <div>(10)</div>
                        <div>Passport Expiry</div>
                    </div>
                    <div id='SQ2' className='CPR-Square'>
                        <div>(10)</div>
                        <div>Visa Expiry</div>
                    </div>
                    <div id='SQ3' className='CPR-Square'>
                        <div>(10)</div>
                        <div>Emirates ID Expiry</div>
                    </div>
                    <div id='SQ4' className='CPR-Square'>
                        <div>(10)</div>
                        <div>Personal ID Expiry</div>
                    </div>
                </div>
                <div className='CPR-Square-Items'>
                    <div className='CPR-Square'>
                        <div>(10)</div>
                        <div>Insurance Expiry</div>
                    </div>
                    <div id='SQ2' className='CPR-Square'>
                        <div>(10)</div>
                        <div>D.Licence Expiry</div>
                    </div>
                    <div id='SQ3' className='CPR-Square'>
                        <div>(10)</div>
                        <div>Fleet Reg.Expiry</div>
                    </div>
                    <div id='SQ4' className='CPR-Square'>
                        <div>(10)</div>
                        <div>Documents Expiry</div>
                    </div>
                </div>
            </div> */}

            <div className='CPR-Circle-Cont'>
                <div><Doughnut data={data1} options={options} /></div>
                <div><Doughnut data={data2} options={options} /></div>
                <div><Doughnut data={data3} options={options} /></div>
                <div><Doughnut data={data4} options={options} /></div>
            </div>

            <div className='CPR-Date-Square'>
                <div className='CPR-Date'>{new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true })}</div>
                <div className='CPR-Square-Items2'>
                    <div onClick={handleClick} className='CPR-Square2'>
                        <div>Resource Listing</div>
                    </div>
                    <div className='CPR-Square2'>
                        <div>Personal Info Creation</div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CpayzResouce