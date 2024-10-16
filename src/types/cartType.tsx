export interface CartInterface {
    id: number;
    title: string;
    date: string;
    time: string;
    price: string;
    location: string;
    img: string;
    category: string;
}

export interface CartType {
    data: CartInterface;
}

export interface CartListType {
    data: CartInterface[];
}
