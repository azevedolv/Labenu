 export const goToAdmPage = (navigate) =>{
    navigate("/admPage")
  }
 export  const goToBack = (navigate) =>{
    navigate(-1)
  }
 export const goToHome = (navigate) =>{
    navigate("/")
  }
 export const goToLogin = (navigate) =>{
    navigate("/login")
  }
 export  const goToSubscription = (navigate) =>{
    navigate("/subscription")
  }
  export  const goToTripDetails = (navigate, id) =>{
    navigate(`/tripDetails/${id}`)
  }
  export  const goToCreateTrip = (navigate) =>{
    navigate("/createTrip")
  }