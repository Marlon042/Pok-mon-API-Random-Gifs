import Link from "next/link"

/* import { LikeButton } from "./LikeButton.jsx" */
const fecthPokemon = (url) => {
    return fetch(url)
      .then(res => res.json())
  }
  
  const fecthPosts = () =>{
    return fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => data.results)
      .then(results => Promise.all(results.map(result => fecthPokemon(result.url))))
  }
  
  export async function ListOfPost() {
    const pokemons = await fecthPosts()
  
    return pokemons.map(pokemon =>(
          <article key={pokemon.id}>
            <Link style={{ textDecoration: 'none' }} href='/pokemons/[id]'as={'/pokemons/${pokemon.id}'}>
             
            <h2 style={{color:'red'}}>{pokemon.id}</h2>
            <h2 style={{color:'#89f'}}>Nombre: {pokemon.name}</h2>
            <h2 style={{color:'#89f'}}> Habilidades: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</h2>
           {/*  <LikeButton id={pokemon.id}></LikeButton> */}
           
           </Link>
          </article>
        ))
  }