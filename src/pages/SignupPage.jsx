import { AuthPagesWrapper } from 'components/ForgotPassword/ForgotPassword.styled';
import { SignUpPage } from 'components/SignUpPage/SignUpPage';

export default function Register() {
  return (
    <AuthPagesWrapper>
      <SignUpPage />
    </AuthPagesWrapper>
  );
}
