import React from "react";
import styled from 'styled-components';
import { useRouter, useSearchParams } from 'next/navigation';
import MenuComponent from '../MenuComponent/MenuComponent';
import GroupName from "../GroupName/GroupName";
import Button from "../Button/Button";
import Link from "next/link";

const MenuBlock = styled.div`
    display: flex;
    width: 280px;
    height: 100%;
    border-right: 1px solid rgba(145, 158, 171, 0.20);
    border-right-style: dashed;
`;

const Content = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 1160px;
`;

const Page = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`;

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

const Email = styled.p`
    color: #919EAB;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
`;

const Name = styled.p`
    color: #212B36;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
`;

const Data = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 78px;
  width: 100%;
  gap: 4px;
  padding: 12px 0px 16px 0px;  
`;

const Sidebar: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const search = searchParams.get('email');

    return (
        <MenuBlock>
            <Wrapper>
                <MenuMain>
                    <Logo>
                        <img src="/img/Logo/stack.svg">
                        </img>
                    </Logo>
                    <GroupName text="Overview" />
                    <Link href={'/dashboard'}>
                        <MenuComponent text="Overview" svgHref="/img/MainPage/ForMenuComponents/overview.svg" />
                    </Link>
                    <MenuComponent text="E-commerce" svgHref="/img/MainPage/ForMenuComponents/ecommerce.svg" />
                    <Link href={'/analytics'}>
                        <MenuComponent text="Analytics" svgHref="/img/MainPage/ForMenuComponents/analytics.svg" />
                    </Link>
                    <MenuComponent text="Banking" svgHref="/img/MainPage/ForMenuComponents/banking.svg" />
                    <MenuComponent text="Booking" svgHref="/img/MainPage/ForMenuComponents/booking.svg" />
                    <GroupName text="Management" />
                    <MenuComponent text="Mail" svgHref="/img/MainPage/ForMenuComponents/mail.svg" />
                </MenuMain>
                <UpgradePlan>
                    <Avatar src="/img/MainPage/ForAccs/Avatar.svg" />
                    <Data>
                        <Name>
                            Alex Zemlyaniy
                        </Name>
                        <Email>
                            {search}
                        </Email>
                    </Data>
                    <Button text="Upgrade to Pro" type="button" width="144px" />
                </UpgradePlan>
            </Wrapper>
        </MenuBlock>
    )
}

export default Sidebar;