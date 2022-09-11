import React from 'react'
import CardActionArea  from '@material-ui/core/CardActionArea'
// import CardMedia  from '@material-ui/core/CardMedia'
import Typography  from '@material-ui/core/Typography'
import { CardContainer } from './styled'

export default function FeedCard(props) {
  const {title, username, body, onClickDetails, postId} = props
  return (
    <CardContainer>
        <CardActionArea onClick={()=> onClickDetails(postId)}>
        <span>
              {username}:
              <div>
              <Typography align={'center'}>{title}:</Typography>
              <Typography align={'center'}>{body}</Typography>
              </div>
              </span>
        </CardActionArea>
    </CardContainer>
  )
}
