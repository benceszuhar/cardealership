import React, { useState, ChangeEvent } from "react";
import CarData from '../types/Car';
import CarService from "../Service/CarService";

const AddCar = () => {
  const initialCarState = {
    rendszam: "",
    marka: "",
    tipus: "",
    evjarat: 0,
    motorterfogat: 0,
    uzemanyagfajta: "",
    km_allas: 0,
    szin: "",
    ar: 0
  };
  const [car, setCar] = useState<CarData>(initialCarState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  const saveCar = () => {
    var data = {
        rendszam: car.rendszam,
        marka: car.marka,
        tipus: car.tipus,
        evjarat: car.evjarat,
        motorterfogat: car.motorterfogat,
        uzemanyagfajta: car.uzemanyagfajta,
        km_allas: car.km_allas,
        szin: car.szin,
        ar: car.ar
    };

    CarService.create(data)
      .then((response: any) => {
        setCar({
            rendszam: response.data.rendszam,
            marka: response.data.marka,
            tipus: response.data.tipus,
            evjarat: response.data.evjarat,
            motorterfogat: response.data.motorterfogat,
            uzemanyagfajta: response.data.uzemanyagfajta,
            km_allas: response.data.km_allas,
            szin: response.data.szin,
            ar: response.data.ar
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newCar = () => {
    setCar(initialCarState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Sikeresen hozzáadtad az autót az adatbázishoz!</h4>
          <button className="btn btn-success" onClick={newCar}>
            Hozzáad
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="Rendszám"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={car.rendszam}
              onChange={handleInputChange}
              name="rendszam"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Márka"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={car.marka}
              onChange={handleInputChange}
              name="marka"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Típus"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={car.tipus}
              onChange={handleInputChange}
              name="tipus"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Évjárat"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={car.evjarat}
              onChange={handleInputChange}
              name="evjarat"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Motortérfogat"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={car.motorterfogat}
              onChange={handleInputChange}
              name="motorterfogat"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Üzemanyagfajta"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={car.uzemanyagfajta}
              onChange={handleInputChange}
              name="uzemanyagfajta"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Km óra állása"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={car.km_allas}
              onChange={handleInputChange}
              name="km_allas"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Szín"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={car.szin}
              onChange={handleInputChange}
              name="szin"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Ár"></label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={car.ar}
              onChange={handleInputChange}
              name="ar"
            />
          </div>

          <button onClick={saveCar} className="btn btn-success">
            Hozzáadva
          </button>
        </div>
      )}
    </div>
  );
};

export default AddCar;
