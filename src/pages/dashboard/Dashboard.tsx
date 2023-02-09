import { Link } from "react-router-dom"

export const Dashboard = () => {
    return (
        <div>
            <p>Minha dashboard</p>
            <Link to="/entrar">Login</Link>
        </div>
    )
}