import React from "react";
import styled from 'styled-components';
import { KPIs } from "../../../types/dashboard.types";
import SmallCard from "../SmallCard/SmallCard";

interface Props  {
    kpis: KPIs;
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 24px;
`

const KPICards = ({ kpis }: Props) => (
    <Wrapper>
        <SmallCard
        title="Total Booking"
        image="booking.png"
        value={kpis.totalBookings}
        />
        <SmallCard
        title="Income"
        image="income.png"
        value={`${kpis.income}$`}
        />
        <SmallCard
        title="Canceled"
        image="canceled.png"
        value={kpis.canceled}
        />
  </Wrapper>
);

export default KPICards;
