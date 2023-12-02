import React from "react";
import styled from 'styled-components';
import Link from 'next/link';
import Container from '../../components/Container/Container';
import Header from "../../components/Header/Header";
import { useRouter, useSearchParams } from 'next/navigation';
import MenuComponent from "../../components/MenuComponent/MenuComponent";
import GroupName from "../../components/GroupName/GroupName";
import Button from "../../components/Button/Button";
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});


const MenuBlock = styled.div`
    display: flex;
    width: 280px;
    height: 100%;
`;

const Content = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
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

interface ContentProps {
    children: React.ReactNode;
    text: string;
}

const ContentLayout: React.FC<ContentProps> = ({ children, text }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const search = searchParams.get('email');

    return (
        <Container>
            <Page>
                <MenuBlock>
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
            <UpgradePlan className={public_sans.className}>
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
                <Content>
                    <Header text={text} />
                    { children }
                </Content>
            </Page>
        </Container>
    )
}

export default ContentLayout;