import { RepositoryFactory } from "../../services/RepositoryFactory"

const CarRepository = RepositoryFactory.get('car')

const actions = {
    getCars() {
        return new Promise((resolve, reject) => {

            this.loading = true
            CarRepository.getCars()
                .then((res) => {
                    this.cars = res.data.payload;
                    this.loading = false

                    resolve(res);
                })
                .catch((err) => {
                    console.log(err);
                    reject(err);
                });
        });

    },
    getCarDetails(id) {
        return new Promise((resolve, reject) => {

            this.loading = true
            CarRepository.getCarDetails(id).
                then((res) => {
                    this.carDetails = res.data.payload;
                    this.loading = false

                    resolve(res);
                }).
                catch((err) => {
                    reject(err);
                })
        })
    }
}

export default actions;