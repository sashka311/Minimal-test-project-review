'use client'
import React from "react";
import LayoutMenu from "../modules/LayoutMenu/LayoutMenu";
import Container from "../components/Container/Container";
import styled, { createGlobalStyle } from "styled-components";
import SmallCard from "../components/SmallCard/SmallCard";
import BigCard from "../components/BigCard/BigCard";
import TinyLineGraph from "../components/Graphics/TinyLineGraph";
import Legend from "../components/LegendForChart/LineChartLegend";
import BarChart from "../components/Graphics/BarChart";
import RadialChart from "../components/Graphics/RadialChart";

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
    gap: 24px;
`

const Cards = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;  
`;

const Charts = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
    width: 100%;
`

const ChartLegend = styled.div`
    display: flex;
    width: 100%;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    color: #212B36;
`

export default function Main() {
    const pageTitle = "Overview";

    return (
        <Container>
            <GlobalStyles />
            <LayoutMenu text={pageTitle}>
                <Page>
                    <Cards>
                        <SmallCard count="95,500" cardName="Total Booking" imgHref="docs.png" />
                        <SmallCard count="352,500$" cardName="Income" imgHref="man.png" />
                        <SmallCard count="20,388" cardName="Canceled" imgHref="woman.png" />
                    </Cards>
                    <Charts>
                        <BigCard background="rgb(209,241,229)">
                            <Legend gap="8px"/>
                            <TinyLineGraph />
                        </BigCard>
                        <BigCard>
                            <ChartLegend>
                                Booked
                            </ChartLegend>
                            <BarChart />
                        </BigCard>
                        <RadialChart />
                    </Charts>
                </Page>
            </LayoutMenu>
        </Container>
    )
}