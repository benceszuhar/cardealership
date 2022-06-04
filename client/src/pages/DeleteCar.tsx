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

export default function DeleteCar() {
    
    const formik = useFormik({
        initialValues: {
    
            rendszam: "",
            
        },
      
    
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));      
          
          const data = { values };
    
            fetch(`http://localhost:8080/users`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
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
                        <FormLabel htmlFor="rendszam">Rendszám</FormLabel>
                        <Input
                            bgColor = "#CBD5E0"
                            id="rendszam"
                            name="rendszam"
                            type="string"
                            variant="filled"
                            onChange={formik.handleChange}
                            value={formik.values.rendszam}
                        />
                        </FormControl>
            
                        
                        
                        <Button type="submit" colorScheme="blue" width="full">
                        Törlés
                        </Button>
                    </VStack>
                    </form>
                </Box>
          </Stack>
        </Flex>
      );
    }