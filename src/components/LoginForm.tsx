import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';

export default function LoginForm() {
  return (
    <form>
      <Stack spacing='4'>
        <FormControl>
          <FormLabel fontSize='sm' htmlFor='email'>
            Email address
          </FormLabel>
          <Input type='email' placeholder='name@example.com' name='email' />
        </FormControl>
        <FormControl>
          <HStack justifyContent='space-between' mb='8px'>
            <FormLabel fontSize='sm' mb='0' htmlFor='passsword'>
              Password
            </FormLabel>
            <Link href='/' color='blue.400' fontSize='xs'>
              Forgot password?
            </Link>
          </HStack>
          <Input type='password' placeholder='password' name='password' />
        </FormControl>
        <Button type='submit'>Sign in</Button>
      </Stack>
    </form>
  );
}
