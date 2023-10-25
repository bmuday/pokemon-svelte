<svelte:head>
    <title>SvelteKit Pokedex</title>
</svelte:head>

<script lang="ts">
  import PokemonCard from "$lib/components/PokemonCard.svelte";
  import { getPokemon, pokemon } from "$lib/stores/pokemon";
  import type { Pokemon } from "$lib/types";
  import { onMount } from "svelte";

  onMount(() => {
    getPokemon()
  })
  
  let searchTerm: string = ""
  let filteredPokemon: Pokemon[] = []

  $: {
    if(searchTerm) {
        filteredPokemon = $pokemon.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    } else {
        filteredPokemon = [...$pokemon]
    }
  }
</script>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to SvelteKit Pokedex</h1>
<input type="text" class="w-full rounded-md text-lg p-4 border-2 border-gray-200" bind:value={searchTerm} placeholder="Search pokemon">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as p(p.id)}
        <PokemonCard {p}/>
    {/each}
</div>
