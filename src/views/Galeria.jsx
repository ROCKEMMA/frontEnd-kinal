import { useEffect, useState } from 'react'
import { Carta } from '../modulo/Carta';
import './galeria.css'

function Galerias(){

    // Consulta a la api
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

        const consultaApi = async () => {
            try {
                const consultaPokemons = await fetch('https://backend-proyecto-kinal.onrender.com/pokemons?10');
                const datos = await consultaPokemons.json();
                setPokemons(datos);
            } catch (error) {
                console.log(`super error: ${error}`)
            }
        }

        consultaApi();

    }, []);


    return (
        <>
            
            <section className='galeria-cartas'>
            {

                (pokemons.length != 0 ? (
                    pokemons.results.map((datosPokemon,i)=>(
                        < Carta key = { i } datosPokemon = { datosPokemon } />

                    ))                ): (console.log("B")))   

            }                
            </section>

        </>
    );
}

export { Galerias }