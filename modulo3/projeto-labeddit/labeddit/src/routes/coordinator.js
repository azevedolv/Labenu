export const goToLogin = (navigate) =>{
    navigate("/login")
  }
 export  const goToBack = (navigate) =>{
    navigate(-1)
  }
 export const goToFeed = (navigate) =>{
    navigate("/")
  }
 
 export  const goToSignUp = (navigate) =>{
    navigate("/signup")
  }
  export  const goToPost = (navigate, id) =>{
    navigate(`/post/${id}`)
  }
//   export  const goToCreateTrip = (navigate) =>{
//     navigate("/createTrip")
//   }