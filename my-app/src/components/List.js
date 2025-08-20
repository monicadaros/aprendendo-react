import Item from "./Item"

function List (){
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ford"/>
                <Item marca="Fiat"/>
            </ul>
        </>
    )
}

export default List