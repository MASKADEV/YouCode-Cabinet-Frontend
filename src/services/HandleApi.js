import axios from "axios";

class HandleApi {

    async Appointemnt(url,formData) {
        console.log(formData);
        let res = await axios.post(url, JSON.stringify(formData));
        let data = res.data;
        console.log(data);
    }
}

export default HandleApi;