import { Box, SimpleGrid } from '@chakra-ui/react';
import { getProperties } from '../../features/global/api/getProperties';
import PropertyCard from '../../features/global/PropertyCard';

export default function Properties({ properties }) {
  return (
    <Box backgroundColor="#f7f8f9" padding="3rem">
      <Box maxWidth="1280px" margin="0 auto">
        <SimpleGrid
          columns={{ base: '1', md: '3' }}
          gap={{ base: '0', sm: '2rem' }}
        >
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  // const { hits } = require('../../features/data/properties');
  const properties = await getProperties(20);

  return {
    props: {
      properties: properties,
    },
  };
}
