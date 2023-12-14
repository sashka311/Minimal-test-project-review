'use client'
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Container from "../../components/Container/Container";
import styled from "styled-components";
import { Data } from "../../types/booking.types";
import Chart from "../../modules/Booking/Chart";

const Page = styled.div`
    display: flex;
    gap: 24px;
    width: 100%;
    height: 560px;
    padding: 88px 40px 0px 40px;
`

export default function Booking() {
    const pageTitle = "Booking";

    return (
        <Container>
            <DashboardLayout text={pageTitle}>
                <Page>
                    <Chart />
                </Page>
            </DashboardLayout>
        </Container>
    )
}