import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import { DataTable } from "../components/DataTable";
import AddCar from "./AddCar";

const Car = () => {

  const [state, setState] = React.useState({ data: [] });
  let deleteid = 0;
  const columns: Column[] = React.useMemo(
      () => [
      {
        Header: "Id",
        accessor: "id"
      },
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
        accessor: "tipus"
      },
      {
        Header: "Évjárat",
        accessor: "evjarat",
      },
      {
        Header: "Motortérfogat",
        accessor: "motorterfogat"
      },
      {
        Header: "Üzemanyagfajta",
        accessor: "uzemanyagfajta"
      },
      {
        Header: "Km óra állása",
        accessor: "km_allas"
      },
      {
        Header: "Szín",
        accessor: "szin"
      },
      {
        Header: "Ár",
        accessor: "ar"
      },
      {
        Header:"Módosítás",
        accessor:"edit",
      },
      {
        Header:"Törlés",
        id:'delete',
        accessor: str => "delete",

        Cell: (row)=> (
          <span style={{cursor:'pointer',color:'red'} }>
            <Link to="/show">
                    Delete
                    </Link>
                  </span> 
          ) 
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
          `/cars`,
        )
          .then((res) => res.json())
          .then((data) => {
            setState({ data});
            deleteid=data.id;
          });
      }
      fetchData();
    },
    []
    );
    return (

    <DataTable  
    columns={columns} 
    data={state.data}
    />
    
    )
}
export default Car;

