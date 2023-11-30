import React from "react";
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';
import Link from "next/link";
import MenuComponent from "../../components/MenuComponent/MenuComponent";
import GroupName from "../../components/GroupName/GroupName";
import Button from "../../components/Button/Button";

const MenuMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 16px 40px 16px;
    width: 100%;
    gap: 4px;
`;

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const UpgradePlan = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
`;

const Logo = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 24px 16px 8px 16px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;  
`;

const Menu: React.FC = () => {
    return (
        <Wrapper>
            <MenuMain>
                <Logo>
                    <img src="/img/Logo/stack.svg">
                    </img>
                </Logo>
                <GroupName text="Overview" />
                <MenuComponent text="Overview" svgHref="/img/MainPage/ForMenuComponents/overview.svg" />
                <MenuComponent text="E-commerce" svgHref="/img/MainPage/ForMenuComponents/ecommerce.svg" />
                <MenuComponent text="Analytics" svgHref="/img/MainPage/ForMenuComponents/analytics.svg" />
                <MenuComponent text="Banking" svgHref="/img/MainPage/ForMenuComponents/banking.svg" />
                <MenuComponent text="Booking" svgHref="/img/MainPage/ForMenuComponents/booking.svg" />
                <GroupName text="Management" />
                <MenuComponent text="Mail" svgHref="/img/MainPage/ForMenuComponents/mail.svg" />
            </MenuMain>
            <UpgradePlan>
                <Avatar src="/img/MainPage/ForAccs/Avatar.svg" />
                <Button text="Upgrade to Pro" type="button" width="144px" />
            </UpgradePlan>
        </Wrapper>
    );
}

export default Menu;
