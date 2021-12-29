import { Coin } from "./coin";

export interface GetCoinResponse{
    status: string;
    data: CoinResponseData;
}

export interface CoinResponseData{
    base: CoinResponseBase;
    coin: Coin;
}
export interface CoinResponseBase{
    symbol: string;
    sign: string
}