import Image from "next/image";
import { use } from "react";
import { getPokemons } from "../getPokemons";
import { PokemonResult } from "../PokemonData";

async function getPokemon(name: string): Promise<PokemonResult> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

export default function Page({ params }: { params: { name: string } }) {
  const { name, sprites } = use(getPokemon(params.name));
  const img = sprites.other.home.front_default;

  return (
    <div className="max-w-lg">
      <h1 className="text-3xl capitalize">{name}</h1>
      <Image alt={`Artwork for ${name}`} src={img} height={1000} width={1000} />
    </div>
  );
}

export async function generateStaticParams() {
  const pokes = await getPokemons();
  return pokes.results.map((p) => ({ name: p.name }));
}
