import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { SingupButton } from './styled'
import { login } from '../../services/user';
import { useNavigate } from 'react-router-dom';
export default function LoginForm() {
    const [form, onChange, clear] = useForm({ email: "", password: "" })//puxando a estrutura do useState e do OnChange
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault()//importante para não mostrar a senha na url após o submit
        login(form, clear, navigate)
    }
    
  
    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <TextField //input do @mui com as próprias propriedades
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    margin={'dense'}
                    fullWidth
                    type={'email'} />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    variant={'outlined'}
                    margin={'dense'}
                    fullWidth
                    type={'password'} />
                <SingupButton>
                    <Button
                        // onClick={() => goToSignUp(navigate)}
                        type={'submit'}
                        variant='contained'
                        color='primary'
                        margin={'normal'}
                        fullWidth>
                        Login
                    </Button>
                </SingupButton>
            </form></div>
    )
}
