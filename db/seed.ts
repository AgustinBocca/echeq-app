import {
	db,
	Client,
	Echeq
} from 'astro:db';

export default async function seed() {

	await db.insert(Client).values([{
			id: 1,
			name: "Agustín",
			subname: "Bocca",
			cuit: 20369351045,
			location: "San Fco",
			phone: 436077
		},
		{
			id: 2,
			name: "Jose",
			subname: "Bocca",
			cuit: 20369344,
			location: "San Fco",
			phone: 436077
		}
	]);

	// Insertar datos en la tabla Echeq
	await db.insert(Echeq).values({
		id: 1,
		datetime: new Date(),
		client_id: 1,
		number: 123456,
		bank: "Macro",
		importe: 1000,
		dateEcheq: new Date(),
		days: 30,
		tasa: 0.05,
		interest: 50,
		importClient: 1050
	
	});


}