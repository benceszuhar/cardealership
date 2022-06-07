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
  Link,
  Stack,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AddCar() {
  
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {

        id:"",
        rendszam: "",
        marka: "",
        tipus: "",
        evjarat: 0,
        motorterfogat: 0,
        uzemanyagFajta: "",
        kmAllas: 0,
        szin: "",
        ar: 0
       
    },
  

    onSubmit: (values) => {
          
      navigate('/show');
      const data = { values };

        fetch(`http://localhost:8080/cars`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
           // alert(JSON.stringify(data, null, 2));  
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
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={0.5} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="rendszam">Rendszám</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="rendszam"
                    name="rendszam"
                    type="string"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.rendszam}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="marka">Márka</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="marka"
                    name="marka"
                    type="string"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.marka}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="tipus">Típus</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="tipus"
                    name="tipus"
                    type="string"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.tipus}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="evjarat">Évjárat</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="evjarat"
                    name="evjarat"
                    type="number"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.evjarat}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="motorterfogat">Motortérfogat</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="motorterfogat"
                    name="motorterfogat"
                    type="number"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.motorterfogat}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="uzemanyagFajta">Üzemanyag</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="uzemanyagFajta"
                    name="uzemanyagFajta"
                    type="string"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.uzemanyagFajta}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="kmAllas">Futásteljesítmény</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="kmAllas"
                    name="kmAllas"
                    type="number"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.kmAllas}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="szin">Szín</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="szin"
                    name="szin"
                    type="string"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.szin}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="ar">Ár</FormLabel>
                  <Input
                    bgColor = "gray.50"
                    id="ar"
                    name="ar"
                    type="number"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.ar}
                  />
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