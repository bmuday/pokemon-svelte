<script lang="ts">
  import type { PokemonDetails } from "$lib/types";

  export let data: {p: PokemonDetails}
</script>

<svelte:head>
	<title>Pokedex - {data.p.name}</title>
</svelte:head>

<div class="flex flex-col items-center">

    <h1 class="text-4xl text-center my-8 upercase">{data.p.name}</h1>
    <p>Type: <strong>{data.p.type}</strong> | Height: <strong>{data.p.height}</strong> | Weight: <strong>{data.p.weight}</strong> | Base Experience: <strong>{data.p.base_experience}</strong></p>
    <img class="card-image" src={data.p.image} 
    alt={data.p.name}
    />
</div>

