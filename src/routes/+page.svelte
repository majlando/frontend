<script>
  import { onMount } from 'svelte';
  import { getBands } from '$lib/api';

  let bands = [];
  let fridayBands = [];
  let saturdayBands = [];

  async function loadBands() {
      bands = await getBands();
      fridayBands = bands.filter(band => band.dayOfWeek.toLowerCase() === 'friday');
      saturdayBands = bands.filter(band => band.dayOfWeek.toLowerCase() === 'saturday');
  }

  onMount(loadBands);
</script>

<div class="container-fluid mt-3">
<h1>All Bands</h1>
<ul>
  {#each bands as band}
      <li>{band.name} - {band.country}</li>
  {/each}
</ul>

<h1>Bands Playing on Friday</h1>
<ul>
  {#each fridayBands as band}
      <li>
          {band.name} - {band.country}
          <img src={`/img/${band.name}.jpg`} alt={band.name} on:error={(e) => e.target.style.display = 'none'}>
      </li>
  {/each}
</ul>

<h1>Bands Playing on Saturday</h1>
<ul>
  {#each saturdayBands as band}
      <li>
          {band.name} - {band.country}
          <img src="/img/{band.name}.jpg" alt={band.name} on:error={(e) => e.target.style.display = 'none'}>
      </li>
  {/each}
</ul>
</div>

<style>
  ul {
      list-style-type: none;
      padding: 0;
  }
  li {
      padding: 0.5rem;
      border-bottom: 1px solid #ccc;
      position: relative;
  }
  img {
      height: 50px;
      float: right;
      padding-left: 10px;
  }
  h1 {
      color: #333;
  }
</style>
