import Link from 'next/link';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { HiHomeModern } from 'react-icons/hi2';
import { navigationLinks } from '../navigationLinks';

export default function NavigationDesktop() {
  return (
    <Box
      color="blue.600"
      paddingY="2rem"
      backgroundColor="white"
      display={{ base: 'none', md: 'block' }}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <Flex alignItems="center" justifyContent="space-between">
          <Link href="/">
            <Box display="flex" gap="2" alignItems="center">
              <HiHomeModern size="30" />
              <Text fontSize="2xl" fontWeight="black">
                KARENA
              </Text>
            </Box>
          </Link>
          <Flex gap="12" alignItems="center" fontWeight="medium">
            {navigationLinks.map((item) => (
              <NavigationLink key={item.title} {...item} />
            ))}
            <Button
              padding="1rem"
              colorScheme="twitter"
              fontSize=".8rem"
              fontWeight="medium"
            >
              CREATE LISTING
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export function NavigationLink({ title, link, icon }) {
  return (
    <Link href={link}>
      <Flex alignItems="center" gap=".5rem">
        {icon}
        {title}
      </Flex>
    </Link>
  );
}
