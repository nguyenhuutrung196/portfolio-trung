<script setup lang="ts"></script>

<template>
	<section class="py-10 lg:py-20">
		<div class="container">
			<div
				class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-2">
				<div class="w-10 h-1 bg-[#F7ED00]"></div>
				<h2 class="text-section">PROJECTS</h2>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10">
				<div class="project-item">
					<div class="project-image">
						<NuxtLink to="/projects">
							<div class="overflow-hidden">
								<NuxtImg
									src="/images/project-1.png"
									class="w-full h-full object-cover hover:scale-110 duration-500 transition-all"
									alt="Project 1"
									placeholder />
							</div>
						</NuxtLink>
					</div>
					<h5 class="font-semibold my-5">
						Gemadept Corporation | Multi-language Corporate Portal
					</h5>
					<ul>
						<li>
							- Architected a Modular CMS (ACF), enabling non-tech
							staff to manage complex corporate data
							independently.
						</li>
						<li>
							- Integrated WPML for global accessibility,
							maintaining a high SEO health score across
							multi-language versions.
						</li>
					</ul>
					<div class="text-center mt-5">
						<NuxtLink
							to="/projects"
							class="underline hover:text-[#F7ED00] transition-colors">
							View Detail
						</NuxtLink>
					</div>
				</div>
			</div>

			<div
				class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-2 mt-10 lg:mt-20">
				<div class="w-10 h-1 bg-[#F7ED00]"></div>
				<h2 class="text-section">On going personal project</h2>
			</div>
			<div
				class="flex flex-col lg:flex-row items-start gap-5 lg:gap-20 mt-10">
				<div class="w-full lg:w-1/2">
					<NuxtLink to="/projects">
						<div class="overflow-hidden">
							<NuxtImg
								src="/images/project-5.webp"
								class="w-full h-full object-cover hover:scale-110 duration-500 transition-all"
								alt="Project 5"
								placeholder />
						</div>
					</NuxtLink>
				</div>
				<div class="w-full lg:w-1/2">
					<ul class="text-base text-justify flex flex-col gap-2">
						<li>
							<span class="font-semibold">- Role:</span>
							Full-stack Developer & UI/UX Designer Tech Stack:
							Nuxt.js (Vue.js), TailwindCSS, Framer Motion,
							WordPress (Headless CMS)
						</li>
						<li>
							<span class="font-semibold">- Status:</span>
							Concept & Research Phase (Self-learning Nuxt.js &
							Framer)
						</li>
						<li>
							<span class="font-semibold">- The Vision:</span>
							Researching a specialized digital solution for nail
							salons to bridge the gap between design discovery
							and physical service.
						</li>
						<li>
							<span class="font-semibold">
								- Learning Objective:
							</span>
							Applying Nuxt.js and TailwindCSS to build a modular
							frontend architecture, exploring Framer for
							high-fidelity UI interaction prototypes.
						</li>
						<li>
							<span class="font-semibold">- Core Concept:</span>
							Designing a "Virtual Try-on" logic where users can
							visualize nail sets on digital hand models —focusing
							on simplifying the UI for non-tech users.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
