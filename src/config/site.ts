export const whatsappNumber = "50251180794";

export function createWhatsAppLink(message: string) {
	return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const site = {
	name: "Multiservicios Obra Civil AR",
	shortName: "AR",
	country: "Guatemala",

	description:
		"Obra civil, suministros hidráulicos y Deck WPC para empresas, proyectos y clientes en Guatemala.",

	whatsapp: whatsappNumber,

	quoteHref: createWhatsAppLink(
		"Hola, vi la página de Multiservicios Obra Civil AR y quisiera solicitar una cotización."
	),

	navigation: [
		{
			label: "Servicios",
			href: "/#servicios",
		},
		{
			label: "Hidráulicos",
			href: "/#hidraulicos",
		},
		{
			label: "Deck WPC",
			href: "/#deck",
		},
		{
			label: "Proyectos",
			href: "/#proyectos",
		},
	],
};