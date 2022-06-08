import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import carFormValidationSchema from "../components/Validation/validation";

export default function AddCar() {

  const navigate=useNavigate();
  const { errors, values, handleSubmit, handleChange} = useFormik({
    initialValues: {

        id:"",
        rendszam: "",
        marka: "",
        tipus: "",
        evjarat: "",
        motorterfogat: "",
        uzemanyagfajta: "",
        km_allas: "",
        szin: "",
        ar: ""
       
    },

    validationSchema : carFormValidationSchema,
  
    onSubmit: (values) => {
      
      console.log(JSON.stringify(values, null, 2));
          
      //navigate('/show');
      const data = { values };

        fetch(`/cars`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
           //alert(JSON.stringify(data, null, 2));  
          })
          .catch((error) => {
            console.error('Error:', error);
          });
              }
    });
  return (
    <Flex  bg="gray.20" align="top" justify="center" h="100vh">
        <Stack spacing={3} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
              <Heading fontSize={'3xl'}>Új autó paraméterei</Heading>
          </Stack>
          <Box boxShadow='dark-lg' bg="white" p={6} rounded="md">
            <form onSubmit={handleSubmit}>
              <VStack spacing={0.5} align="flex-start">
                <FormControl isInvalid={!!errors.rendszam}>
                  <FormLabel htmlFor="rendszam">Rendszám</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="rendszam"
                    name="rendszam"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.rendszam}
                  />
                <FormErrorMessage>{errors.rendszam}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.marka}>
                  <FormLabel htmlFor="marka">Márka</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="marka"
                    name="marka"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.marka}
                  />
                  <FormErrorMessage>{errors.marka}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.tipus}>
                  <FormLabel htmlFor="tipus">Típus</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="tipus"
                    name="tipus"
                    type="string"
                    variant="filled"
                    className="form-control"
                    onChange={handleChange}
                    value={values.tipus}
                  />
                  <FormErrorMessage>{errors.tipus}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.evjarat}>
                  <FormLabel htmlFor="evjarat">Évjárat</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="evjarat"
                    name="evjarat"
                    type="number"
                    variant="filled"
                    onChange={handleChange}
                    value={values.evjarat}
                  />
                  <FormErrorMessage>{errors.evjarat}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.motorterfogat}>
                  <FormLabel htmlFor="motorterfogat">Motortérfogat</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="motorterfogat"
                    name="motorterfogat"
                    type="number"
                    variant="filled"
                    onChange={handleChange}
                    value={values.motorterfogat}
                  />
                  <FormErrorMessage>{errors.motorterfogat}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.uzemanyagfajta}>
                  <FormLabel htmlFor="uzemanyagfajta">Üzemanyag</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="uzemanyagfajta"
                    name="uzemanyagfajta"
                    type="string"
                    variant="filled"
                    onChange={handleChange}
                    value={values.uzemanyagfajta}
                  />
                  <FormErrorMessage>{errors.uzemanyagfajta}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.km_allas}>
                  <FormLabel htmlFor="km_allas">Futásteljesítmény</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="km_allas"
                    name="km_allas"
                    type="number"
                    variant="filled"
                    onChange={handleChange}
                    value={values.km_allas}
                  />
                  <FormErrorMessage>{errors.km_allas}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.szin}>
                  <FormLabel htmlFor="szin">Szín</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="szin"
                    name="szin"
                    type="string"
                    variant="filled"
                    onChange={handleChange}
                    value={values.szin}
                  />
                  <FormErrorMessage>{errors.szin}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.ar}>
                  <FormLabel htmlFor="ar">Ár</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="ar"
                    name="ar"
                    type="number"
                    variant="filled"
                    onChange={handleChange}
                    value={values.ar}
                  />
                  <FormErrorMessage>{errors.ar}</FormErrorMessage>
                </FormControl>
                <Link href={'/show'}>
                <Button 
                type="submit"  
                width="full"
                bg={'teal.400'}
                color={'white'}
                _hover={{bg: 'teal.600'}}>
                  Rögzítés
                </Button>
                </Link>
              </VStack>
            </form>
          </Box>
      </Stack>
    </Flex>
  );
}