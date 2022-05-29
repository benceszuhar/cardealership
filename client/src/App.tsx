import * as React from "react"
import {  ChakraProvider, theme } from "@chakra-ui/react"
import  Menu  from "./components/menu/menu"
import "./components/menu/menu.css"

export const App = () => (
  <ChakraProvider theme={theme}>    
  <Menu/>
  </ChakraProvider>
)
