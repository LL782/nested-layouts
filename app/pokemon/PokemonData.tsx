export type PokemonData = {
  results: PokemonResult[];
};

export type PokemonResult = {
  name: string;
  sprites: {
    other: {
      home: {
        front_default: string;
      };
    };
  };
};
