import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function LandingPage() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'teal.400',
                  zIndex: -1,
                }}>
                Csapang
              </Text>
              <br />{' '}
              <Text color={'grey.800'} as={'span'}>
                Autókereskedés Kft.
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              Válogasson Nyíregyháza legjobb autókereskedésének kínálatából
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button 
                as="a" href="/show"
                rounded={'full'}
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.600',
                }}>
               Autók megtekintése
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Landing img'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }