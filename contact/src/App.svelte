<script lang="ts">
	import Form from "./components/Form.svelte";

	let name = "";
</script>

<nav class="navbar navbar-light bg-light">
	<div class="container-fluid">
		<span class="navbar-brand mb-0 h1">Contact</span>
	</div>
</nav>

<div class="container mt-4">
	<h3 class="mb-3">
		Hallo{name.length ? `, ${name}` : ''}!
	</h3>

	<Form bind:name/>
</div>

