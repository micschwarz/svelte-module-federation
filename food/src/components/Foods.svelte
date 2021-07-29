<script lang="ts">
    import {getAllIds} from "../services/FoodService";
    import Spinner from "./Spinner.svelte";
    import Food from "./Food.svelte";

    export let horizontal = false;

    const idsRequest = getAllIds();
</script>

{#await idsRequest}
    <Spinner/>
{:then ids}
    <div class="row g-3" class:row-cols-3={!horizontal} class:row-cols-1={horizontal}>
        {#each ids as id (id)}
            <div class="col">
                <Food on:test={() => console.log('ha')} {id}/>
            </div>
        {/each}
    </div>
{/await}