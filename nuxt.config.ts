export default defineNuxtConfig({
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image",
		"@nuxt/icon",
		"@nuxtjs/google-fonts",
	],
	css: ["~/assets/css/main.css"],
	devtools: { enabled: true },
	googleFonts: {
		families: {
			Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
		},
	},
});
