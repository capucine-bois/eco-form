import type { IDomainDiagnosis } from '$lib/types/Diagnosis';
import { writable, type Writable } from 'svelte/store';

export const diagnosis: Writable<IDomainDiagnosis> = writable({
	chauffage: '',
	superficie: 0,
	personnes: 1
});
