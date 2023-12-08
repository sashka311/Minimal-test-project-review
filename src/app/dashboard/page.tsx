'use client'
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Container from "../../components/Container/Container";
import styled from "styled-components";
import SmallCard from "../../modules/Dashboard/SmallCard/SmallCard";
import BigCard from "../../modules/Dashboard/BigCard/BigCard";
import TinyLineGraph from "../../modules/Dashboard/Graphics/TinyLineGraph";
import Legend from "../../modules/Dashboard/LegendForChart/LineChartLegend";
import BarChart from "../../modules/Dashboard/Graphics/BarChart";
import RadialChart from "../../modules/Dashboard/Graphics/RadialChart";
import LongCard from "../../modules/Dashboard/LongCard/LongCard";
import { KPIs, Data } from "../../types/dashboard.types";
import KPICards from "../../modules/Dashboard/KPICards/KPICards";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 88px 40px 0px 40px;
    gap: 24px;
`

const Charts = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex-wrap: wrap;
    width: 712px;
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
const Content = styled.div`
    display: flex;
    gap: 24px;
    width: 100%;
`

const data: Data = {
    kpis: {
      income: 15000,
      totalBookings: 45000,
      canceled: 55,
    },
    booking: {
      income: {
        value: 95000,
        breakdown: [40000, 50000, 60000, 100000, 90000, 92000, 95000],
      },
    },
    barchart: [
        {
            label: 'Pending',
            value: 56000,
            percentage: 20,
            background: '#FFAB00',
        },
        {
            label: 'Canceled',
            value: 10000,
            percentage: 56,
            background:'rgba(255, 86, 48, 1)',
        },
        {
            label: 'Sold',
            value: 70,
            percentage: 86,
            background:'rgba(34, 197, 94, 1)',
        },
    ],
    linechart: {
        totalIncomes: 9990,
        percent: 8.2,
    },
    smallRadials: {
        sold: 9990,
        pendingPayment: 10989,
        percentSold: 73.9,
        percentPending: 45.6,
    },
    radial: {
        soldOut: 120,
        available: 66,
    }
  };

//   const data = [
//     {
//         label: 'Pending',
//         value: 56000,
//         percentage: 0.75,
//     },
//     {
//         label: 'Canceled',
//         value: 10000,
//         percentage: 0.2,
//     },
//     {
//         label: 'Sold',
//         value: 70,
//         percentage: 0.89,
//     },
// ]

export default function Main() {
    const pageTitle = "Overview";

    return (
        <Container>
            <DashboardLayout text={pageTitle}>
                <Page>
                    <KPICards kpis={data.kpis} />
                    <Content>
                        <Charts>
                            <BigCard background="rgb(209,241,229)">
                                <Legend kpis={data.linechart} />
                                <TinyLineGraph />
                            </BigCard>
                            <BigCard>
                                <ChartLegend>
                                    Booked
                                </ChartLegend>
                                <BarChart kpis={data.barchart} />
                            </BigCard>
                            <LongCard kpis={data.smallRadials} />
                        </Charts>
                        <RadialChart kpis={data.radial} />
                    </Content>
                </Page>
            </DashboardLayout>
        </Container>
    )
}