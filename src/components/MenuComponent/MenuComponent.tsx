import React from "react";
import styled from "styled-components";

interface Text {
    text: string;
    svgHref: string;
}

const Block = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;
    width: 100%;
    padding: 0px 8px 0px 12px;
    align-items: center;
    gap: 16px;
    height: 44px;
    border-radius: 8px;
    background-color: transparent;
`;

const PStyles = styled.p`
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    color: #637381;
`

const UsableBlock: React.FC<Text> = ({ text, svgHref, ...rest }) => {
    return (
        <Block>
            <img src={svgHref}></img>
            <PStyles>
                {text}
            </PStyles>
        </Block>
    );
}

export default UsableBlock;