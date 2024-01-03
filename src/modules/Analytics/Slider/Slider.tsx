import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import Card from "../Card/Card";
import { KPIs, Data } from "../../../types/analytics.types";

const SliderBlock = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 24px;
    position: relative;
`

const SliderPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const TextBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const SliderName = styled.p`
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    color: #212B36;
`

const SliderCount = styled.p`
    color: #637381;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`
const SliderNav = styled.div`
    display: flex;
`
const NavBlock = styled.div`
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
`
const Img = styled(Image)`
 cursor: pointer;
`
interface Page {
    children: React.ReactNode;
    cardsCount: any;
}

const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (slider) {
        slider.scrollLeft = slider.scrollLeft - 276;
    }
};

const slideRight = () => {
    let slider = document.getElementById("slider");
    if (slider) {
        slider.scrollLeft = slider.scrollLeft + 276;
    }
};

const Slider = ({ children, cardsCount }: Page) => {
    return (
        <SliderBlock>
            <SliderPanel>
                <TextBar>
                    <SliderName>
                        Newest Booking
                    </SliderName>
                    <SliderCount>
                        {cardsCount}
                    </SliderCount>
                </TextBar>
                <SliderNav>
                    <NavBlock>
                        <Img src="/img/Slider/Navigation/arrow-left.svg" alt="left" width={20} height={20} onClick={slideLeft} />
                    </NavBlock>
                    <NavBlock>
                        <Img src="/img/Slider/Navigation/arrow-right.svg" alt="right" width={20} height={20} onClick={slideRight} />
                    </NavBlock>
                </SliderNav>
            </SliderPanel>
            {children}
        </SliderBlock>
    )
}

export default Slider;