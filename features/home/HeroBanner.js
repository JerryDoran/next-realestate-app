import { Box, Fade, Text } from '@chakra-ui/react';
import HeroForm from './HeroForm';

export default function HeroBanner() {
  return (
    <Fade in>
      <Box
        position="relative"
        minHeight={{ base: '100vh', sm: '60vh' }}
        backgroundImage={`url('https://images.pexels.com/photos/3623770/pexels-photo-3623770.jpeg?auto=compress&cs=tinysrgb&w=1600')`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundAttachment="fixed"
      >
        <Box
          position="absolute"
          width="100%"
          height="100%"
          opacity=".7"
          backgroundColor="blue.900"
        />
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="center"
          justifyContent={{ base: 'center', md: 'space-between' }}
          maxWidth="1280px"
          position="absolute"
          color="white"
          fontWeight="light"
          left="0"
          right="0"
          top="0"
          bottom="0"
          margin="0 auto"
          padding="2rem"
        >
          <Box
            display={{ base: 'none', md: 'block' }}
            width={{ base: '100%', sm: '50%' }}
            textAlign={{ base: 'center', sm: 'left' }}
            marginBottom={{ base: '2rem', sm: '0' }}
          >
            <Text
              fontSize={{ base: '4xl', sm: '5xl' }}
              lineHeight="shorter"
              marginBottom="1.5rem"
            >
              Download our new <strong>Property Buying Guide</strong> today.
            </Text>
            <Text fontSize={{ base: 'lg', md: '2xl' }}>
              A free PDF with our best secrets for evaluating property purchase,
              calculating profit and so much more{' '}
            </Text>
          </Box>
          <Box width={{ base: '100%', sm: 'auto' }}>
            <HeroForm />
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
