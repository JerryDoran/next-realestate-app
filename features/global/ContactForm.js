import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
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
      // padding="2rem"
      borderRadius="md"
      backgroundColor="white"
      color="gray.700"
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl>
          <Input
            marginTop="1.3rem"
            id="name"
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
          />
          <Input
            marginTop="1.3rem"
            id="email"
            type="text"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          <Input
            marginTop="1.3rem"
            id="phone"
            type="email"
            placeholder="Phone"
            {...register('phone', { required: true })}
          />
          <Textarea
            marginTop="1.3rem"
            id="message"
            type="textarea"
            placeholder="Message"
            {...register('message', { required: true })}
          />
          <Checkbox
            marginTop="1.3rem"
            id="us"
            type="checkbox"
            {...register('us', { required: true })}
          >
            <Text fontSize={{ base: 'xs', md: '.9rem' }} color="gray.500">
              I consent to having this website store my details for future
              communication
            </Text>
          </Checkbox>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          fontSize="xl"
          padding="2rem"
          marginTop="2rem"
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
}
