import * as React from "react"
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
    Container,
  } from '@chakra-ui/react';

const DeleteCar = () => {
    
        
return(
<Flex
    minH={'100vh'}
    align={'top'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'3xl'}>Eladott autó törlése</Heading>
            </Stack>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>

                    <FormControl id="rendszam">
                    <FormLabel>Rendszám</FormLabel>
                    <Input type="email"/>
                    </FormControl>

                    <Button
                    bg={'teal.400'}
                    color={'white'}
                    _hover={{
                      bg: 'red',
                    }}>
                    Törlés
                    </Button>
                </Stack>
            </Box>
        </Stack>
</Flex>
);
}
export default DeleteCar;