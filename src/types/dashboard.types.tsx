export interface KPIs {
    income: number;
    totalBookings: number;
    canceled: number;
}

export interface Data {
    kpis: KPIs;
    booking: any;
    barchart: any;
    linechart: any;
    smallRadials: any;
    radial: any;
}

export interface BarKPIs {
    percentage: number;
    value: number;
    label: string;
    background: string;
}[];

export interface LineKPI {
    totalIncomes: number;
    percent: number;
}

export interface SmallRadialsKPI {
    sold: number;
    pendingPayment: number;
    percentSold: number;
    percentPending: number;
}

export interface BigRadialKPIs {
    soldOut: number;
    available: number;
}