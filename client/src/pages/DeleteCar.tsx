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
    
            id: 0,
            
        },
      
    
        onSubmit: (values) => {
          //alert(JSON.stringify(values, null, 2));  
          navigate('/show');
          const data = { values };
    
            fetch(`http://localhost:8080/${formik.values.id}`, {
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
        <Flex  bg="gray.100" align="center" justify="center" h="100vh">
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                <Heading fontSize={'3xl'}>Törlendő autó</Heading>
                </Stack>
                <Box boxShadow='dark-lg' bg="white" p={6} rounded="md">
                    <form onSubmit={formik.handleSubmit}>
                    <VStack spacing={4} align="flex-start">

                        <FormControl>
                        <FormLabel htmlFor="id">Id</FormLabel>
                        <Input
                            bgColor = "#CBD5E0"
                            id="id"
                            name="id"
                            type="number"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.id}
                        />
                        </FormControl>
            
                        
                        
                        <Button type="submit" colorScheme="blue" width="full" _hover={{bg: 'red'}}>
                        Törlés
                        </Button>
                    </VStack>
                    </form>
                </Box>
          </Stack>
        </Flex>
      );
}

