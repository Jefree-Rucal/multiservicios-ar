export const whatsappNumber = "50251180794";
export const phoneDisplay = "+502 5118 0794";

export function createWhatsAppLink(message: string) {
	return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const site = {
	name: "Multiservicios Obra Civil AR",
	shortName: "AR",

	country: "Guatemala",
	countryCode: "GT",

	language: "es-GT",
	locale: "es_GT",

	description:
		"Obra civil, suministros hidráulicos y Deck WPC para empresas, proyectos y clientes en Guatemala.",

	logo: "/images/brand/logo-ar-header.png",
	defaultSocialImage: "/images/brand/logo-ar-header.png",
	themeColor: "#ed1c24",

	whatsapp: whatsappNumber,
	phoneDisplay,

	quoteHref: createWhatsAppLink(
		"Hola, vi la página de Multiservicios Obra Civil AR y quisiera solicitar una cotización."
	),

	contactHref: "/contacto/",

	navigation: [
		{
			label: "Inicio",
			href: "/",
		},
		{
			label: "Servicios",
			href: "/servicios-obra-civil-guatemala/",
		},
		{
			label: "Hidráulicos",
			href: "/suministros-hidraulicos-guatemala/",
		},
		{
			label: "Deck WPC",
			href: "/deck-wpc-guatemala/",
		},
		{
			label: "Proyectos",
			href: "/proyectos/",
		},
		{
			label: "Contacto",
			href: "/contacto/",
		},
	],

	services: [
		{
			label: "Obra civil y mantenimiento",
			href: "/servicios-obra-civil-guatemala/",
		},
		{
			label: "Suministros hidráulicos",
			href: "/suministros-hidraulicos-guatemala/",
		},
		{
			label: "Contadores de agua",
			href: "/contadores-de-agua-guatemala/",
		},
		{
			label: "Contador de agua 3/4",
			href: "/contador-agua-3-4-guatemala/",
		},
		{
			label: "Piso Deck WPC",
			href: "/deck-wpc-guatemala/",
		},
	],
};
