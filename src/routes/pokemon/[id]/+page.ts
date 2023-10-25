import { getPokemonById } from "$lib/stores/pokemon.js";

export async function load({ params }) {
  const id = Number(params.id);
  const data = getPokemonById(id);
  return data;
}
