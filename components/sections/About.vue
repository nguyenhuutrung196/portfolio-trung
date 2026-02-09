<script setup lang="ts"></script>

<template>
	<section class="py-10 lg:py-0">
		<div class="container">
			<div
				class="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-10">
				<div>
					<div
						class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-2">
						<div class="w-10 h-1 bg-[#F7ED00]"></div>
						<h2 class="text-section">ABOUT ME</h2>
					</div>
					<div
						class="text-base mt-5 lg:mt-10 flex flex-col gap-3 text-justify">
						<h5 class="font-semibold italic">
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
							leaders such as Sonha Auto, Gemadept, and Daphaco, I
							focus on delivering scalable solutions that balance
							aesthetics with technical excellence. I am a firm
							believer in the 80/20 principle, prioritizing
							optimizations that drive the most significant impact
							on user experience and business growth.
						</p>
						<p>
							Currently, I am expanding my horizons by mastering
							Nuxt.js and exploring AI-driven development to build
							more interactive and intelligent web platforms. I am
							always ready for new challenges that require a blend
							of logic, creativity, and a "can-do" attitude.
						</p>
					</div>
				</div>
				<div>
					<NuxtImg
						src="/images/about.jpg"
						class="w-full h-full object-cover"
						alt="Nguyen Huu Trung"
						placeholder />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
