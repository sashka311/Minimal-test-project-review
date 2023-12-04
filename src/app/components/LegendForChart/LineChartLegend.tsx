import React from 'react';
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const LegendHolder = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const Block = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.gap || '4px'};
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

interface Legend {
    gap?: string;
}

const Legend: React.FC<Legend> = ({gap}) => {
    return (
        <LegendHolder className={public_sans.className}>
            <Block gap={gap}>
                <UpText>
                    Total Incomes
                </UpText>
                <BotText>
                    $9,990
                </BotText>
            </Block>
            <Block>
                <RightText>
                    +8.2%
                </RightText>
                <RBotText>
                    than last week
                </RBotText>
            </Block>
        </LegendHolder>
    )
}

export default Legend;