import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {1: 0, name: "1"},
    {2: 0, name: "2"},
    {3: 1, name: "3"},
    {4: 1, name: "4"},
    {5: 2, name: "5"},
];

const colors = ['#8884d8', '#82ca9d', '#ffc658'];

const BarCharted: React.FC = () => {
    return (
        <ResponsiveContainer width='100%' height='50%'>
        <BarChart data={data} layout="vertical" barGap={1} barSize={5}>
            <XAxis type="number" hide />
            <YAxis dataKey="name" hide reversed type="category" />
            <Bar dataKey="1" fill="#ff6f31" />
            <Bar dataKey="2" fill="#ff9f02" />
            <Bar dataKey="3" fill="#ffcf02" />
            <Bar dataKey="4" fill="#99cc00" />
            <Bar dataKey="5" fill="#88b131" />
        </BarChart>
    </ResponsiveContainer>
    );
}

export default BarCharted;