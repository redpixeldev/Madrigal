// Central content + brand constants for the Madrigal Realty landing page.
// Editing copy/links here updates every component that consumes them.

export const SITE = {
	name: 'Madrigal Realty',
	tagline: 'Asesoría Inmobiliaria',
	description:
		'Asesoría inmobiliaria cercana en República Dominicana. Casas, apartamentos, solares y proyectos en planos. Escríbenos por WhatsApp y te decimos qué tenemos disponible hoy.',
	url: 'https://madrigalrealty.do',
	lang: 'es-DO',
};

export const CONTACT = {
	whatsapp: '18098836161', // +1 809 883 6161
	phoneDisplay: '809 883 6161',
	email: 'info@madrigalrealty.do',
	instagram: 'madrigalasesoresbr',
	instagramUrl: 'https://www.instagram.com/madrigalasesoresbr/',
	location: 'República Dominicana',
};

/** Build a wa.me deep-link with a prefilled Spanish message. */
export function waLink(message = 'Hola Madrigal, quiero consultar la disponibilidad actual.'): string {
	return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
	{ label: 'Inicio', href: '#inicio' },
	{ label: 'Qué hacemos', href: '#que-trabajamos' },
	{ label: 'Cómo trabajamos', href: '#proceso' },
	{ label: 'Nosotros', href: '#nosotros' },
	{ label: 'Contacto', href: '#contacto' },
];

export interface PropertyType {
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	waMessage: string;
}

export const PROPERTY_TYPES: PropertyType[] = [
	{
		title: 'Casas',
		description: 'Casas familiares en sectores residenciales que se ajustan a tu familia y tu presupuesto.',
		image: '/img/card-casas.webp',
		imageAlt: 'Fachada de una casa familiar moderna con palmeras en República Dominicana.',
		waMessage: 'Hola Madrigal, me interesan las casas disponibles. ¿Qué tienen hoy?',
	},
	{
		title: 'Apartamentos',
		description: 'En torres y residenciales, ideales para estrenar, invertir o vivir cerca de todo.',
		image: '/img/card-apartamentos.webp',
		imageAlt: 'Sala luminosa de un apartamento moderno con vista a la ciudad.',
		waMessage: 'Hola Madrigal, me interesan los apartamentos disponibles. ¿Qué tienen hoy?',
	},
	{
		title: 'Solares',
		description: 'Terrenos listos para construir o invertir, con asesoría para elegir la mejor ubicación.',
		image: '/img/card-solares.webp',
		imageAlt: 'Vista aérea de solares y terrenos urbanizados cerca de la costa.',
		waMessage: 'Hola Madrigal, me interesan los solares disponibles. ¿Qué tienen hoy?',
	},
	{
		title: 'Proyectos en planos',
		description: 'Proyectos de entrada accesible para asegurar tu propiedad desde la primera etapa.',
		image: '/img/card-proyectos.webp',
		imageAlt: 'Equipo revisando planos frente a un proyecto residencial en construcción.',
		waMessage: 'Hola Madrigal, me interesan los proyectos en planos. ¿Qué tienen hoy?',
	},
];

export interface Feature {
	icon: string; // path to brand icon PNG (transparent)
	title: string;
	description: string;
}

export const FEATURES: Feature[] = [
	{
		icon: '/img/icon-trato.png',
		title: 'Trato cercano',
		description: 'Te atendemos de forma personal, sin presión y resolviendo cada duda.',
	},
	{
		icon: '/img/icon-acompanamiento.png',
		title: 'Acompañamiento completo',
		description: 'Desde la primera búsqueda hasta el cierre, estamos contigo en cada paso.',
	},
	{
		icon: '/img/icon-mercado.png',
		title: 'Conocemos el mercado',
		description: 'Sabemos qué se mueve en cada sector de República Dominicana.',
	},
	{
		icon: '/img/icon-confianza.png',
		title: 'Confianza y transparencia',
		description: 'Información clara y honesta para que decidas con seguridad.',
	},
];

export interface Step {
	number: string;
	title: string;
	description: string;
}

export const STEPS: Step[] = [
	{ number: '01', title: 'Escríbenos por WhatsApp', description: 'Cuéntanos qué buscas, tu zona y tu presupuesto.' },
	{ number: '02', title: 'Te mostramos opciones', description: 'Seleccionamos lo disponible que encaja contigo.' },
	{ number: '03', title: 'Visitamos juntos', description: 'Coordinamos las visitas que más te interesen.' },
	{ number: '04', title: 'Cierre acompañado', description: 'Te guiamos en todo el proceso hasta recibir las llaves.' },
];

export interface Testimonial {
	quote: string;
	name: string;
	location: string;
}

export const TESTIMONIALS: Testimonial[] = [
	{
		quote: 'Nos ayudaron a encontrar nuestra primera casa sin estrés. Siempre disponibles por WhatsApp y muy honestos.',
		name: 'María Fernández',
		location: 'Santiago',
	},
	{
		quote: 'Compré un solar para invertir y me asesoraron en cada detalle de la ubicación. Excelente acompañamiento.',
		name: 'Luis Beltré',
		location: 'Santo Domingo Este',
	},
	{
		quote: 'Vendí mi apartamento más rápido de lo que esperaba. Trato cercano, profesional y siempre pendientes.',
		name: 'Ramona Gómez',
		location: 'Santo Domingo',
	},
];
