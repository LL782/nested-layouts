import { PokemonData } from "./PokemonData";

export async function getPokemons(): Promise<PokemonData> {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  return res.json();
}
