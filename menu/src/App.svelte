<script lang="ts">
    import Menu from "./components/Menu.svelte";
    import Spinner from "./components/Spinner.svelte";
</script>

<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Menu</span>
    </div>
</nav>

<div class="container mt-4">
    <Menu/>

    {#await import('contact/Social')}
        <Spinner/>
    {:then component}
        <svelte:component this={component.default}>
            mail@menu.com
        </svelte:component>
    {:catch e}
        {e}
    {/await}

</div>