<script lang="ts">
  import type { Pokemon } from "$lib/types";
  import { fade } from 'svelte/transition';
  export let p: Pokemon
</script>

    <a class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href={`/pokemon/${p.id}`} transition:fade>
        <img class="h-40 w-40 " src={p.image} alt={p.name}/>
        <h2 class="uppercase text-2xl">{p.id}. {p.name}</h2>
    </a>