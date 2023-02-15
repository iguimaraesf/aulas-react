import { useRef } from "react"
import { Link } from "react-router-dom"
import { useUsuarioLogado } from "../../shared/hooks"

export const Dashboard = () => {
    // contador somente para exemplo do useRef
    const counterRef = useRef({counter: 0})

    const {nomeDoUsuario, logout} = useUsuarioLogado()

    return (
        <div>
            <p>Minha dashboard</p>
            <p>Usuário logado: {nomeDoUsuario}</p>
            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Mostrar o contador no console</button>
            <button onClick={logout}>Log out!</button>
            <Link to="/entrar">Login</Link>
        </div>
    )
}