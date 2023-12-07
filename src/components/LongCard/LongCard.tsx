import React from "react";
import styled from 'styled-components';
import RadialSmall from "../../modules/Dashboard/Graphics/RadialSmall";

const Card = styled.div`
    display: flex;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20);
    width: 712px;
    padding: 40px;
    position: relative;
    justify-content: space-between;
`

interface ForBlock {
    children: React.ReactNode;
}
const Block = styled.div<ForBlock>`
    display: flex;
    height: 80px;
    width: 276px;
    justify-content: center;
    gap: 40px;
`

interface ForText {
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
    text: string;
    color: string;
}
const Text: React.FC<ForText> = ({fontSize, fontWeight, lineHeight, text, color}) => {
    const paragraphStyle = {
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        color: color,
    };
    return (
        <p style={paragraphStyle}>
            {text}
        </p>
    )
}

const TextHolder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const Span = styled.span`
    position: absolute;
    height: 100%;
    width: 1px;
    border-right: 1px dashed rgba(145, 158, 171, 0.20);
    top:0;
    left: 50%;
`


const LongCard: React.FC = () => {
    return (
        <Card>
            <Block>
                <RadialSmall fillColor='#5BE49B' text="73,9%" />
                <TextHolder>
                    <Text fontSize="24px" fontWeight="700" lineHeight="36px" color="#212B36" text="9,990" />
                    <Text fontSize="14px" fontWeight="400" lineHeight="22px" color="rgba(99, 115, 129, 1)" text="Sold" />
                </TextHolder>
            </Block>
            <Span />
            <Block>
                <RadialSmall fillColor='#FFD666' text="45,6%" />
                <TextHolder>
                    <Text fontSize="24px" fontWeight="700" lineHeight="36px" color="#212B36" text="10,989" />
                    <Text fontSize="14px" fontWeight="400" lineHeight="22px" color="rgba(99, 115, 129, 1)" text="Pending for payment" />
                </TextHolder>
            </Block>
        </Card>
    )
}

export default LongCard;