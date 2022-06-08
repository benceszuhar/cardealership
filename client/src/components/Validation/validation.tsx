import * as Yup from 'yup';


  const carFormValidationSchema = Yup.object({ 
      rendszam: Yup.string()
        .required("A rendszám megadása kötelező")
        .min(6,"A rendszam minimum 6 karakter")
        .max(6,"A rendszám maximum 6 karakter"),
      marka: Yup.string()
        .required("A márka megadása kötelező")
        .min(3, "A márka minimum 3 karakter")
        .max(10, "A márka maximum 10 karakter"),
      tipus: Yup.string()
        .required("Az autó típusának megadása kötelező"),
      evjarat: Yup.number()
        .required("Az évjárat megadása kötelező")
        .min(1885, "A jármű kora nem lehet idősebb 137 évnél")
        .max(2022, "A jármű első forgalombahelyezése nem lehet nagyobb a jelenlegi évnél"),
      motorterfogat: Yup.number()
        .required("A motor lökettérfogatának megadása kötelező")
        .min(1,"A lökettérfogat nem lehet kisebb mint 1")
        .max(10000,"A lökettérfogat nem lehet nagyobb mint 10000"),
      uzemanyagfajta: Yup.string()
        .required("Az üzemanyag típus megadása kötelező"),
      km_allas: Yup.number()
        .required("A km óra állásának megadása kötelező"),
      szin: Yup.string()
        .required("Az autó színének megadása kötelező"),
      ar: Yup.number()
        .required("Az autó vételárának megadása kötelező")
        .min(1, "A vételár nem lehet kisebb 1-nél")
    }
    );

  export default carFormValidationSchema;
