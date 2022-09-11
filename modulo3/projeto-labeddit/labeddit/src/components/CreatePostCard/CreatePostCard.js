import { Button, TextField } from '@material-ui/core'
import React from 'react'
import useForm from '../../hooks/useForm'
import { SingupButton } from '../../pages/LoginPage/styled'
import { postar } from '../../services/post'

export default function CreatePostCard({getPosts}) {
    const [form, onChange, clear] = useForm({ title: "", body: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()//importante para não mostrar a senha na url após o submit
        postar(form, clear, getPosts)
    }
  return (
    <div>
         <form onSubmit={onSubmitForm}>
                <TextField //input do @mui com as próprias propriedades
                    name={'title'}
                    value={form.title}
                    onChange={onChange}
                    label={'Título'}
                    variant={'outlined'}
                    margin={'dense'}
                    fullWidth
                    type={'text'} />
                    <TextField //input do @mui com as próprias propriedades
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    label={'Post'}
                    variant={'outlined'}
                    margin={'dense'}
                    fullWidth
                    type={'text'} />
                <SingupButton>
                    <Button
                        // onClick={() => goToSignUp(navigate)}
                        type={'submit'}
                        variant='contained'
                        color='primary'
                        margin={'normal'}
                        fullWidth>
                        Postar
                    </Button>
                </SingupButton>
            </form>
    </div>
  )
}
