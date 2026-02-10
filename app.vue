<script setup lang="ts">
useHead({
	title: "Nguyễn Hữu Trung | Senior Frontend Developer & UI/UX Specialist",
	meta: [
		{
			name: "description",
			content:
				"Hơn 3 năm kinh nghiệm thực chiến tại Canh Cam & Incotrade. Chuyên gia Nuxt 3, Vue 3 và tối ưu hóa UI/UX Pixel-perfect.",
		},
		// Open Graph (Dành cho Facebook, Zalo, LinkedIn)
		{
			property: "og:title",
			content: "Nguyễn Hữu Trung | Portfolio Architect",
		},
		{
			property: "og:description",
			content: "Biến bản vẽ Figma thành sản phẩm Web cao cấp.",
		},
		{
			property: "og:image",
			content: "https://your-domain.com/images/og-image.jpg",
		},
		{ property: "og:type", content: "website" },
		// Twitter Card
		{ name: "twitter:card", content: "summary_large_image" },
		{ name: "twitter:title", content: "Nguyễn Hữu Trung | Frontend Pro" },
	],
	link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});
</script>

<template>
	<NuxtPage />
</template>
