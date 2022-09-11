import { Button, TextField } from '@material-ui/core';
import React from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/urls';
import useForm from '../../hooks/useForm';
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData';
import { comentar } from '../../services/post';
import { SingupButton } from '../LoginPage/styled';

export default function Post() {
  useProtectedPage();
  const params = useParams();

  const [form, onChange, clear] = useForm({body: "" })

  const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)


const commentsMap = comments && comments.map((comment) =>{
  console.log(comment)
  return(
    <div>
      <p>{comment.username}: {comment.body}</p>
    </div>
  )
})


  const [posts] = useRequestData([], `${BASE_URL}/posts`)
 
  const onSubmitForm = (event) => {
    event.preventDefault()
    comentar(form, clear, getComments, params.id)
}  
  const filterPostoByID = posts && posts.filter((post) => {
    return post.id === `${params.id}`
  }).map((post) => {
    return (
      <div>
        <p>{post.username}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
        <p>{post.voteSum}</p>
        <p>{post.commentCount}</p>
      </div>
    )
  })
  console.log((params));
  return (
    <div>
      {filterPostoByID}
      <form onSubmit={onSubmitForm}>
            <TextField //input do @mui com as próprias propriedades
                    name={'body'}
                    value={form.body}
                    onChange={onChange}
                    label={'Comentário'}
                    variant={'outlined'}
                    margin={'dense'}
                    fullWidth />
                    <SingupButton>
                    <Button
                        type={'submit'}
                        variant='contained'
                        color='primary'
                        margin={'normal'}
                        fullWidth>
                        Comentar
                    </Button>
                </SingupButton>
      </form>
      {commentsMap}
    </div>
  )
}
