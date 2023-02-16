import { createContext, useCallback, useEffect, useState } from "react";

interface UsuarioLogadoContextData {
    nomeDoUsuario: string
    logout: () => void
    children?: React.ReactNode
}
export const UsuarioLogadoContext = createContext<UsuarioLogadoContextData>({} as UsuarioLogadoContextData)

export const UsuarioLogadoProvider: React.FC<UsuarioLogadoContextData> = ({children}) => {
    const [ nome, setNome ] = useState('...nada...')

    useEffect(() => {
        setTimeout(() => {
            setNome('Ivan')
        }, 5000)
    })
    const handleLogout = useCallback(() => {
        console.log("logout executou")
    }, [])
    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}