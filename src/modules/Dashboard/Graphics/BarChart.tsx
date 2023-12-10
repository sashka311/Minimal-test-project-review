import { ListItem } from '@mui/material';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { string } from 'yup';
import { BarKPIs } from '../../../types/dashboard.types';

const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 24px;
`;

const BarBlock = styled.div`
    display: flex;
    gap: 8px;
    width: 100%;
    flex-direction: column;
`

const InfoBlock = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`

const BarLine = styled.div`
    display: flex;
    width: 100%;
    height: 8px;
    border-radius: 50px;
    background: rgba(145, 158, 171, 0.16);
`
interface ForBarName {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
    text: any;
}

const BarName: React.FC<ForBarName> = ({ fontSize, fontWeight, lineHeight, textTransform, text }) => {
    const paragraphStyle = {
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        textTransform: textTransform,
        color: '#212B36',
    };

    return (
        <p style={paragraphStyle}>
            {text}
        </p>
    );
};

interface ForLine {
    width: any;
    background: string;
}

const increaseWidth = keyframes`
from {
    width: 0;
}
to {
    width: ${(props: ForLine) => props.width || '100%'};
}
`;

const Line: React.FC<ForLine> = ({ width, background }) => {
    const LineElement = styled.div<ForLine>`
        width: ${(props) => props.width || '100%'};
        background: ${(props) => props.background || '#FFF'};
        height: 100%;
        border-radius: 50px;
        animation: ${increaseWidth} 1s ease-in-out;
    `;

    return (
        <LineElement width={width} background={background} />
    )
}

interface Props {
    kpis: BarKPIs;
}

const BarCharted = ({ kpis }: Props) => {

    return (
        <BarContainer>
            {kpis.map((item: any, index: number) => (
                <BarBlock key={index}>
                    <InfoBlock>
                        <BarName
                            fontSize='12px'
                            lineHeight='18px'
                            textTransform='uppercase'
                            text={item.label}
                            fontWeight='700'
                        />
                        <BarName
                            fontSize='16px'
                            lineHeight='24px'
                            fontWeight='600'
                            text={item.value}
                        />
                    </InfoBlock>
                    <BarLine>
                        <Line width={item.percentage + '%'} background={item.background} />
                    </BarLine>
                </BarBlock>
            ))}
        </BarContainer>
    );
}

export default BarCharted;