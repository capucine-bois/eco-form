<script lang="ts">
	export let data; // data is a keyword in SvelteKit that contains the data returned by the load function

	import { diagnosis } from '$lib/stores/diagnosis';
	import { onMount } from 'svelte';
	onMount(() => {
		// $diagnosis.chauffage = 'autre';
		// diagnosis.update((current) => ({
		// 	...current,
		// 	chauffage: 'autre'
		// }));
	});
</script>

<h1>Résultat n°{data.id}</h1>
<ul>
	<li>Chauffage : {$diagnosis.chauffage}</li>
	<li>Superficie : {$diagnosis.superficie}</li>
	<li>Personnes : {$diagnosis.personnes}</li>
</ul>
