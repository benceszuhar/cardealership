import { Table } from "@chakra-ui/react";
import { DataTable, DataTableProps } from "../components/DataTable";

export const handleDelete = (id:number) =>{

fetch(`/cars/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert("Sikeres törlés"); 
      
    })
    .catch((error) => {
      //console.error('Error:', error);
    })
}