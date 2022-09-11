import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToBack } from '../../routes/coordinator';
import { Body, GlobalStyle, MainContainer, HeaderButtonDiv, TripContainer, SendContainer, InputLogin } from './styles';
import logo from '../../imgs/FOGUETE.png'
import axios from 'axios';
import useForm from '../../hooks/useForm'
// import IconButton from "@material-ui/core/IconButton";
// import Visibility from "@material-ui/icons/Visibility";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
// import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



export default function Login() {
  // const [values, setValues] = React.useState({
  //   password: "",
  //   showPassword: false,
  // });
  
  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };
  
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  
  // const handlePasswordChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  const navigate = useNavigate()
  const {form, onChange, clearForm} = useForm({email:""})

  const onSubmitLogin = (event) =>{
    event.preventDefault()
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/login";
    const body ={
      email: form.email,
      password: form.password
    }
    axios.post(url, body)
    .then((response) =>{
      navigate("/admPage")
      // console.log(response.data)
      window.localStorage.setItem("token", response.data.token)//token está setado no localstoragem depois faz getItem para recuperar
      clearForm()
    })
    .catch((error) =>{
      alert("Usuário(a) ou senha incorretos!")
      console.log(error)
    })
  }
  return (
    <Body>
      <GlobalStyle />
      <header>
        <img onClick={() => goToHome(navigate)} src={logo} />
        <HeaderButtonDiv>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        </HeaderButtonDiv>
      </header>
      <main>
        <MainContainer>
          <TripContainer>
            <h1>Login</h1>
          <form onSubmit={onSubmitLogin}>
          <InputLogin
          name='email' 
          value={form.email}
          placeholder="E-mail"
          onChange={onChange}
          required
          type={'email'}
          />
          <InputLogin 
          name='password'
          value={form.password}
          type={'text'}
          placeholder="Senha"
          onChange={onChange}
          required
          pattern={"^.{3,}"}
          title={"Sua senha deve ter no mínimo 3 caracteres"}
          // endAdornment={
          //   <InputAdornment position="end">
          //     <IconButton
          //       onClick={handleClickShowPassword}
          //       onMouseDown={handleMouseDownPassword}
          //     >
          //       {values.showPassword ? <Visibility /> : <VisibilityOff />}
          //     </IconButton>
          //   </InputAdornment>
          // }
          />
          <div>
          <SendContainer>
          <button type='submit'><SendIcon /></button>
          </SendContainer>
          </div>
          </form>
          </TripContainer>
        </MainContainer>
      </main>
    </Body>
  )
}
