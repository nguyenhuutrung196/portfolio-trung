<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

const heroRoot = ref(null);

onMounted(() => {
	const ctx = gsap.context(() => {
		const tl = gsap.timeline({
			defaults: { ease: "power3.out", duration: 1 },
		});

		tl.from(".hero-image", {
			scale: 1.2,
			opacity: 0,
			duration: 1.5,
		})
			.from(
				".reveal-text",
				{
					y: 100,
					opacity: 0,
					stagger: 0.2,
				},
				"-=1",
			) // Chạy sớm hơn 1s
			.from(
				".cta-btn",
				{
					scale: 0.8,
					opacity: 0,
					duration: 0.5,
				},
				"-=0.5",
			);
	}, heroRoot.value);
});
</script>

<template>
	<section
		id="home"
		ref="heroRoot"
		class="relative pt-10 lg:pt-20 flex items-center bg-[#1a1a1a] overflow-hidden">
		<div class="container">
			<div class="grid grid-cols-1 lg:grid-cols-2 items-center">
				<div class="order-2 lg:order-2 lg:text-left">
					<p class="reveal-text text-white font-normal text-4xl mb-2">
						HELLO I'M
					</p>
					<h1
						class="reveal-text text-[2.8rem] lg:text-[5rem] font-bold text-white leading-tight mb-4">
						NGUYEN
						<br />
						HUU TRUNG
					</h1>
					<h2
						class="reveal-text text-base lg:text-lg text-blue-600 font-light uppercase mb-5">
						Frontend Developer | UI/UX Specialist
					</h2>
				</div>

				<div class="order-1 flex justify-center mb-5 lg:mb-0">
					<div
						class="hero-image relative w-96 h-auto lg:w-[400px] lg:h-[550px]">
						<div
							class="absolute inset-0 -z-10 translate-x-4 translate-y-4 hidden lg:block"></div>
						<NuxtImg
							src="/images/avatar.png"
							class="w-full h-full object-cover"
							alt="Nguyen Huu Trung"
							placeholder />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.reveal-text {
	display: block;
	overflow: hidden;
}
</style>
