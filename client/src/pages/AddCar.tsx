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

export default function AddCar() {
  const formik = useFormik({
    initialValues: {

        rendszam: "",
        marka: "",
        tipus: "",
        evjarat: 0,
        motorterfogat: 0,
        uzemanyagfajta: "",
        km_allas: 0,
        szin: "",
        ar: 0
       
    },
  

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));      
      
      const data = { values };

        fetch(`http://localhost:8080/users`, {
          method: 'POST',
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
              <Heading fontSize={'3xl'}>Új autó paraméterei</Heading>
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

                <FormControl>
                  <FormLabel htmlFor="marka">Márka</FormLabel>
                  <Input
                    bgColor = "#CBD5E0"
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
                    bgColor = "#CBD5E0"
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
                    bgColor = "#CBD5E0"
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
                    bgColor = "#CBD5E0"
                    id="motorterfogat"
                    name="motorterfogat"
                    type="number"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.motorterfogat}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="uzemanyagfajta">Üzemanyag</FormLabel>
                  <Input
                    bgColor = "#CBD5E0"
                    id="uzemanyagfajta"
                    name="uzemanyagfajta"
                    type="string"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.uzemanyagfajta}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="km_allas">Futásteljesítmény</FormLabel>
                  <Input
                    bgColor = "#CBD5E0"
                    id="km_allas"
                    name="km_allas"
                    type="number"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.km_allas}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="szin">Szín</FormLabel>
                  <Input
                    bgColor = "#CBD5E0"
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
                    bgColor = "#CBD5E0"
                    id="ar"
                    name="ar"
                    type="number"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.ar}
                  />
                </FormControl>
                
                <Button type="submit" colorScheme="blue" width="full">
                  Rögzítés
                </Button>
              </VStack>
            </form>
          </Box>
      </Stack>
    </Flex>
  );
}