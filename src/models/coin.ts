export interface Coin {
    
     id: Number;
     uuid: string;
     slug: string;
     symbol: string;
     description: string;
     color: string;
     iconType: string;
     iconUrl: string;
     websiteUrl: string;
     socials: [];
     links: [];
     confirmedSupply: boolean;
     numberOfMarkets: number;
     numberOfExchanges: number;
     type: string;
     volume: number;
     marketCap: number;
     price: string;
     circulatingSupply: number;
     totalSupply: number;
     approvedSupply: boolean;
     firstSeen: number;
     listedAt: number;
     change: number;
     rank: number;
     history:[];
     allTimeHigh: object;
     penalty: boolean;
}