import React from 'react'
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'

export default function PageRouter() {
    return(
        <Routes>
            <Route path='/signin' element={<h1>Login</h1>} />
            <Route path='/signup' element={<h1>Cadastro</h1>} />
            <Route element={<ProtectedRoutes redirectTo='/login' />}>
                <Route path='/' element={<h1>Home</h1>} />
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