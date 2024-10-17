export interface CardInterface {
    id: number;
    title: string;
    date: string;
    price: string;
    location: string;
    img: string;
    category: string;
}

export interface CardType {
    data: CardInterface;
}

export interface CardListType {
    data: CardInterface[];
    title: string;
}
