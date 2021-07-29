<script lang="ts">
    import Spinner from "./components/Spinner.svelte";
</script>

<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Menu</span>
    </div>
</nav>

<div class="container mt-4">

    <!-- Dynamic import of internal component -->
    {#await import('./Test.svelte')}
        <Spinner/>
    {:then component}
        <svelte:component this={component.default}/>
    {:catch e}
        {e}
    {/await}

    <!-- Dynamic import via module federation -->
    {#await window.food.get('./Foods')}
        <Spinner/>
    {:then component}
        <svelte:component this={component().default}/>
    {:catch error}
        {error}
    {/await}

</div>


