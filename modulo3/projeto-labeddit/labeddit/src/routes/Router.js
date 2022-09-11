import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/LoginPage/Login'
import SignUp from '../pages/SignUpPage/SignUp'
import Feed from '../pages/FeedPage/Feed'
import Post from '../pages/PostPage/Post'
import Error from '../pages/ErrorPage/Error'
import Header from '../components/Header/Header'

export default function Router() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route index element={<Feed />}/>
        <Route path='/post/:id' element={<Post />}/>
        <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
  )
}
