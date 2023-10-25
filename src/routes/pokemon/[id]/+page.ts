import { getPokemonById } from "$lib/stores/pokemon.js";

export async function load({ params }) {
  const id = Number(params.id);
  const p = getPokemonById(id);
  return {
    p,
  };
}
