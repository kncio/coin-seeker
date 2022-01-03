export interface GlobalStatsResponse{
    status:string;
    data:GlobalStateData;

}

export interface GlobalStateData{
    totalCoins:string;
    totalMarkets:string;
    totalMarketCap:string;
    total24hVolume:string;
    totalExchanges:string;
}