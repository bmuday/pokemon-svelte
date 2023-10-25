import type { Pokemon, PokemonDetails } from "$lib/types";
import { writable, type Writable } from "svelte/store";

export const pokemon: Writable<Pokemon[]> = writable([])
let loaded = false
let pokemonDetails: PokemonDetails[] = []

export const getPokemon = async (limit=50) => {
    if(loaded) return
    const url = "https://pokeapi.co/api/v2/pokemon"
    const res = await fetch(`${url}?limit=${limit}`)
    const data = await res.json()

    if(res.ok && data) {
        const loadedPokemon = data.results.map((p: Pokemon, index: number) => {
            return {
                id: index+1,
                name: p.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
            }
        })
        pokemon.set(loadedPokemon)
    }
    loaded = true 
}

export const getPokemonById = async (id: number) => {
	if (pokemonDetails) {
        if(pokemonDetails[id]) return pokemonDetails[id];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const res = await fetch(url);
            const data = await res.json();

            if(res.ok && data) {
                pokemonDetails[id] = {
                    id,
                    name: data.name,
                    height: data.height,
                    weight: data.weight,
                    base_experience: data.base_experience,
                    type: data.types[0].type.name,
                    image: data.sprites["front_default"]
                }
                return pokemonDetails[id]
            }
        } catch (err) {
            console.error(err);
            return null;
        }
    }
};