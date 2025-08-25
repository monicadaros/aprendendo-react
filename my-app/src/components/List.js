import Item from "./Item"

function List (){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ford" ano_lancamento={2010}/>
                <Item marca="Fiat" ano_lancamento={2022}/>
                <Item marca="Citroen" ano_lancamento={2005}/>
            </ul>
        </>
    )
}

export default List