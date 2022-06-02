import http from "../http-common";

const findAll = () => {
  return http.get("/cars");
};

const findById = () => {
    return http.get(`/rendszam`);
  };

const create = (data: any) => {
  return http.post('/cars', data);
};

const remove = () => {
  return http.delete(`/rendszam`);
};

const CarService = {
  findAll,
  findById,
  create,
  remove,
};

export default CarService;