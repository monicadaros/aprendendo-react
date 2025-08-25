function Evento ({numero}){

    function meuEvento(){
        console.log(`Opa! Fui ativado ${numero}`)
    }

    return (
        <>
        <p>Clique para disparar o evento</p>
        <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento