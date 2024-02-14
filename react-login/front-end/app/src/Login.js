import { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [user, setUser] = useState(null)
    
    const handleLogin = async (e) => {

        e.preventDefault()

       try {
        const response = await axios.post("http://localhost:3001/login",
        JSON.stringify({email, password}),
        {
            headers : {'Content-Type' : 'application/json'}
        }
        )

        console.log(response.data)
        setUser(response.data)

       } catch (error) {
            if(!error.response) {
                setError("Erro ao acessar o Servidor...")
            } else if (error.response.status == 401) {
                setError("Usuário ou senha inválidos")
            }
       }
    }

    const handleLogout = async (e) => {
        e.preventDefault()
        setUser(null)
    }

    return (
     <div>
        <div className="login-form-wrap">
            {user == null ?
            (<div>
                <h2>Login</h2>
            <form className="login-form">
                <input type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email" required/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password" required/>
                <button onClick={(e) => handleLogin(e)} type="submit" className="btn-login">Login</button>
            </form>
            <p>{error}</p>
            </div>)
            :
            (<div>
                <h2>Olá, {user.name}</h2>
                <button className="btn-login" onClick={(e) => handleLogout(e)}>Logout</button>
            </div>)}
        </div>
   </div>
    )
   }

   export default Login
