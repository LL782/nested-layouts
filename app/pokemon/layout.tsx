import { ReactNode, use } from "react";
import NavLink from "../../components/NavLink";
import { getPokemons } from "./getPokemons";
import { PokemonData } from "./PokemonData";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { results } = use<PokemonData>(getPokemons());

  return (
    <div className="flex">
      <ul className="pr-10 text-sm">
        {results.map(({ name }, i) => (
          <li key={`${name}_${i}`} className="capitalize">
            <NavLink href={`/pokemon/${name}`}>{name}</NavLink>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
