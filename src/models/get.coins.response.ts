import { Coin } from "./coin";

export interface GetCoinsResponse{
    status: string;
    data: GetCoinsData
} 

export interface GetCoinsData {
    stats: GetCoinsStats;
    base: GetCoinBase;
    coins: Coin[]
} 

export interface GetCoinsStats {
    total:number;
    offset:number;
    limit:number;
    order:string;
    base:string;
    totalMarkets:number;
    totalExchanges:number;
    totalMarketCap:number;
    total24hVolume:number
}

export interface GetCoinBase{
    symbol:string;
    sign:string;
}
