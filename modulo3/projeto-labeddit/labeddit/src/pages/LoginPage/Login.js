import React from 'react'
import Button from '@material-ui/core/Button';
import {ScreenContainer,LogoImg, InputsContainer, SingupButton} from './styled'
import logo from '../../assets/logo.png'
import LoginForm from './LoginForm';
import { goToSignUp } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import useUnProtectedPage from '../../hooks/useUnProtectedPage';

export default function Login() {
  useUnProtectedPage()
  const navigate = useNavigate();

  return (
    <ScreenContainer>
      <LogoImg src={logo} />
      <InputsContainer>
     <LoginForm />
      <SingupButton>
      <Button 
      onClick={() => goToSignUp(navigate)}
      variant='text'
      color='primary'
      margin={'normal'}
      fullWidth>
        Ainda sem conta? Cadastre-se
      </Button>
      </SingupButton>
      </InputsContainer>
    </ScreenContainer>
  )
}
