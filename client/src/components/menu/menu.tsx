import {
        Box,
        Container,
        Stack,
        Text,
        Link,
        useColorModeValue
      } from '@chakra-ui/react';
      
    function Menu() {
        return (
          <Box
            bg={useColorModeValue('gray.800', 'gray.900')}
            color={useColorModeValue('teal.300', 'teal.400')}>
            <Container
              as={Stack}
              maxW={'6xl'}
              py={4}
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              justify={{ base: 'center', md: 'space-between' }}
              align={{ base: 'center', md: 'center' }}>
              <Stack direction={'row'} spacing={6}>
                <Link href={'/show'}>Eladó autók listája</Link>
                <Link href={'/add'}>Új autó rögzítése</Link>
                <Link href={'/delete'}>Eladott autó törlése</Link>
              </Stack>
              <Link href={'/'}>
              <Text>Best Car Dealership in Town</Text>
              </Link>
            </Container>
          </Box>
        );
      }

export default Menu;
