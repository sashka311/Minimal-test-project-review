import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'One',
        count: 25,
    },
    {
        name: 'Two',
        count: 50,
    },
    {
        name: 'Three',
        count: 75,
    },
];

const colors = ['#8884d8', '#82ca9d', '#ffc658'];

const BarCharted: React.FC = () => {
    return (
        <ResponsiveContainer width='100%' height='50%'>
            <BarChart data={data} layout="vertical" barSize={10} barGap={5}>
                <Bar dataKey="count" fill="#82ca9d" background={{fill: 'rgba(145, 158, 171, 0.16)'}} />
            </BarChart>
    </ResponsiveContainer>
    );
}

export default BarCharted;