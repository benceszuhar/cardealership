import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import  App  from "./App"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ColorModeScript />
    <App/>
    </BrowserRouter>
  </React.StrictMode>,
)
