import axios from "axios";
import * as config from "./../constant/config"

export default function getDataApi(endpoint, method = "GET", data) {
    return axios({
        method: method,
        url: `${config.URL_CONFIG}/${endpoint}`,
        data: data,
    })
        .catch(err => {
            console.log("Lỗi 404");
        })
}

