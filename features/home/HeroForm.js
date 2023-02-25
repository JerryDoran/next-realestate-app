import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Input,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function HeroForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleFormSubmit(formData) {
    console.log(formData);
  }
  return (
    <Box
      width="100%"
      padding="2rem"
      borderRadius="md"
      backgroundColor="white"
      color="gray.700"
    >
      <Text fontSize="lg" fontWeight="bold">
        Free PDF Guide
      </Text>
      <Text>Complete the form below to download your guide</Text>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl>
          <Input
            marginTop="1.3rem"
            id="name"
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <Text fontSize="xs" color="red.400">
              {errors.name.type}
            </Text>
          )}
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            gap={{ base: '0', md: '2' }}
          >
            <Input
              marginTop="1.3rem"
              id="email"
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <Text fontSize="xs" color="red.400">
                {errors.email.type}
              </Text>
            )}
            <Input
              marginTop="1.3rem"
              id="phone"
              type="text"
              placeholder="Phone"
              {...register('phone', { required: true })}
            />
            {errors.phone && (
              <Text fontSize="xs" color="red.400">
                {errors.phone.type}
              </Text>
            )}
          </Flex>
          <Checkbox
            marginTop="1.3rem"
            id="us"
            type="checkbox"
            placeholder="US"
            {...register('us', { required: true })}
          >
            <Text fontSize={{ base: 'xs', md: '.9rem' }}>
              I consent to having this website store my submitted information
            </Text>
          </Checkbox>
          {errors.us && (
            <Text fontSize="xs" color="red.400">
              {errors.us.type}
            </Text>
          )}
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          width="100%"
          padding="2rem"
          marginTop="2rem"
        >
          Download Now
        </Button>
      </form>
    </Box>
  );
}
