import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { TbQuote } from 'react-icons/tb';

export default function TestimonialCard({ name, company, image, testimonial }) {
  return (
    <Box
      backgroundColor="#fff"
      padding="3rem"
      display="flex"
      flexDirection="column"
      marginBotton={{ base: '1rem', md: '0' }}
      borderRadius="md"
      shadow="xl"
    >
      <Box>
        <TbQuote size="40" color="#4299e1" />
      </Box>
      <Text fontSize="lg" color="gray.500" marginY="1.8rem">
        {testimonial}
      </Text>
      <Flex gap="1rem" alignItems="center">
        <Image
          src={image}
          width="6rem"
          height="6rem"
          objectFit="cover"
          borderRadius="full"
        />
        <Box>
          by <Text as="span">{name}</Text>
          <Text
            fontSize="lg"
            fontStyle="italic"
            fontWeight="light"
            color="gray.600"
          >
            company - {company}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
