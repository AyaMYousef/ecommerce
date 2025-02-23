import React from 'react'

export default function ProtectedRoute({ children }) {
    if (localStorage.getItem('token'))
        return children
    else
        return <Navigate to={'/login'}></Navigate>

}
