import IProduct, { ProductType } from '../models/IProduct';
const defaultProducts: IProduct[] = [
    {
        name: 'Frozen pizza',
        ean: 123456789123,
        type: ProductType.Food,
        weight: 0.2,
        active: true,
        quantity: 10,
        price: 2.49,
    },
    {
        name: 'T-shirt',
        ean: 987654321123,
        type: ProductType.Clothing,
        weight: 0.15,
        active: true,
        quantity: 15,
        price: 9.99,
    },
    {
        name: 'Smart band',
        ean: 159263487123,
        type: ProductType.Electronics,
        weight: 0.25,
        active: true,
        quantity: 5,
        price: 99.99,
    },
    {
        name: 'Engagement ring',
        ean: 1111111111111,
        type: ProductType.Jewelery,
        weight: 0.05,
        active: true,
        quantity: 1,
        price: 168.99,
    },
    {
        name: 'Spare wheel',
        ean: 2222222222222,
        type: ProductType.Automotive,
        weight: 5.12,
        active: true,
        quantity: 3,
        price: 49.99,
    },
];

export default defaultProducts;
