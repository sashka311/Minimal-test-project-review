import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const BarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 24px;
`;

const BarName = styled.p`
    color: #212B36;
    font-size: ${(props) => props.fontsize || '18px'};
    font-weight: ${(props) => props.fontweight || '700'};
    line-height: ${(props) => props.lineheight || '28px'};
    text-transform: ${(props) => props.transform || 'none'};
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
const Line = styled.div`
    display: flex;
    width: ${(props) => props.width || '100%'};
    background: ${(props) => props.background || '#FFF'};
    height: 100%;
    border-radius: 50px;
    animation: ${keyframes`
    from {
      width: 0;
    }
    to {
      width: ${(props) => props.width || '100%'};
    }
  `} 1s ease-in-out;
`

const BarCharted: React.FC = () => {
    return (
        <BarContainer className={public_sans.className}>
            <BarBlock>
                <InfoBlock>
                    <BarName fontsize='12px' lineheight='18px' transform='uppercase'>
                        Pending
                    </BarName>
                    <BarName fontsize='16px' lineheight='24px' fontweight='600'>
                        56,000
                    </BarName>
                </InfoBlock>
                <BarLine>
                    <Line width='208px' background='#FFAB00' />
                </BarLine>
            </BarBlock>
            <BarBlock>
                <InfoBlock>
                    <BarName fontsize='12px' lineheight='18px' transform='uppercase'>
                        Canceled
                    </BarName>
                    <BarName fontsize='16px' lineheight='24px' fontweight='600'>
                        50,456
                    </BarName>
                </InfoBlock>
                <BarLine>
                    <Line width='130px' background='rgba(255, 86, 48, 1)' />
                </BarLine>
            </BarBlock>
            <BarBlock>
                <InfoBlock>
                    <BarName fontsize='12px' lineheight='18px' transform='uppercase'>
                        Sold
                    </BarName>
                    <BarName fontsize='16px' lineheight='24px' fontweight='600'>
                        155,670
                    </BarName>
                </InfoBlock>
                <BarLine>
                    <Line width='130px' background='rgba(34, 197, 94, 1)' />
                </BarLine>
            </BarBlock>
        </BarContainer>
    );
}

export default BarCharted;