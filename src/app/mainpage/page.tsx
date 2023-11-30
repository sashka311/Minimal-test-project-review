'use client'
import React from "react";
import LayoutMenu from "../modules/LayoutMenu/LayoutMenu";
import Container from "../components/Container/Container";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background: rgba(255,255,255,1);
    }
`

export default function Main() {
    return (
        <Container>
            <GlobalStyles />
            <LayoutMenu />
        </Container>
    )
}