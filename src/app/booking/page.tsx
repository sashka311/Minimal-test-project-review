'use client'
import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Container from "../../components/Container/Container";
import styled from "styled-components";
import { Data } from "../../types/booking.types";
import Chart from "../../modules/Booking/Chart/Chart";
import Slider from "../../modules/Booking/Slider/Slider";
import Card from "../../modules/Booking/Card/Card";

const Page = styled.div`
    display: flex;
    gap: 24px;
    width: 100%;
    height: 560px;
    padding: 88px 40px 0px 40px;
`

const data: Data = {
    sliderProps: [
        {
            name: 'Alexander',
            userImg: '/img/Slider/Avatars/Avatar1.png',
            date: '11 Aug 2023 9:00 PM',
            text: 'sdawdawd',
            stars: 3,
        },
        {
            name: 'Alexey Sarakuz',
            userImg: '/img/Slider/Avatars/Avatar2.png',
            date: '9 April 2023 10:00 AM',
            text: 'sdawdawd',
            stars: 3,
        },
        {
            name: 'Eugen Mance',
            userImg: '/img/Slider/Avatars/Avatar3.png',
            date: '26 Nov 2023 8:00 PM',
            text: 'sdawdawd',
            stars: 3,
        },
        {
            name: 'Sofia Grace',
            userImg: '/img/Slider/Avatars/Avatar4.png',
            date: '13 Mrach 2023 12:00 AM',
            text: 'sdawdawd',
            stars: 3,
        },
        {
            name: 'Alexander',
            userImg: '/img/Slider/Avatars/Avatar1.png',
            date: '11 Aug 2023 9:00 PM',
            text: 'sdawdawd',
            stars: 3,
        },
        {
            name: 'Alexey Sarakuz',
            userImg: '/img/Slider/Avatars/Avatar2.png',
            date: '9 April 2023 10:00 AM',
            text: 'sdawdawd',
            stars: 3,
        },
        {
            name: 'Eugen Mance',
            userImg: '/img/Slider/Avatars/Avatar3.png',
            date: '26 Nov 2023 8:00 PM',
            text: 'sdawdawd',
            stars: 3,
        },
        {
            name: 'Sofia Grace',
            userImg: '/img/Slider/Avatars/Avatar4.png',
            date: '13 Mrach 2023 12:00 AM',
            text: 'sdawdawd',
            stars: 3,
        },
    ]
}

export default function Booking() {
    const pageTitle = "Booking";

    return (
        <Container>
            <DashboardLayout text={pageTitle}>
                <Page>
                    <Chart />
                    <Slider reviewCount={data.sliderProps.length +' Reviews'}>
                        <Card props={data.sliderProps} />
                    </Slider>
                </Page>
            </DashboardLayout>
        </Container>
    )
}