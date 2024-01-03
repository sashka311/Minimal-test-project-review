import React from "react";
import styled from 'styled-components';
import Link from 'next/link';
import Header from "../components/Header/Header";
import { useRouter, useSearchParams } from 'next/navigation';
import Sidebar from "../components/Sidebar/Sidebar";

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

interface DashboardProps {
    children: React.ReactNode;
    text: string;
}

const DashboardLayout: React.FC<DashboardProps> = ({ children, text }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const search = searchParams.get('email');

    return (
        <Page>
            <Sidebar />
            <Content>
                <Header text={text} />
                { children }
            </Content>
        </Page>
    )
}

export default DashboardLayout;