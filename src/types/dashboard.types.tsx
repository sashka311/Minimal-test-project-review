export interface KPIs {
    income: number;
    totalBookings: number;
    canceled: number;
}

export interface IncomeData {
    value: number;
    breakdown: number[];
}

export interface Data {
    kpis: KPIs;
    booking: {
        income: IncomeData;
    };
    barchart: BarChart[];
    linechart: LineChart;
    smallRadials: SmallRadials;
    radial: BigRadial;
}

export interface BarChart {
    label: string;
    value: number;
    percentage: number;
    background: string;
}

export interface LineChart {
    totalIncomes: number;
    percent: number;
}

export interface SmallRadials {
    sold: number;
    pendingPayment: number;
    percentSold: number;
    percentPending: number;
}

export interface BigRadial {
    soldOut: number;
    available: number;
}
