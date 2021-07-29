<script lang="ts">
    import Spinner from "./Spinner.svelte";
    import {derived, writable} from "svelte/store";

    const chosen = writable([]);
    let name;
    const chosenAmount = derived(chosen, $chosen => $chosen.length);

    const choose = (event) => {
        const id = event.detail;
        chosen.update(c => [...c, id]);
    }
</script>

<div class="row">
    <div class="col">
        <h2 class="fs-4">
            Get your yummy food here!
        </h2>
        You have chosen {$chosenAmount} meals.
    </div>

    <div class="col-8">
        <!-- Dynamic import via module federation -->
        {#await import('food/Foods')}
            <Spinner/>
        {:then component}
            <svelte:component this={component.default} horizontal on:choose={choose}/>
        {:catch error}
            {error}
        {/await}
    </div>
</div>
<hr>
<div>
    <h2>Contact us!</h2>
    <!-- Dynamic import via module federation -->
    {#await import('contact/ContactForm')}
        <Spinner/>
    {:then component}
        <svelte:component this={component.default} bind:name/>
    {:catch error}
        {error}
    {/await}
    <div class="mt-3 fw-bold" class:d-none={!name}>Hi {name}, thank you for your letter!</div>
</div>