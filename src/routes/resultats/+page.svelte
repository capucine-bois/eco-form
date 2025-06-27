<script lang="ts">
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

<h1>Dernier résultat en date:</h1>
<ul>
	<li>Chauffage : {$diagnosis.chauffage}</li>
	<li>Superficie : {$diagnosis.superficie}</li>
	<li>Personnes : {$diagnosis.personnes}</li>
</ul>
