<script setup lang="ts">
const url = useRequestURL();
const domain = url.origin;

useHead({
	title: "Nguyễn Hữu Trung | Frontend Developer & UI/UX Specialist",
	meta: [
		{
			name: "description",
			content:
				"Hơn 3 năm kinh nghiệm thực chiến tại Canh Cam & Incotrade. Tối ưu hóa UI/UX Pixel-perfect.",
		},
		// Open Graph (Dành cho Facebook, Zalo, LinkedIn)
		{
			property: "og:title",
			content: "Nguyễn Hữu Trung | Portfolio Frontend",
		},
		{
			property: "og:description",
			content: "Biến bản vẽ Figma thành sản phẩm Web cao cấp.",
		},
		{
			property: "og:image",
			content: `${domain}/images/og-card.png`,
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
