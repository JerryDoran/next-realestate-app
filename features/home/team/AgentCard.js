import { Box, Image, Text } from '@chakra-ui/react';

export default function AgentCard({ name, title, image, description }) {
  return (
    <Box
      backgroundColor="#f1f1f1"
      padding="2rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      mb={{ base: '1rem', md: '0' }}
      borderRadius="md"
      shadow="xl"
    >
      <Image
        src={image}
        width="10rem"
        height="10rem"
        objectFit="cover"
        borderRadius="full"
        marginBottom="2rem"
        shadow="md"
      />
      <Text color="blue.400" fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <Text color="blue.600" fontSize="lg">
        {title}
      </Text>
      <Text
        fontSize="md"
        fontWeight="light"
        noOfLines="4"
        marginTop="1rem"
        color="gray.600"
      >
        {description}
      </Text>
    </Box>
  );
}
