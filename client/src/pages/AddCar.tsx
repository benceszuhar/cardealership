import React, { useState, ChangeEvent } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import CarData from '../types/Car';
import CarService from "../Service/CarService";

const AddCar = () => {
  const initialCarState = {
    rendszam: "",
    marka: "",
    tipus: "",
    evjarat: 0,
    motorterfogat: 0,
    uzemanyagfajta: "",
    km_allas: 0,
    szin: "",
    ar: 0
  };
  const [car, setCar] = useState<CarData>(initialCarState);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  const saveCar = () => {
    var data = {
        rendszam: car.rendszam,
        marka: car.marka,
        tipus: car.tipus,
        evjarat: car.evjarat,
        motorterfogat: car.motorterfogat,
        uzemanyagfajta: car.uzemanyagfajta,
        km_allas: car.km_allas,
        szin: car.szin,
        ar: car.ar
    };

    CarService.create(data)
      .then((response: any) => {
        setCar({
            rendszam: response.data.rendszam,
            marka: response.data.marka,
            tipus: response.data.tipus,
            evjarat: response.data.evjarat,
            motorterfogat: response.data.motorterfogat,
            uzemanyagfajta: response.data.uzemanyagfajta,
            km_allas: response.data.km_allas,
            szin: response.data.szin,
            ar: response.data.ar
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const newCar = () => {
    setCar(initialCarState);
    setSubmitted(false);
  };

  return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'3xl'}>Adja meg az autó paramétereit</Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="rendszam">
                  <FormLabel>Rendszám</FormLabel>
                  <Input type="email" />
                </FormControl>

                <FormControl id="marka">
                  <FormLabel>Márka</FormLabel>
                  <Input type="password" />
                </FormControl>

                <FormControl id="tipus">
                  <FormLabel>Típus</FormLabel>
                  <Input type="password" />
                </FormControl>

                <FormControl id="evjarat">
                  <FormLabel>Évjárat</FormLabel>
                  <Input type="password" />
                </FormControl>

                <FormControl id="motorterfogat">
                  <FormLabel>Motortérfogat</FormLabel>
                  <Input type="password" />
                </FormControl>

                <FormControl id="uzemanyagfajta">
                  <FormLabel>Üzemanyagfajta</FormLabel>
                  <Input type="password" />
                </FormControl>

                <FormControl id="km_allas">
                  <FormLabel>KM óra állása</FormLabel>
                  <Input type="password" />
                </FormControl>

                <FormControl id="szin">
                  <FormLabel>Szín</FormLabel>
                  <Input type="password" />
                </FormControl>

                <FormControl id="ar">
                  <FormLabel>Ár</FormLabel>
                  <Input type="password" />
                </FormControl>
                  <Button
                    bg={'teal.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
                    }}>
                    Autó hozzáadása
                  </Button>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      );
    }

export default AddCar;
