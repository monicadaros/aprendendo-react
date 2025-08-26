import { useState } from "react";

function Condicional () {

    const [email, setEmail] = useState ()
    const [userEmail, setUserEmail] = useState ()

    function enviarEmail (e){
        e.preventDefault()
        setUserEmail(email)
        console.log (userEmail)
    }

    
    function limparEmail (e){
        setUserEmail("")
 
    }


    return (
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu email..." onChange={(e) => setEmail (e.target.value)} />
            </form>
            <form>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é : {userEmail}</p>
                    <button onClick={limparEmail}>Limar E-mail</button>
                </div>
            )}
            </form>
        </div>
    )
}

export default Condicional