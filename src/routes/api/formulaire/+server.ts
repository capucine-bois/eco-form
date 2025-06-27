import type { IDomainDiagnosis, PostDiagnosisResponse } from '$lib/types/Diagnosis';
import uniqueId from 'lodash.uniqueid';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }): Promise<Response> => {
	const id = uniqueId();

	const data: IDomainDiagnosis = await request.json();
	console.log('Data reçue', data);
	const res = new Response(JSON.stringify({ ok: true, id } as PostDiagnosisResponse));
	return res;
};
