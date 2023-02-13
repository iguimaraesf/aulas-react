import { useCallback, useEffect, useMemo, useState } from "react"
export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const emailLength = useMemo(() => {
        // Não tem a função para definir um valor. Também executa quando uma das dependências muda.
        console.log('Executou')
        return email.length * 1000;
    }, [email.length])
    const handleEntrar = useCallback(() => {
        // useCallback - a função só é reconstruida se um dos estados mudar
        console.log("useCallback: " + email)
    }, [email])
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
                <p>Quuantidade de caracteres no e-mail: {emailLength}</p>
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