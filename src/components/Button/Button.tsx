import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    text: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    width?: string;
    padding?: string;
}


const TextStyles = styled.p`
    color: #FFF;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    font-size: 14px;
`;

const Btn = styled.button<{ width?: string, padding?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(33, 43, 54, 1);
    border-radius: 8px;
    padding: ${(props) => props.padding || '11px 16px'};
    border: none;
    cursor: pointer;
    width: ${(props) => props.width || '100%'};
`;

const Button: React.FC<ButtonProps> = ({ text, type, width, padding, ...rest }) => {
    return (
        <Btn type={type} width={width} padding={padding}>
            <TextStyles>
                {text}
            </TextStyles>
        </Btn>
    )
}

export default Button;