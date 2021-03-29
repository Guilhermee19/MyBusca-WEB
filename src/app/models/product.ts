export interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    store: Store[];
    dateCreate: string;
    dateUpdate: string;
}

export interface Store{
    id: number;
    name: string;
    price: number;
    parceled: number;
    plots:number;
    url: string;
    dateCreate: string;
    dateUpdate: string;
    status: string;
}
