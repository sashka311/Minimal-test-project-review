import React from 'react';
import styled from 'styled-components';

interface InputProps {
    name: string;
    type: string;
    width?: string;
}

const InputStyles = styled.input`
    border: 1px solid rgba(145, 158, 171, 0.2);
    border-radius: 8px;
    display: flex;
    padding: 16px 14px;
    align-items: center;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    background: transparent;
    width: ${(props) => props.width || '100%'};

    &::placeholder {
        color: #919EAB;
    }
`

const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({ name, type, width, ...rest }) => {
    return (
        <InputStyles type={type} width={width} id={name} name={name} {...rest} />
    );
};

export default Input;