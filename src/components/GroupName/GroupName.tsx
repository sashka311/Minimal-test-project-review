import React from "react";
import styled from 'styled-components';

const Block = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 16px 0px 8px 12px;
`;

const PText = styled.p`
    font-size: 11px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    color: #919EAB;
    text-transform: uppercase;
`;

interface Text {
    text: string;
}

const GroupName: React.FC<Text> = ({ text }) => {
    return (
        <Block>
            <PText>
                {text}
            </PText>
        </Block>
    );
}

export default GroupName;