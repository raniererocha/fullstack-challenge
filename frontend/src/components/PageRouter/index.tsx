import React from 'react'
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import SignUp from '../../pages/SignUp'



export default function PageRouter() {
    return(
        <Routes>
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route element={<ProtectedRoutes redirectTo='/signin' />}>
                <Route path='/' element={<Home />} />
                <Route path='/adm' element={<h1>Administrador</h1>} />
            </Route>
        </Routes>
    )
}

interface ProtectedRoutesProps {
    redirectTo: string
}

function ProtectedRoutes({redirectTo}: ProtectedRoutesProps) {
    const isAuthenticated = true
    return isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />
}