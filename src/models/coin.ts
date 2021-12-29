export interface Coin {
     name: string;
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
     links: LinkObject[];
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

export interface LinkObject {
     name: string;
     type: string;
     url: string;
}