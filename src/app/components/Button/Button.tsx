import React from 'react';
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

interface ButtonProps {
    text: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    width?: string;
    paddingg?: string;
    fontSize?: string;
    lineheight?: string;
}

const Text = styled.p<{ lineheight?: string, fontSize?: string}>`
    color: #FFF;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    line-height: ${(props) => props.lineheight || '26px'};
    font-size: ${(props) => props.fontSize || '15px'};
`;

const Btn = styled.button<{ width?: string, paddingg?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(33, 43, 54, 1);
    border-radius: 8px;
    padding: ${(props) => props.paddingg || '11px 16px'};
    border: none;
    cursor: pointer;
    width: ${(props) => props.width || '100%'};
`;

const Button: React.FC<ButtonProps> = ({ text, type, width, paddingg, lineheight, fontSize, ...rest }) => {
    return (
        <Btn type={type} width={width} paddingg={paddingg}>
            <Text className={public_sans.className} fontSize={fontSize} lineheight={lineheight}>
                {text}
            </Text>
        </Btn>
    )
}

export default Button;