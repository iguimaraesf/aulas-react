import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Login = () => {
    const [email, setEmail] = useState('ze@meio.com')
    const [password, setPassword] = useState('')
    const handleEntrar = () => {
        console.log(email)
    }
    return (
        <div>
            <form>
                <label>
                    <span>E-mail</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    )
}