import {
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';

export default function LoginPage() {
  return (
    <Card
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      p="4"
      mt="32"
      marginInline="auto"
    >
      <form>
        <Stack spacing="4">
          <FormControl>
            <FormLabel fontSize="sm">Email address</FormLabel>
            <Input type="email" placeholder="name@example.com" />
          </FormControl>
          <FormControl>
            <HStack justifyContent="space-between" mb="8px">
              <FormLabel fontSize="sm" mb="0">
                Password
              </FormLabel>
              <Link href="/" color="blue.400" fontSize="xs">
                Forgot password?
              </Link>
            </HStack>
            <Input type="password" placeholder="password" />
          </FormControl>
          <Button type="submit">Sign in</Button>
        </Stack>
      </form>
    </Card>
  );
}
