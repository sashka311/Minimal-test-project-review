import React from "react";
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const Top = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 0px 40px;
  align-items: center;
  height: 80px;
  width: 100%;
  top: 0;
`;

const PageName = styled.p`
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    color: #212B36;
`;

const ImgHolder = styled.div`
    display: flex;
    gap: 23px;
`;

const AccImg = styled.img`
    cursor: pointer;
`

interface HeaderProps {
    text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
    return (
        <Top>
            <PageName className={public_sans.className}>
                {text}
            </PageName>
            <ImgHolder>
                <AccImg src="/img/MainPage/ForMenuComponents/ic-bell.svg" />
                <AccImg src="/img/MainPage/ForAccs/account.svg" />
            </ImgHolder>
        </Top>
    );
}

export default Header;