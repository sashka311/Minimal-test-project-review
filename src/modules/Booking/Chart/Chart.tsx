import React, { useState } from "react";
import styled from 'styled-components';
import Image from "next/image";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PureComponent } from "react";
import { Barchart } from '../../../types/booking.types';

const ChartBlock = styled.div`
    display: flex;
    padding: 24px;
    width: 712px;
    height: 100%;
    flex-direction: column;
    flex-shrink: 0;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20);
    gap: 24px;
`
const StatBlock = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 4px;
`
const UpRow = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
`
const HeadName = styled.p`
    color: #212B36;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
`
const DropBlock = styled.div<{ height: string }>`
    position: absolute;
    right: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: ${(props) => props.height || '28px'};
    padding: 3px 4px 3px 8px;
    background:rgba(145, 158, 171, 0.08);
    border-radius: 6px;
    transition: height 0.3s ease;
`
const DropRow = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
    cursor: pointer;
`
const DropText = styled.p`
    color: #212B36;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
`
const Img = styled(Image) <{ rotated: string }>`
    transform: ${(props) => (props.rotated || 'none')};
`
const ChartContainer = styled.div`
    display: flex;
    width: 100%;
    height: 288px;
`
const LegendChart = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    width: 100%;
`
const LegendPart = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`
const ColorChart = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 50%;
`
const LegendText = styled.p`
    color: #212B36;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
`
const StatText = styled.p`
    color: #637381;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`
const data = [
    {
        year: 2017,
        sold: 25,
        canceled: 21,
    },
    {
        year: 2018,
        sold: 43,
        canceled: 26,
    },
    {
        year: 2019,
        sold: 19,
        canceled: 29,
    },
    {
        year: 2020,
        sold: 31,
        canceled: 23,
    },
    {
        year: 2021,
        sold: 37,
        canceled: 12,
    },
    {
        year: 2022,
        sold: 37,
        canceled: 8,
    },
    {
        year: 2023,
        sold: 88,
        canceled: 41,
    },
]



const Chart = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive((prevIsActive) => !prevIsActive);
    };

    return (
        <ChartBlock>
            <StatBlock>
                <UpRow>
                    <HeadName>
                        Statistics
                    </HeadName>
                    <DropBlock height={isActive ? '48px' : '28px'} onClick={toggleActive}>
                        <DropRow>
                            <DropText>
                                Year
                            </DropText>
                            <Img src={'/img/Booking/svg/arrow-down.svg'} width={16} height={16} alt="" rotated={isActive ? 'rotate(180deg)' : 'none'} />
                        </DropRow>
                        <DropRow>
                            <DropText>
                                Day
                            </DropText>
                        </DropRow>
                    </DropBlock>
                </UpRow>
                <UpRow>
                    <StatText>
                        (+43% Check In | +12% Check Out) than last year
                    </StatText>
                </UpRow>
            </StatBlock>
            <LegendChart>
                    <LegendPart>
                        <ColorChart style={{background: '#00A76F'}} />
                        <LegendText>
                            Sold
                        </LegendText>
                    </LegendPart>
                    <LegendPart>
                        <ColorChart style={{background: '#FFAC82'}} />
                        <LegendText>
                            Canceled
                        </LegendText>
                    </LegendPart>
                </LegendChart>
            <ChartContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis 
                            dataKey="year"
                            tick={{fill: 'rgba(145, 158, 171, 1)', textAnchor: 'end', dy: 15, fontSize: 12}}
                            width={80} />
                        <YAxis
                            tick={{fill: 'rgba(145, 158, 171, 1)', textAnchor: 'end', dx: -15, fontSize: 12}}
                            stroke={'transparent'} />
                        <Tooltip />
                        <Bar dataKey="sold" fill="rgba(0, 167, 111, 1)" barSize={6} radius={[10, 10, 0, 0]} />
                        <Bar dataKey="canceled" fill="#FFAC82" barSize={6} radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
        </ChartBlock>
    )
}

export default Chart;