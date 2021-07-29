<script lang="ts">
    import Spinner from "./Spinner.svelte";
    import {derived, writable} from "svelte/store";

    const chosen = writable([]);
    const chosenAmount = derived(chosen, $chosen => $chosen.length);

    const choose = (event) => {
        const id = event.detail;
        chosen.update(c => [...c, id]);
    }

</script>

<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Menu</span>
    </div>
</nav>

<div class="container mt-4">
    <div class="row">
        <div class="col">
            <h2 class="fs-4">
                Get your yummy food here!
            </h2>
            You have chosen {$chosenAmount} meals.
        </div>

        <div class="col-8">
            <!-- Dynamic import via module federation -->
            {#await window.food.get('./Foods')}
                <Spinner/>
            {:then component}
                <svelte:component this={component().default} horizontal on:choose={choose}/>
            {:catch error}
                {error}
            {/await}
        </div>
    </div>
</div>