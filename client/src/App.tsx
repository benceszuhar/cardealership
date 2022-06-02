import * as React from "react"
import {  ChakraProvider, theme } from "@chakra-ui/react"
import { DataTable } from "./components/DataTable";
import { Column } from "react-table";
import  Menu  from "./components/menu/menu"
import "./components/menu/menu.css"

const App = () => {
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


  return(
  <ChakraProvider theme={theme}> 
  <Menu/>   
  <DataTable columns={columns} data={state.data} />
  </ChakraProvider>
  );
};

export default App;
