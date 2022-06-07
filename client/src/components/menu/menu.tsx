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
            bg={useColorModeValue('gray.700', 'gray.800')}
            color={useColorModeValue('teal.300', 'teal.400')}>
            <Container
              as={Stack}
              maxW={'7xl'}
              py={4}
              direction={{ base: 'column', md: 'row' }}
              spacing={5}
              justify={{ base: 'center', md: 'space-between' }}
              align={{ base: 'center', md: 'center' }}>
              <Stack direction={'row'} spacing={5}>
                <Link href={'/show'}>Eladó autók listája</Link>
                <Link href={'/add'}>Új autó rögzítése</Link>
                <Link href={'/delete'}>Eladott autó törlése</Link>
              </Stack>
              <Link href={'/'}>
              <Text>Csapang Autókereskedés Kft.</Text>
              </Link>
            </Container>
          </Box>
        );
      }

export default Menu;
