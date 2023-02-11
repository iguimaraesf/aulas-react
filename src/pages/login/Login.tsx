import { useEffect, useState } from "react"
export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEntrar = () => {
        console.log(email)
    }
    useEffect(() => {
        // executa quando o EMAIL é alterado... e na carga da página
        console.log(email)
    }, [email])
    useEffect(() => {
        // executa quando a SENHA é alterada... e na carga da página
        console.log(password)
    }, [password])
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