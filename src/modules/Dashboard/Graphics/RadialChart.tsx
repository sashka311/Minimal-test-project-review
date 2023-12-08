import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { BigRadialKPIs } from '../../../types/dashboard.types';

const ChartBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 344px;
    height: 452px;
    padding: 24px;
    background: #FFF;
    box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20);
    border-radius: 16px;
`

const ChartName = styled.p`
    color: #212B36;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
`;

const ChartLegend = styled.div`
    display: flex;
    width: 100%;
    padding: 0px 40px 40px 40px;
    flex-direction: column;
    gap: 16px;
`
const LegendBlock = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 22px;
`
const ColorBlock = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`

const Chart = styled.div`
    display: flex;
    width: 100%;
    height: 210px;
    justify-content: center;
    align-items: center;
    position: relative;
`

const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
`;

const data = [
    {
        name: 'Sold out',
        uv: 100,
        fill: 'transparent',
        
    },
    {
        uv: 60,
        fill: 'rgba(0, 167, 111, 1)',
    }
]

const numberstyled = {
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '48px',
    color:'#212B36',
}
const pstyles = {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
    color:'#637381',
}
const countstyles = {
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '22px',
    color:'#212B36',
}

interface ForColor {
    background: string;
}
const Color = styled.div<ForColor>`
height: 20px;
width: 20px;
background: ${(props) => props.background || '#FFF'};
border-radius: 6px;
`

interface Props {
    kpis: BigRadialKPIs;
}

const RadialChart = ({kpis}: Props) => {

    return (
        
        <ChartBlock>
            <ChartName>
                Tours Available
            </ChartName>
            <Chart>
                <ChartInfo>
                    <p style={pstyles}>
                        Tours
                    </p>
                    <p style={numberstyled}>
                        {kpis.soldOut}
                    </p>
                </ChartInfo>
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="90%" outerRadius="90%" barSize={18} data={data} startAngle={90} endAngle={-360}>
                        <RadialBar
                            background
                            cornerRadius={30}
                            dataKey="uv"
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </Chart>
            <ChartLegend>
                <LegendBlock>
                    <ColorBlock>
                        <Color background='rgba(0, 167, 111, 1)' />
                        <p style={pstyles}>
                            Sold out
                        </p>
                    </ColorBlock>
                    <p style={countstyles}>
                        {kpis.soldOut}
                    </p>
                </LegendBlock>
                <LegendBlock>
                    <ColorBlock>
                    <Color background='rgba(145, 158, 171, 0.16)' />
                        <p style={pstyles}>
                            Available
                        </p>
                    </ColorBlock>
                    <p style={countstyles}>
                        {kpis.available}
                    </p>
                </LegendBlock>
            </ChartLegend>
        </ChartBlock>
    )
}

export default RadialChart;