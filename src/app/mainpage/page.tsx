'use client'
import React from "react";
import LayoutMenu from "../modules/LayoutMenu/LayoutMenu";
import Container from "../components/Container/Container";
import styled, { createGlobalStyle } from "styled-components";
import SmallCard from "../components/SmallCard/SmallCard";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background: rgba(255,255,255,1);
    }
`
const Page = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 88px 40px 0px 40px;
`

export default function Main() {
    const pageTitle = "Overview";

    return (
        <Container>
            <GlobalStyles />
            <LayoutMenu text={pageTitle}>
                <Page>
                    <SmallCard count="2282" cardName="Heello" imgHref="docs.png" />
                </Page>
            </LayoutMenu>
        </Container>
    )
}