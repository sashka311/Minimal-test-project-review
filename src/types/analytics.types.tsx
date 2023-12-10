export interface KPIs {
    income: number;
    totalBookings: number;
    canceled: number;
}

export interface Data {
    kpis: KPIs;
    sliderProps: any;
}

export interface SliderData {
    name: string;
    userImg: string;
    date: string;
    bookingInfo: string;
    guestCount: string;
    imgLink: string;
    price: number;
}[];