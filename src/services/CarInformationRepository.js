import Repository from "./Repository";

export default {
    getCars() {
        return Repository.get(`/car`);
    },
    getCarDetails(id) { 
        return Repository.get(`/car/${id}`);
    }

}
