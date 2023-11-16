import CarInformationRepository from "./CarInformationRepository";

const repositories = {
    car: CarInformationRepository
};

export const RepositoryFactory = {
    get: name => repositories[name]
};