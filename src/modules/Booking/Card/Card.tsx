import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import { SliderData } from "../../../types/booking.types";

const CardContainer = styled.div`
    display: flex;
    width: 100%;
    left: 0px;
    top: 0px;
    height: auto;
    overflow: hidden;
    flex-wrap: nowrap;
    position: absolute;
    scroll-behavior: smooth;
    gap: 24px;
`
const CardBlock = styled.div`
    display: flex;
    width: 296px;
    height: auto;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
`
const UserBlock = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;

    img {
        width: 48px;
        height: 48px;
    }
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const UserName = styled.p`
    color: #212B36;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
`
const Date = styled.p`
    color: #919EAB;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
`
const RateBlock = styled.div`
    display: flex;
`
const UserMessage = styled.p`
    color: #212B36;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`
const Marks = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
`
const MarkBlock = styled.div`
    display: flex;
    padding: 3px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(145, 158, 171, 0.08);
`
const MarkText = styled.p`
    color: #212B36;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
`

interface Props {
    sliderData: SliderData[];
}

const Card = ({ sliderData }: Props) => {
    return (
        <CardContainer id="slider">
            {sliderData.map((item: any, index: number) => (
                <CardBlock key={index}>
                    <UserBlock>
                        <img src={item.userImg} />
                        <UserInfo>
                            <UserName>
                                {item.name}
                            </UserName>
                            <Date>
                                {item.date}
                            </Date>
                        </UserInfo>
                    </UserBlock>
                    <RateBlock>
                        <Image src={'/img/Booking/svg/star.svg'} width={20} height={20} alt="" />
                        <Image src={'/img/Booking/svg/star.svg'} width={20} height={20} alt="" />
                        <Image src={'/img/Booking/svg/star.svg'} width={20} height={20} alt="" />
                        <Image src={'/img/Booking/svg/star.svg'} width={20} height={20} alt="" />
                        <Image src={'/img/Booking/svg/star.svg'} width={20} height={20} alt="" />
                    </RateBlock>
                    <UserMessage>
                        {item.text}
                    </UserMessage>
                    <Marks>
                        <MarkBlock>
                            <MarkText>
                                Great Service
                            </MarkText>
                        </MarkBlock>
                        <MarkBlock>
                            <MarkText>
                                Recommended
                            </MarkText>
                        </MarkBlock>
                        <MarkBlock>
                            <MarkText>
                                Best Price
                            </MarkText>
                        </MarkBlock>
                    </Marks>
                </CardBlock>
            ))}
        </CardContainer>
    )
}

export default Card;