<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutSection = ref<HTMLElement | null>(null);
const aboutImage = ref<HTMLElement | null>(null);
const aboutText = ref<HTMLElement | null>(null);

onMounted(() => {
	const ctx = gsap.context(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: aboutSection.value,
				start: "top center",
				end: "bottom center",
				toggleActions: "play none none reverse",
				markers: false,
			},
		});

		tl.from(".about-title-wrapper", {
			x: -50,
			opacity: 0,
			duration: 0.8,
			ease: "power2.out",
		})
			.from(
				".about-content p, .about-content h5",
				{
					y: 30,
					opacity: 0,
					stagger: 0.2,
					duration: 0.8,
					ease: "power2.out",
				},
				"-=0.4",
			)
			.from(
				aboutImage.value,
				{
					scale: 1.1,
					opacity: 0,
					duration: 1.2,
					ease: "power2.out",
				},
				"-=1",
			);
	}, aboutSection.value as HTMLElement);
});

onUnmounted(() => {
	ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
	<section
		id="about"
		ref="aboutSection"
		class="pb-16 lg:pb-24 bg-[#FDFCF9] overflow-hidden">
		<div class="container mx-auto px-6">
			<div
				class="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
				<div class="about-content">
					<div
						class="about-title-wrapper flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-3 mb-8">
						<div class="w-12 h-1 bg-yellow-500"></div>
						<h2 class="text-section">ABOUT ME</h2>
					</div>

					<div
						class="flex flex-col gap-6 text-gray-700 leading-relaxed text-justify">
						<h5
							class="text-xl font-semibold italic text-gray-900 border-l-4 border-yellow-500 pl-4">
							"Turning Creative Visions into High-Performance
							Digital Realities."
						</h5>
						<p>
							I am a Frontend Developer & UI/UX Specialist with
							over 3 years of experience in crafting high-fidelity
							web interfaces. My expertise lies in bridging the
							gap between complex Figma designs and seamless,
							pixel-perfect code.
						</p>
						<p>
							Having spearheaded major projects for industry
							leaders such as
							<span class="font-bold text-black">
								Sonha Auto, Gemadept, and Daphaco
							</span>
							, I focus on delivering scalable solutions that
							balance aesthetics with technical excellence.
						</p>
						<p>
							Currently, I am expanding my horizons by mastering
							<span class="text-yellow-500 font-semibold">
								Nuxt.js
							</span>
							and exploring AI-driven development. I am always
							ready for new challenges that require a blend of
							logic, creativity, and a "can-do" attitude.
						</p>
					</div>
				</div>

				<div class="relative group">
					<div
						class="absolute -bottom-4 -right-4 w-full h-full border-2 border-yellow-500 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 duration-500"></div>

					<div ref="aboutImage" class="overflow-hidden shadow-2xl">
						<NuxtImg
							src="/images/about.jpg"
							class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							alt="Nguyen Huu Trung Portfolio"
							placeholder />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
