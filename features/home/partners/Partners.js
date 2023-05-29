import { Image, SimpleGrid } from '@chakra-ui/react';
import { partners } from './partnersData';

export default function Partners() {
  return (
    <SimpleGrid columns={partners.length} margin="0 auto" minChildWidth="150px">
      {partners.map((partner) => (
        <Image
          key={partner}
          src={partner}
          alignSelf="center"
          padding={{ base: '2rem', md: '3rem' }}
          filter="grayscale(1)"
          opacity=".4"
        />
      ))}
    </SimpleGrid>
  );
}
