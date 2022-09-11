import React from 'react'
import { ErrorContainer, ErrorImg } from './styled'
import squirtle from '../../assets/squirtle.gif'
import Typography  from '@material-ui/core/Typography'

export default function Error() {
  return (
    <ErrorContainer>
      <ErrorImg src={squirtle} />
      <Typography color={'primary'} variant={'h4'} align={'center'}>ERROR 404 - Página não encontrada</Typography>
    </ErrorContainer>
  )
}

