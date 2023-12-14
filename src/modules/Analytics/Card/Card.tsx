import React from "react";
import styled from 'styled-components';
import Image from "next/image";
import { Data, SliderData } from "../../../types/analytics.types";

const CardBlock = styled.div`
    display: flex;
    flex-direction: column;
    width: 252px;
    height: 358px;
    border-radius: 16px;
    background: #F4F6F8;
    padding: 8px;
    flex-shrink: 0;
`

const InfoBlock = styled.div`
    display: flex;
    padding: 12px 8px 8px 8px;
    flex-direction: column;
    gap: 16px;
    width: 100%;
`

const UserBlock = styled.div`
    width: 100%;
    display: flex;
    gap: 16px;

    img {
        width: 40px;
        height: 40px;
    }
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const UserName = styled.p`
    color: #212B36;
    font-weight: 600;
    line-height: 22px;
    font-size: 14px;
`

const BookData = styled.p`
    color: #919EAB;
    font-weight: 400;
    line-height: 18px;
    font-size: 12px;
`
const BookInfo = styled.div`
    display: flex;
    gap: 16px;
    width: 100%;
`
const InfoGroup = styled.div`
    display: flex;
    gap: 4px;
    align-items: center;
`
const InfoText = styled.p`
    font-weight: 400;
    line-height: 18px;
    color: #637381;
    font-size: 12px;
`
const PriceBlock = styled.div`
    position: absolute;
    bottom: 8px;
    right: 8px;
    display: flex;
    padding: 2px 6px;
    background: #212B36;
    border-radius: 6px;
`
const PriceText = styled.p`
    color: #FFF;
    font-weight: 700;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
`
interface ForImg {
    imglink: string;
}

const ImgHolder = styled.div<ForImg>`
    display: flex;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    margin-top: 8px;
    background-size: contain;
    overflow: hidden;
    background-image: url(${props => props.imglink});
    position: relative;
`

const CardContainer = styled.div`
    display: flex;
    width: 1080px;
    height: auto;
    overflow: hidden;
    flex-wrap: nowrap;
    gap: 24px;
    position: absolute;
    top: 78px;
    scroll-behavior: smooth;
`

interface Props {
    props: SliderData;
}

const Card = ({ props }: Props) => {
    return (
        <CardContainer id="slider">
            {props.map((item: any, index: number) => (
                <CardBlock key={index}>
                    <InfoBlock>
                        <UserBlock>
                            <img src={item.userImg} alt="User" />
                            <UserInfo>
                                <UserName>
                                    {item.name}
                                </UserName>
                                <BookData>
                                    {item.date}
                                </BookData>
                            </UserInfo>
                        </UserBlock>
                        <BookInfo>
                            <InfoGroup>
                                <Image src={'/img/Slider/SVGs/calendar.svg'} width={16} height={16} alt="Data" />
                                <InfoText>
                                    {item.bookingInfo}
                                </InfoText>
                            </InfoGroup>
                            <InfoGroup>
                                <Image src={'/img/Slider/SVGs/user.svg'} width={16} height={16} alt="Group" />
                                <InfoText>
                                    {item.guestCount}
                                </InfoText>
                            </InfoGroup>
                        </BookInfo>
                    </InfoBlock>
                    <ImgHolder imglink={item.imgLink}>
                        <PriceBlock>
                            <PriceText>
                                ${item.price}
                            </PriceText>
                        </PriceBlock>
                    </ImgHolder>
                </CardBlock>
            ))}
        </CardContainer>
    );
}

export default Card;