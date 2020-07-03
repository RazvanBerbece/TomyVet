/* Class representing the structure of a product received from the API */
class Product {

    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.desc = data.desc;
        this.vendor = data.vendor;
        this.price = data.price !== undefined ? `${data.price}` : "0.00";
        this.productType = data.productType;
        this.createdAt = data.createdAt;
        this.thumbSrc = data.thumbSrc !== "" ? data.thumbSrc : "https://png2.cleanpng.com/sh/87324d9f0a4cb767e8f4e6b713127dd7/L0KzQYi4UsE4N5Q1fJGAYUO5RLOAVcJkOGc4S5CEOUi3Q4a7UsE2OWQ6SKkCMEG0SIG6TwBvbz==/5a364b752c0633.9984354215135077011803.png";
    }

    get dictionary() {
        return (
            {
                "id": `${this.id}`,
                "title": this.title,
                "desc": this.desc,
                "vendor": this.vendor,
                "price": this.price,
                "productType": this.productType,
                "createdAt": this.createdAt,
                "thumbSrc": this.thumbSrc
            }
        );
    }

}

export default Product;