export interface Data {
    barchart: Barchart[];
}

export interface Barchart {
    year: number;
    sold: number;
    canceled: number;
}