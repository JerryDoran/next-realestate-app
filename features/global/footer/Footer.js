import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { HiHomeModern } from 'react-icons/hi2';
import { services, about, workWithUs, ourOffices } from './footerLinks';

export default function Footer() {
  return (
    <Box backgroundColor="blue.600">
      <Box
        maxWidth="1280px"
        margin="auto"
        paddingY="3rem"
        paddingX={{ base: '2rem', sm: '1rem' }}
      >
        <SimpleGrid
          columns="4"
          color="whiteAlpha.700"
          gap="1.7rem"
          minChildWidth="150px"
        >
          <Flex flexDirection="column">
            <FooterHeader title="Services" />
            {services.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="About" />
            {about.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Our Offices" />
            {ourOffices.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </Flex>
          <Flex flexDirection="column">
            <FooterHeader title="Work With Us" />
            {workWithUs.map((link) => (
              <FooterLink key={link.name} {...link} />
            ))}
          </Flex>
        </SimpleGrid>
      </Box>
      <Box
        backgroundColor="blue.900"
        display="flex"
        padding="2rem"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        color="white"
      >
        <Box display="flex" gap="2" alignItems="center">
          <HiHomeModern />
          <Text fontSize="lg" fontWeight="black">
            KARENA
          </Text>
        </Box>
        <Text marginTop="1rem" fontSize="xs" textAlign="center">
          All rights reserved - Copyright KARENA
        </Text>
      </Box>
    </Box>
  );
}

export function FooterLink({ name, link }) {
  return (
    <Text marginY="5px">
      <Link href={link}>{name}</Link>
    </Text>
  );
}

export function FooterHeader({ title }) {
  return (
    <Text as="h4" fontWeight="light" fontSize="xl" marginBottom="1rem">
      {title}
    </Text>
  );
}
