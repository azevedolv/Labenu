import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Subscription from '../pages/Subscription/Subscription'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import CreateTrip from '../pages/CreateTrip/CreateTrip'
import TripDetails from '../pages/TripDetails/TripDetails'

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                    <Route path="subscription" element={<Subscription />} />
                    <Route path="admPage" element={<AdminHomePage />} />
                    <Route path="createTrip" element={<CreateTrip />} />
                    <Route path="tripDetails/:id" element={<TripDetails />} />
                </Routes>
            </BrowserRouter></div>
    )
}
