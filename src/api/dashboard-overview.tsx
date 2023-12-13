import { NextApiRequest, NextApiResponse } from 'next';
import { Data } from '../types/dashboard.types';

const dashboardData: Data = {
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
            background: 'rgba(255, 86, 48, 1)',
        },
        {
            label: 'Sold',
            value: 70,
            percentage: 86,
            background: 'rgba(34, 197, 94, 1)',
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

export default (_req: NextApiRequest, res: NextApiResponse<Data>) => {
    res.status(200).json(dashboardData);
};