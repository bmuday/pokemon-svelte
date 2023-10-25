<script>
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<div class="max-w-6xl mx-auto">
  <Navbar/>
  <slot />
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>