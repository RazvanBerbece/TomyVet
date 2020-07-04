import axios from 'axios';
import Product from './Classes/product';

class ProductReceiver {

    async getAllProducts(callback) {
        var productsList = [];
        await axios({
            method: "get",
            url: "http://localhost:5001/getAllProducts",
        })
        .then(response => {
            if (response.status === 200) {
                for (var i = 0; i < response.data.products.length; i++) {
                    productsList.push(new Product(response.data.products[i]));
                }
                console.log(productsList);
                callback(productsList);
            }
            else {
                callback(null);
            }
        });
    }

}

export default ProductReceiver;