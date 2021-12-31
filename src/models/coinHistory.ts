export interface CoinHistory{
    status: string;
    data: HistoryData
}

export interface HistoryData{
    change: string;
    history: ChartPoint[];
}

export interface ChartPoint {
    price: string;
    timestamp:string;
}