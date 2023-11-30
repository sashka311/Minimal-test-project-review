import React from 'react';
import styled from 'styled-components';
import { Public_Sans } from 'next/font/google';

const public_sans = Public_Sans({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})

const Page = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const Static = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 960px;
    height: 100%;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    width: 480px;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0px 64px;
    flex-direction: column;
`;

const Header = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 0px 0px 40px;
`;

const Image = styled.img`
  width: 720px;
  height: 540px;  
`;

const TextHolder = styled.div`
    display: flex;
    width: 480px;
    height: 96px;
    margin: 0 auto;
`;

const Text = styled.h1`
    color: #212B36;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    font-weight: 700;
`;

interface ContentProps {
    children: React.ReactNode;
}

const SignInPage: React.FC<ContentProps> = ({ children }) => {
    return (
        <Page>
            <Static>
                <Header>
                    <img src="/img/Logo/stack.svg" alt="" />
                </Header>
                <TextHolder>
                    <Text className={public_sans.className}>
                        Manage the job more effectively with Minimal
                    </Text>
                </TextHolder>
                <Image src="/img/LoginPage/dash.png" />
            </Static>
            <Content>
                {children}
            </Content>
        </Page>
    );
}

export default SignInPage;