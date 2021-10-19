import axios from "axios";

const URL = 'https://hpb.health.gov.lk/api/get-current-statistical';

export default new class ServiceApi {

    getAPI() {
        return axios.get(URL);
    }
}