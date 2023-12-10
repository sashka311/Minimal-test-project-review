'use client'
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Container from "../../components/Container/Container";
import styled from "styled-components";
import KPICards from "../../modules/Dashboard/KPICards/KPICards";
import { KPIs, Data } from "../../types/analytics.types";
import Slider from "../../modules/Analytics/Slider/Slider";
import Card from "../../modules/Analytics/Card/Card";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 88px 40px 0px 40px;
    gap: 24px;
`


const data: Data = {
    kpis: {
      income: 15000,
      totalBookings: 4500,
      canceled: 5500,
    },
    sliderProps: [
        {
            name: 'Alexander',
            userImg: '/img/Slider/Avatars/Avatar1.png',
            date: '11 Aug 2023 9:00 PM',
            bookingInfo: '3 days 2 night',
            guestCount: '5 Guests',
            imgLink: '/img/Slider/CardImages/img1.png',
            price: 72,
        },
        {
            name: 'Alexey Sarakuz',
            userImg: '/img/Slider/Avatars/Avatar2.png',
            date: '9 April 2023 10:00 AM',
            bookingInfo: '7 days 6 night',
            guestCount: '2 Guests',
            imgLink: '/img/Slider/CardImages/img2.png',
            price: 219,
        },
        {
            name: 'Eugen Mance',
            userImg: '/img/Slider/Avatars/Avatar3.png',
            date: '26 Nov 2023 8:00 PM',
            bookingInfo: '4 days 3 night',
            guestCount: '3 Guests',
            imgLink: '/img/Slider/CardImages/img3.png',
            price: 310,
        },
        {
            name: 'Sofia Grace',
            userImg: '/img/Slider/Avatars/Avatar4.png',
            date: '13 Mrach 2023 12:00 AM',
            bookingInfo: '5 days 3 night',
            guestCount: '2 Guests',
            imgLink: '/img/Slider/CardImages/img4.png',
            price: 219,
        },
    ]
}

console.log(data.sliderProps)

export default function Analytics() {
    const pageTitle = "Analytics";

    return (
        <Container>
            <DashboardLayout text={pageTitle}>
                <Page>
                    <KPICards kpis={data.kpis} />
                    <Slider>
                        <Card props={data.sliderProps} />
                    </Slider>
                </Page>
            </DashboardLayout>
        </Container>
    )
}