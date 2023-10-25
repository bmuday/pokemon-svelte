<script lang="ts">
  import type { PokemonDetails } from "$lib/types";

  export let data: PokemonDetails
</script>

<svelte:head>
	<title>Pokedex - {data.name}</title>
</svelte:head>

<div class="flex flex-col items-center">

    <h1 class="text-4xl text-center my-8 upercase">{data.name}</h1>
    <p>Type: <strong>{data.type}</strong> | Height: <strong>{data.height}</strong> | Weight: <strong>{data.weight}</strong> | Base Experience: <strong>{data.base_experience}</strong></p>
    <img class="card-image" src={data.image} 
    alt={data.name}
    />
</div>

