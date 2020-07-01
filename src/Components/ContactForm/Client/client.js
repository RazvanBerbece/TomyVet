import axios from "axios";

class Emailer {

    /* Sends an email to the Shop Email Account */
    async sendEmailToShopContact(email, fname, lname, address, addressTwo, message) {
        var bodyFormData = new FormData();
        bodyFormData.set('email', email);
        bodyFormData.set('fname', fname);
        bodyFormData.set('lname', lname);
        bodyFormData.set('address', address);
        bodyFormData.set('addressTwo', addressTwo);
        bodyFormData.set('message', message);
        
        await axios({
            method: "post",
            url: "http://localhost:5001/sendEmail",
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
            if (response.status == 200) {
                var shopResponse = document.getElementById('resultContainerShop');
                shopResponse.innerHTML += 'Message sent successfully';
                const br = document.createElement("br");
                shopResponse.appendChild(br);
            }
            else {
                var shopResponse = document.getElementById('resultContainerShop');
                shopResponse.innerHTML += 'There was an issue while processing your command';
                const br = document.createElement("br");
                shopResponse.appendChild(br);
            }
        });
    }

    /* Sends an email to the Dev Email Account */
    async sendEmailToDevTeam(email, fname, lname, bugDesc) {
        var bodyFormData = new FormData();
        bodyFormData.set('email', email);
        bodyFormData.set('fname', fname);
        bodyFormData.set('lname', lname);
        bodyFormData.set('bugDesc', bugDesc);
    
        await axios({
            method: "post",
            url: "http://localhost:5001/sendEmail",
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
            if (response.status == 200) {
                var devResponse = document.getElementById('resultContainerDev');
                devResponse.innerHTML += 'Report sent successfully';
                const br = document.createElement("br");
                devResponse.appendChild(br);
            }
            else {
                var devResponse = document.getElementById('resultContainerDev');
                devResponse.innerHTML += 'There was an issue while processing your command';
                const br = document.createElement("br");
                devResponse.appendChild(br);
            }
        });
    }

}

export default Emailer;