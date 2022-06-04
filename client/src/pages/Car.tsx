import React from "react";
import { Column } from "react-table";
import { DataTable } from "../components/DataTable";

const Car = () => {

  const [state, setState] = React.useState({ data: [], loading: true });
    
  const columns: Column[] = React.useMemo(
      () => [
      {
        Header: "Rendszám",
        accessor: "rendszam"
      },
      {
        Header: "Márka",
        accessor: "marka"
      },
      {
        Header: "Típus",
        accessor: "tipus",
      },
      {
        Header: "Évjárat",
        accessor: "evjarat"
      },
      {
        Header: "Motortérfogat",
        accessor: "motorterfogat"
      },
      {
        Header: "Üzemanyagfajta",
        accessor: "uzemanyagfajta",
      },
      {
        Header: "Km óra állása",
        accessor: "km_allas",
      },
      {
        Header: "Szín",
        accessor: "szin",
      },
      {
        Header: "Ár",
        accessor: "ar",
      },
      ],
      [],
    );
    React.useEffect(() => {
      function fetchData() {
        setState((state) => ({
          ...state,
          loading: true,
        }));
        fetch(
          `http://localhost:8080/cars`,
        )
          .then((res) => res.json())
          .then((data) => {
            setState({ data, loading: false });
          });
      }
      fetchData();
    },
    );
    return (

    <DataTable columns={columns} data={state.data} />
    
    )
}
export default Car;

