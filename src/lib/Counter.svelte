<script lang="ts">
	export let start = 3;
	let count = start;
</script>

<button on:click={() => count--}> - </button>
<span>{count}</span>
<button on:click={() => count++}> + </button>
