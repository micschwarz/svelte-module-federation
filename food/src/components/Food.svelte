<script lang="ts">
    import {getById} from "../services/FoodService";
    import Spinner from "./Spinner.svelte";
    import {createEventDispatcher} from "svelte";

    export let id: number;
    $: foodRequest = getById(id);
    const dispatch = createEventDispatcher();

    const click = () => {
        console.log(`click on ${id}`);
        dispatch('test', id);
    }
</script>

<div class="card" role="button">
    <div class="card-body" on:click={click}>
        {#await foodRequest}
            <Spinner/>
        {:then training}
            {#if training}
                <h5 class="card-title">{training.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{training.description}</h6>
                <p class="card-text">{training.ingredients.join(', ')}</p>
            {:else}
                <h5 class="card-title">404</h5>
                <p class="card-text">Food not found!</p>
            {/if}
        {/await}
    </div>
</div>