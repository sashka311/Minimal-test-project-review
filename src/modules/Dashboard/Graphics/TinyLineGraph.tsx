import React, { PureComponent} from "react";
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

const data = [
    {
      name: 'Page A',
      pv: 100,
    },
    {
      name: 'Page B',
      pv: 150,
    },
    {
      name: 'Page C',
      pv: 250,
    },
    {
      name: 'Page D',
      pv: 240,
    },
    {
      name: 'Page E',
      pv: 265,
    },
    {
      name: 'Page F',
      pv: 200,
    },
];

const TinyLineGraph: React.FC = () => {
    return (
        <ResponsiveContainer width="100%" height="50%">
          <LineChart width={100} height={100} data={data}>
            <Line type="monotone" dataKey="pv" stroke="rgba(0, 120, 103, 1)" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
    )
}

export default TinyLineGraph;