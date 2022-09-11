import React from 'react'
import FeedCard from '../../components/FeedCard/FeedCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { CardContainer } from './styled'
import {BASE_URL} from '../../constants/urls'
import CreatePostCard from '../../components/CreatePostCard/CreatePostCard'
import { goToPost } from '../../routes/coordinator'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Feed() {
  useProtectedPage()
  const navigate = useNavigate()
  const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)
  
  const onClickDetails = (id) =>{
    goToPost(navigate, id)
  }

  const handleVote = (postId, direction) =>{
    const headers = {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }
    const body = {
      direction: direction
    }
    if(direction === 1){
      axios.post(`${BASE_URL}/posts/${postId}/votes`, body, headers)
      .then((res) =>{
        console.log(res)
      })
      .catch((err) =>{
        console.log(err);
      })
    } else if(direction === -1){
      axios.put(`${BASE_URL}/posts/${postId}/votes`, body, headers)
      .then((res) =>{
        console.log(res)
      })
      .catch((err) =>{
        console.log(err);
      })
    } else{
      axios.delete(`${BASE_URL}/posts/${postId}/votes`, headers)
      .then((res) =>{
        console.log(res)
      })
      .catch((err) =>{
        console.log(err);
      })
    }
  }

  const like = (postId, userVote) =>{
    if(userVote === 1){
      handleVote(postId)
    } else {
      handleVote(postId, 1)
    }
  }
  const dislike = (postId, userVote) =>{
    if(userVote === -1){
      handleVote(postId)
    } else {
      handleVote(postId, -1)
    }
  }

  return (
    <div>
    <CreatePostCard getPosts={getPosts}/>
    <CardContainer>
      {posts && posts.map((post) => {
        return(
      <div key={post.id}>
      <FeedCard title={post.title} username={post.username} body={post.body} onClickDetails={onClickDetails} postId={post.id} />
      <button onClick={()=> like(post.id, post.userVote)}>Like</button>
      <button onClick={()=> dislike(post.id, post.userVote)}>Dislike</button>
      <p>{post.voteSum}</p>
      <p>{post.commentCount}</p>
      </div>
      
    )
  })}
    </CardContainer>
    </div>
  )
}
