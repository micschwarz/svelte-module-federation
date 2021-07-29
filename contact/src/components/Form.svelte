<script lang="ts">
    export let name: string = "";
    export let message: string = "";

    $: isValid = message.length && name.length;

    const submit = () => {
        alert(`Danke ${name} für deine Nachricht: ${message}`);
    };
</script>

<form on:submit|preventDefault={submit}>
    <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input required type="text" class="form-control" class:is-invalid={!name.length} id="name" bind:value={name}
               placeholder="Max Mustermann">
    </div>
    <div class="mb-3">
        <label for="message" class="form-label">Email</label>
        <textarea required class="form-control" id="message" class:is-invalid={!message.length} rows="10"
                  bind:value={message} placeholder="Eine Nachricht!"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" disabled={!isValid}>Submit</button>
</form>