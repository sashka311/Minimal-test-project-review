import React from "react";
import styled from 'styled-components';
import Link from 'next/link';
import Container from '../../components/Container/Container';
import Menu from "./Menu";

const MenuBlock = styled.div`
    display: flex;
    width: 280px;
    height: 100%;
`;

const Content = styled.div`
    
`;

const Page = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`;

const ContentLayout: React.FC = () => {
    return (
        <Container>
            <Page>
                <MenuBlock>
                    <Menu />
                </MenuBlock>
                <Content>

                </Content>
            </Page>
        </Container>
    )
}

export default ContentLayout;