export interface NewsResponse{
    readLink:string;
    queryContext:QueryContext;
    totalEstimatedMatches: 49;
    sort:string;
    value:NewsData[];
}

export interface QueryContext{
    originalQuety:string;
    adultIntent:boolean;
}

export interface NewsData{
    category:string;
    datePublished:string;
    description:string;
    url:string;
    name:string;
    image: ImageThumbnail;
}

export interface ImageThumbnail{
    thumbnail:Thumbnail;
}

export interface Thumbnail{
    contentUrl:string;
    width: number;
    height: number
}