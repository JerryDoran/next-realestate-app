import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { TbMapPin } from 'react-icons/tb';
import { usePropertyFormat } from '../../features/global/hooks/usePropertyFormat';
import TextContentBox from '../../features/global/TextContentBox';
import { getProperty } from '../../features/property/api/getProperty';
import PropertyMatterPortEmbed from '../../features/property/PropertyMatterPortEmbed';
import PropertyStats from '../../features/property/PropertyStats';
import PropertyThumbSlider from '../../features/property/PropertyThumbSlider';
import PropertyVideoEmbed from '../../features/property/PropertyVideoEmbed';

export default function SingleProperty({ property }) {
  const {
    address,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
    photos,
    description,
    coverVideo,
    panorama,
    amenities,
  } = usePropertyFormat(property);

  return (
    <Box backgroundColor="#f7f8f9" paddingY="3rem">
      <Grid
        templateColumns="repeat(6, 1fr)"
        gap="5"
        maxWidth="1280px"
        margin="0 auto"
      >
        <GridItem colSpan="6">
          <Text
            fontSize="3xl"
            fontWeight="medium"
            color="blue.800"
            textAlign={{ base: 'center', md: 'left' }}
          >
            {propertyType} {title}
          </Text>
          <Flex
            fontSize="xl"
            color="blue.600"
            textAlign="center"
            alignItems="center"
            flexDirection={{ base: 'column', md: 'row' }}
            gap=".5rem"
            marginY={{ base: '1rem', md: '0' }}
          >
            <TbMapPin />
            <Text fontWeight="light">
              {address} - ID:{externalID}
            </Text>
            <Badge colorScheme="green">{purpose}</Badge>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3 }}>
          <PropertyThumbSlider photos={photos} />
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3 }}>
          <PropertyStats
            rooms={rooms}
            baths={baths}
            price={price}
            sqSize={sqSize}
          />
          <TextContentBox title="Description">
            <Text
              fontWeight="light"
              color="gray.600"
              fontSize="1rem"
              noOfLines="4"
            >
              {description}
            </Text>
          </TextContentBox>
          <TextContentBox title="Amenities">
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              fontWeight="light"
              color="gray600"
              fontSize="1rem"
            >
              {amenities.length
                ? amenities.map((item) => <Text key={item}>{item}</Text>)
                : 'Please contact us for more info.'}
            </SimpleGrid>
          </TextContentBox>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3 }}>
          <TextContentBox title="Video Walkthrough">
            <PropertyVideoEmbed coverVideo={coverVideo} />
          </TextContentBox>
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 3 }}>
          <TextContentBox title="3D Virtual Tour">
            <PropertyMatterPortEmbed panorama={panorama} />
          </TextContentBox>
        </GridItem>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps(context) {
  // const property = require('../../features/data/property');
  const { id } = context.query;

  const property = await getProperty(id);

  return {
    props: {
      property,
    },
  };
}
