export interface IProduct {
    id: number,
    category: string,
    description: string,
    image: string,
    price: number,
    rating: IRating,
    title: string
}

export interface IRating {
    count: number,
    rate: number,
}