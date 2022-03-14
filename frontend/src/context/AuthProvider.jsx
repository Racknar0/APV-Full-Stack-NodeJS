import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/axios'

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [ cargando, setCargando ] = useState(true)
    const [ auth, setAuth ] = useState({})

    useEffect( () => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')

            if(!token) {
                setCargando(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clienteAxios.get('/veterinarios/perfil', config )
                setAuth(data)
            } catch {
                console.log(error.response.data.msg);
                setAuth({})
            }

            setCargando(false)

        }
        autenticarUsuario()
    }, [])

    const cerrarSession = () => {
        localStorage.removeItem('token')
        setAuth({})
    }

    const actualizarPerfil = datos => {
        console.log(datos);
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSession,
                actualizarPerfil
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}



export {
    AuthProvider
}

export default AuthContext