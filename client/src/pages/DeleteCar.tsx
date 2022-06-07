import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DeleteCar() {
    
    const navigate=useNavigate();
    const formik = useFormik({
        initialValues: {
    
            Id: 0,
            
        },
      
    
        onSubmit: (values) => {
          //alert(JSON.stringify(values, null, 2));  
          navigate('/show');
          const data = { values };
    
            fetch(`/cars/${formik.values.Id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
              })
              .then(response => response.json())
              .then(data => {
                console.log('Success:', data);  
              })
              .catch((error) => {
                console.error('Error:', error);
              });
                  }
        });
      return (
        <Flex  bg="gray.20" align="center" justify="center" h="100vh">
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                <Heading fontSize={'3xl'}>Autó törlése az adatbázisból</Heading>
                </Stack>
                <Box boxShadow='dark-lg' bg="white" p={6} rounded="md">
                    <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4} align="flex-start">

                        <FormControl>
                        <FormLabel htmlFor="Id">Kérem adja meg az autó azonosítóját</FormLabel>
                        <Input
                            bgColor = "gray.50"
                            id="Id"
                            name="Id"
                            type="number"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.Id}
                        />
                        </FormControl>                      
                        <Button 
                        type="submit" 
                        bg={'teal.400'}
                        color={'white'}
                        width="full" 
                        _hover={{bg: 'red'}}>
                        Törlés
                        </Button>
                    </VStack>
                    </form>
                </Box>
          </Stack>
        </Flex>
      );
}

