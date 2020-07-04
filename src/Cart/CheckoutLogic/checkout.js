import axios from 'axios';

class CheckoutClient {

    constructor() {
        this.apiURL = 'http://localhost:5001/checkout'
    }

    /* Send the current order to the API for processing */
    async sendOrderToAPI(order, callback) { // order = current shopping cart
        let payload = {
            products: order
        };
        await axios({
            url: this.apiURL,
            method: "post",
            data: payload
        })
        .then((response) => {
            if (response.data.status === 200) {
                callback(null, response.data.weburl); // payment will be completed on the output weburl
            }
        })
        .catch((error) => {
            console.log(error);
            callback(error, null);
        })
    }

}

export default CheckoutClient;