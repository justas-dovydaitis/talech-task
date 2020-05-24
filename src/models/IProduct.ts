export enum ProductType {
    Food = 'Food',
    HomeSupplies = 'Home supplies',
    Electronics = 'Electronics',
    Jewelery = 'Jewelery',
    Automotive = 'Automotive',
    Clothing = 'Clothing',
}

export default interface IProduct {
    name: string;
    ean: number;
    type: ProductType;
    weight: number;
    color?: string;
    active: boolean;
    quantity: number;
    price: number;
}
