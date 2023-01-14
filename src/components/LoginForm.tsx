import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
} from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import validate from '../utils/validator';

export default function LoginForm() {
  const [visible, setVisible] = useState(false);
  const toggleVisability = () => {
    setVisible(!visible);
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => {
        sessionStorage.setItem('email', values.email);
        sessionStorage.setItem('password', values.password);
      }}
      validate={validate}
    >
      {({
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Stack spacing='4'>
            <FormControl isInvalid={!!(errors.email && touched.email)}>
              <FormLabel fontSize='sm' htmlFor='email'>
                Email address
              </FormLabel>
              <Input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!(errors.password && touched.password)}>
              <HStack justifyContent='space-between' mb='8px'>
                <FormLabel fontSize='sm' mb='0' htmlFor='passsword'>
                  Password
                </FormLabel>
                <Link href='/' color='blue.400' fontSize='xs'>
                  Forgot password?
                </Link>
              </HStack>
              <InputGroup>
                <Input
                  type={visible ? 'text' : 'password'}
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <InputRightElement>
                  <IconButton
                    size='sm'
                    variant='ghost'
                    aria-label='toggle password visibility'
                    icon={visible ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={toggleVisability}
                  />
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button
              type='submit'
              isDisabled={
                !!(errors.email && touched.email) ||
                !!(errors.password && touched.password)
              }
            >
              Sign in
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
