import * as React from "react"
import {  ChakraProvider, theme } from "@chakra-ui/react"
import { DataTable } from "./components/DataTable";
import { Column } from "react-table";
import  Menu  from "./components/menu/menu"
//import "./components/menu/menu.css"
import { Route, Routes } from "react-router-dom";
import AddCar from "./pages/AddCar";
import Car from "./pages/Car";
import DeleteCar from "./pages/DeleteCar";
import LandingPage from "./pages/LandingPage";

const App = () => {

  

  return(    
  
    <ChakraProvider theme={theme}>
        <Menu />
        <Routes>
        <Route   path="/" element={<LandingPage/>} />
          <Route path="/show" element={<Car/>} />
          <Route path="/add" element={<AddCar/>} />
          <Route path="/delete" element={<DeleteCar/>} />
          <Route path="/show" element={<AddCar/>} />
        </Routes>
      </ChakraProvider>
    
  );
};

export default App;
