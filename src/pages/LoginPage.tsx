import { Card } from '@chakra-ui/react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <Card
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      p='4'
      mt='32'
      marginInline='auto'
    >
      <LoginForm />
    </Card>
  );
}
