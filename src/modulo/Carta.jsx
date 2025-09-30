import './carta.css'
function Carta({datosPokemon}){

    return(
        <div className="carta">

            {
                console.log(datosPokemon)
            }
            <p className='nombre'>{datosPokemon.name}</p>
            <p>{datosPokemon.base_experience}</p>
            

        </div>
    );
}

export { Carta }