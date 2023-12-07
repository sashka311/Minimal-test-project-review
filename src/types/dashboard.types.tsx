export interface KPIs {
    income: number;
    totalBookings: number;
    canceled: number;
}

export interface Data {
    kpis: KPIs;
    booking: any;
}