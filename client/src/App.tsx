import * as React from "react"
import {  ChakraProvider, theme } from "@chakra-ui/react"
import { DataTable } from "./components/DataTable";
import { Column } from "react-table";
import  Menu  from "./components/menu/menu"
import "./components/menu/menu.css"
import { Route, Routes } from "react-router-dom";
import AddCar from "./pages/AddCar";
import Car from "./pages/Car";

const App = () => {

  return(
  <ChakraProvider theme={theme}> 
  <Menu/> 
  <Routes>
    <Route path="/show" element={<Car/>} />
    <Route path="/add" element={<AddCar/>} />
  </Routes> 
  </ChakraProvider>
  );
};

export default App;
