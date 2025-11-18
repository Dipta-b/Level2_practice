type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {

    const allProductPriceTotal = products.map(product => {
        let total = product.price * product.quantity;

        if (product.discount) {
            total = total - (total * (product.discount / 100));
        }

        return total;
    })
        .reduce((accumulator, currentIndexVal) => accumulator + currentIndexVal);
    return allProductPriceTotal;
}

