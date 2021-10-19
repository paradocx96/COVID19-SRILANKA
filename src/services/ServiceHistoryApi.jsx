import axios from "axios";

const URL = 'https://hpb.health.gov.lk/api/get-statistical-history-data';

export default new class ServiceApi {

    getAPI() {
        return axios.get(URL);
    }
}