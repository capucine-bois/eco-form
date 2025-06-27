<script lang="ts">
	import { goto } from '$app/navigation';
	import { firstName } from '$lib/stores/user';
	import { diagnosis } from '$lib/stores/diagnosis';
	import { get } from 'svelte/store'; // pour lire la valeur d'un store
	import type { PostDiagnosisResponse } from '$lib/types/Diagnosis';

	async function envoyer() {
		const data = get(diagnosis); // on récupère la valeur actuelle du store

		try {
			const res = await fetch('/api/formulaire', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!res.ok) throw new Error('Erreur API');

			const json: PostDiagnosisResponse = await res.json();
			const id = json.id;

			goto(`/resultats/${id}`);
		} catch (error) {
			console.error('❌ Erreur lors de l’envoi :', error);
		}
	}
</script>

<h2>Formulaire Eco-Diagnostic</h2>

<p>Bonjour {$firstName} !</p>
<form method="POST" on:submit|preventDefault={envoyer}>
	<label>
		Chauffage :
		<select bind:value={$diagnosis.chauffage}>
			<option value="">Sélectionnez un type de chauffage</option>
			<option value="électrique">Électrique</option>
			<option value="gaz">Gaz</option>
			<option value="fioul">Fioul</option>
			<option value="bois">Bois</option>
			<option value="autre">Autre</option>
		</select>
	</label>

	<label>
		Superficie (m²) :
		<input type="number" bind:value={$diagnosis.superficie} min="0" max="1000" />
	</label>

	<label>
		Nombres de personnes dans le foyer :
		<input type="number" bind:value={$diagnosis.personnes} min="1" max="10" />
	</label>

	<button type="submit">Envoyer</button>
</form>

<style>
	form {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 400px;
	}
	label {
		display: flex;
		flex-direction: column;
	}
	input,
	select {
		padding: 0.5rem;
		width: min-content;
	}
	button {
		padding: 0.5rem 1rem;
		background-color: #0eb714;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		width: min-content;
		font-weight: bold;
	}
	button:hover {
		background-color: #129d0b;
	}
	button:active {
		background-color: #046407;
	}
</style>
