import React from 'react';
import styled from 'styled-components';
import { LineKPI } from '../../../types/dashboard.types';

const LegendHolder = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const UpText = styled.p`
    color: #004B50;
    font-size:  14px;
    line-height: 22px;
    font-weight: 600;
`;

const BotText = styled.p`
    color: #004B50;
    font-size:  32px;
    line-height: 48px;
    font-weight: 700;
`;

const RightText = styled.p`
    color: #004B50;
    font-size:  14px;
    line-height: 22px;
    font-weight: 600;
`;

const RBotText = styled.p`
    color: #004B50;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`
interface ForBlock {
    gap?: string;
}
const Block = styled.div<ForBlock>`
display: flex;
flex-direction: column;
gap: ${(props) => props.gap || '4px'};
`
interface Props {
    kpis: LineKPI;
}

const Legend = ({kpis}: Props) => {

    return (
        <LegendHolder>
            <Block gap='8px'>
                <UpText>
                    Total Incomes
                </UpText>
                <BotText>
                    {kpis.totalIncomes}
                </BotText>
            </Block>
            <Block>
                <RightText>
                    {kpis.percent}
                </RightText>
                <RBotText>
                    than last week
                </RBotText>
            </Block>
        </LegendHolder>
    )
}

export default Legend;