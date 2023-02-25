import { Badge, Box, Flex, HStack, Text } from '@chakra-ui/react';
import { usePropertyFormat } from './hooks/usePropertyFormat';
import { TbBed, TbBath, TbRuler } from 'react-icons/tb';
import Link from 'next/link';

export default function PropertyCard(property) {
  const {
    address,
    coverPhoto,
    propertyType,
    price,
    title,
    rooms,
    baths,
    purpose,
    sqSize,
    externalID,
  } = usePropertyFormat(property);

  return (
    <Box marginBottom="4rem" backgroundColor="#fff" borderRadius="md">
      <Link href={`/properties/${externalID}`}>
        <Box
          backgroundImage={`url('${coverPhoto}')`}
          height="250px"
          backgroundPosition="center center"
          backgroundSize="cover"
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          borderTopRightRadius="md"
          borderTopLeftRadius="md"
        >
          <Box margin="1rem">
            <Badge colorScheme="green">{purpose}</Badge>
          </Box>
          <Box
            padding="1rem"
            bgGradient="linear(to-t, #0a0b1cf9, #ffffff00 100%)"
          >
            <Text fontSize="2xl" fontWeight="medium" color="whiteAlpha.900">
              {price}
            </Text>
          </Box>
        </Box>
        <Box padding="1.5rem">
          <Text fontSize="xl" fontWeight="medium" marginBottom="1rem">
            {propertyType}
          </Text>
          <Text fontWeight="light" fontSize="sm" isTruncated>
            {address}
          </Text>
          <Text isTruncated>{title}</Text>
          <HStack spacing="1.3rem" marginTop="1rem">
            <Flex alignItems="center" gap=".3rem">
              <TbBed />
              {rooms}
            </Flex>
            <Flex alignItems="center" gap=".3rem">
              <TbBath />
              {baths}
            </Flex>
            <Flex alignItems="center" gap=".3rem">
              <TbRuler />
              {sqSize}
              <sup>m2</sup>
            </Flex>
          </HStack>
        </Box>
      </Link>
    </Box>
  );
}
