import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const ChartBlock = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
`

const Texted = styled.p`
    color:#212B36;
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    text-align: center;
    position: absolute;
`

interface ChooseColor {
    fillColor: string;
    text: string;
}

const RadialSmall: React.FC<ChooseColor> = ({ fillColor, text }) => {

    const data = [
        {
            name: 'Sold out',
            uv: 100,
            fill: 'transparent',
            
        },
        {
            uv: 60,
            fill: fillColor,
        }
    ]

    return (
        <ChartBlock>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="100%" outerRadius="100%" barSize={8} data={data} startAngle={90} endAngle={-360}>
                    <RadialBar
                        background
                        cornerRadius={30}
                        dataKey="uv"
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            <Texted>
                {text}
            </Texted>
        </ChartBlock>
    )
}

export default RadialSmall;