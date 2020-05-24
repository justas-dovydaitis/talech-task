import defaultProducts from './defaultProducts';
import IProduct from '../models/IProduct';

const PRODUCTS_KEY = 'products';

export default class ProductsService {
    private _products: IProduct[] = [];

    public get products(): IProduct[] {
        if (!this._products) {
            let product: IProduct[] = this.getStoredProducts();
            this._products = product;
        }
        return this._products;
    }

    public set products(products: IProduct[]) {
        this._products = products;
        this.storeProducts(this._products);
    }

    public addProduct(product: IProduct): void {
        this._products.push(product);
        this.storeProducts(this._products);
    }

    public updateProduct(ean: number, product: IProduct): void {
        this._products.forEach((prod) => {
            if (prod.ean === ean) {
                prod = product;
            }
        });
        this.storeProducts(this._products);
    }

    public deleteProduct(ean: number): void {
        this._products = this.products.filter((prod) => prod.ean !== ean);
        this.storeProducts(this._products);
    }

    private getStoredProducts(): IProduct[] {
        let storedProductsJson: string | null = localStorage.getItem(PRODUCTS_KEY);
        if (storedProductsJson === null) {
            this.storeProducts(defaultProducts);
            return defaultProducts;
        }
        return JSON.parse(storedProductsJson);
    }

    private storeProducts(products: IProduct[]): void {
        let stringifiedProducts = JSON.stringify(products);
        localStorage.setItem(PRODUCTS_KEY, stringifiedProducts);
    }
}
