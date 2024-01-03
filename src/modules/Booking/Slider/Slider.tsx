import React, { useState } from "react";
import styled from 'styled-components';
import Image from "next/image";

const SliderContainer = styled.div`
    display: flex;
    padding: 24px;
    gap: 24px;
    flex-direction: column;
    width: 344px;
    height: 100%;
    border-radius: 16px;
    background: #FFF;
    box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20);
    position: relative;
`
const NavBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`
const NavRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`
const NavName = styled.p`
    color: #212B36;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
`
const ReviewsCount = styled.p`
    color:#637381;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`
const NavButtons = styled.div`
    display: flex;
`
const ArrowBlock = styled.div`
    display: flex;
    padding: 8px;
    cursor: pointer;
`
const ButtonsBot = styled.div`
    display: flex;
    margin-top: 24px;
    width: 100%;
    justify-content: space-between;
`
const Button = styled.div<{ background: string }>`
    display: flex;
    cursor: pointer;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    width: 140px;
    background: ${(props) => (props.background || 'none')};
`
const ButtonText = styled.p<{ color: string }>`
    color: ${(props) => (props.color || '#FFF')};
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
`
const CardPlace = styled.div`
    display: flex;
    position: relative;
    height: 248px;
    width: 100%;
`

interface Props {
    children: React.ReactNode;
    reviewCount: any;
}

// const slideRight = () => {
//     if (isAnimating) return;

//     let slider = document.getElementById("slider");
//     if (!slider) return;

//     isAnimating = true;

//     slider.scrollLeft = slider.scrollLeft + 320;

//     slider.addEventListener('transitionend', () => {
//         isAnimating = false;
//     });
// };


const Slider = ({ children, reviewCount }: Props) => {

    const [isSlideMoving, setSlideMoving] = useState(false);
    if (typeof document !== 'undefined') {
        const slider = document.getElementById("slider");

        if (slider !== null) {
            slider.addEventListener('scroll', () => {
                setSlideMoving(true);
                setTimeout(() => {
                    setSlideMoving(false);
                }, 800);
            });
        }
    }

    const slideLeft = () => {
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
            if (!isSlideMoving) {
                const slider = document.getElementById('slider');

                if (slider !== null) {
                    slider.scrollLeft = slider.scrollLeft - 320;
                }
            }
        }
    };

    const slideRight = () => {
        if (typeof document !== 'undefined' && typeof window !== 'undefined') {
            if (!isSlideMoving) {
                const slider = document.getElementById('slider');

                if (slider !== null) {
                    slider.scrollLeft = slider.scrollLeft + 320;
                }
            }
        }
    };
    return (
        <SliderContainer>
            <NavBlock>
                <NavRow>
                    <NavName>
                        Customer Reviews
                    </NavName>
                </NavRow>
                <NavRow>
                    <ReviewsCount>
                        {reviewCount}
                    </ReviewsCount>
                    <NavButtons>
                        <ArrowBlock>
                            <Image src={'/img/Booking/svg/arrow-left.svg'} width={20} height={20} alt="" onClick={slideLeft} />
                        </ArrowBlock>
                        <ArrowBlock>
                            <Image src={'/img/Booking/svg/arrow-right.svg'} width={20} height={20} alt="" onClick={slideRight} />
                        </ArrowBlock>
                    </NavButtons>
                </NavRow>
            </NavBlock>
            <CardPlace>
                {children}
            </CardPlace>
            <ButtonsBot>
                <Button background="rgba(255, 86, 48, 0.08)">
                    <ButtonText color="rgba(183, 29, 24, 1)">
                        Reject
                    </ButtonText>
                </Button>
                <Button background="rgba(33, 43, 54, 1)">
                    <ButtonText color="rgba(255, 255, 255, 1)">
                        Accept
                    </ButtonText>
                </Button>
            </ButtonsBot>
        </SliderContainer>
    )
}

export default Slider;