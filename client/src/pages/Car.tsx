import { Button } from "@chakra-ui/react";
import { Tr } from "@chakra-ui/table";
import React from "react";
import { Column } from "react-table";
import { DataTable } from "../components/DataTable";

const Car = () => {

  const [state, setState] = React.useState({ data: [], loading: true });
    
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
        accessor:"delete",
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
            setState({ data, loading: false });
          });
      }
      fetchData();
    },
    []
    );
    const handleRemove = async (Id: number) => {
      console.log('delete', Id);
    };
    const handleEdit = (Id: number) => {
      console.log('edit', Id);
    };
    return (

    <DataTable  
    columns={columns} 
    data={state.data}
    />
    
    )
}
export default Car;

