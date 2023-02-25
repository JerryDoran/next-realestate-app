import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import AgentCard from './AgentCard';
import { agents } from './agentData';

export default function Team() {
  return (
    <Box
      maxWidth="1280px"
      margin="0 auto"
      paddingY={{ base: '3rem', md: '6rem' }}
      paddingX={{ base: '1rem', md: '6rem' }}
    >
      <Text
        fontSize={{ base: '4xl', md: '5xl' }}
        lineHeight="shorter"
        fontWeight="light"
        paddingX="2rem"
        textAlign="center"
      >
        Meet The Team
      </Text>
      <Text
        fontSize="2xl"
        fontWeight="light"
        marginTop="1rem"
        marginBottom="3rem"
        paddingX="2rem"
        textAlign="center"
      >
        The best in the industry, at your service 24/7.
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
        gap="1.5rem"
      >
        {agents.map((agent) => (
          <AgentCard key={agent.name} {...agent}>
            Agent Card
          </AgentCard>
        ))}
      </Flex>
    </Box>
  );
}
