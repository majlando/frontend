<script>
    import { onMount } from 'svelte';
    import { getBands, createBand, updateBand, deleteBand } from '$lib/api';

    let bands = [];
    let newBand = { name: '', country: '', website: '', facebook: '', instagram: '', dayOfWeek: '', year: 2022 };
    let selectedBand = null;

    // Load bands from the backend
    async function loadBands() {
        bands = await getBands();
    }

    // Function to add or update a band
    async function saveBand() {
        if (selectedBand) {
            await updateBand(selectedBand._id, newBand);
        } else {
            await createBand(newBand);
        }
        await loadBands();
        resetForm();
    }

    // Function to select a band for editing
    function editBand(band) {
        selectedBand = band;
        newBand = {...band};  // Clone the band object
    }

    // Function to delete a band
    async function removeBand(id) {
        await deleteBand(id);
        await loadBands();
    }

    // Reset form to default values
    function resetForm() {
        selectedBand = null;
        newBand = { name: '', country: '', website: '', facebook: '', instagram: '', dayOfWeek: '', year: 2022 };
    }

    onMount(loadBands);
</script>

<form on:submit|preventDefault={saveBand}>
    <input placeholder="Name" bind:value={newBand.name} />
    <input placeholder="Country" bind:value={newBand.country} />
    <input placeholder="Website" bind:value={newBand.website} />
    <input placeholder="Facebook" bind:value={newBand.facebook} />
    <input placeholder="Instagram" bind:value={newBand.instagram} />
    <input placeholder="Day of Week" bind:value={newBand.dayOfWeek} />
    <input type="number" placeholder="Year" bind:value={newBand.year} />
    <button type="submit">{selectedBand ? 'Update' : 'Create'}</button>
    <button type="button" on:click={resetForm}>Cancel</button>
</form>

<h2>Bands</h2>
<ul>
    {#each bands as band}
        <li>
            {band.name} - {band.country}
            <button on:click={() => editBand(band)}>Edit</button>
            <button on:click={() => removeBand(band._id)}>Delete</button>
        </li>
    {/each}
</ul>

<style>
    input, button {
        margin: 0.5rem 0;
        display: block;
    }
</style>
