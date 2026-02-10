<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsRoot = ref<HTMLElement | null>(null);

interface Project {
	title: string;
	image: string;
	link: string;
	review: string;
	details: string[];
}

interface PersonalProject {
	title: string;
	image: string;
	info: {
		label: string;
		value: string;
	}[];
}

// Luôn gán kiểu dữ liệu cho ref
const projects = ref<Project[]>([
	{
		title: "Gemadept",
		image: "/images/project-1.webp",
		link: "https://www.gemadept.com.vn/",
		review: "https://www.canhcam.vn/gemadept/",
		details: [
			"Architected a Modular CMS (ACF) for independent data management.",
			"Integrated WPML for global accessibility and high SEO health score.",
		],
	},
	{
		title: "Nature Foods",
		image: "/images/project-2.webp",
		link: "https://naturefoods.com.vn/",
		review: "https://www.canhcam.vn/nature-foods/",
		details: [
			"Optimized UI/UX for 100+ product variations and fast filtering.",
			"Categorize products into a clear hierarchy and enable product searching by category and name.",
		],
	},
	{
		title: "Quoc&Associates",
		image: "/images/project-3.webp",
		link: "https://quoclaw.vn/",
		review: "https://www.canhcam.vn/quocassiociates/",
		details: [
			"Delivered Pixel-perfect Figma conversion using TailwindCSS, prioritizing professional typography and branding.",
			"Managed Full-cycle Deployment (SSL, Domain, Hosting), ensuring 99.9% uptime and secure client data",
		],
	},
	{
		title: "Son Ha Auto",
		image: "/images/project-4.webp",
		link: "https://sonha.com/",
		review: "https://www.canhcam.vn/son-ha-auto/",
		details: [
			"Architected a Multi-level Data Hierarchy for 1,900+ projects, ensuring seamless navigation across complex industrial categories.",
			"Optimized Industrial SEO & Asset Delivery, achieving high-speed performance for an extensive product catalog.",
		],
	},
]);

const personalProject = ref<PersonalProject>({
	title: "Interactive Nail Art & Studio Platform",
	image: "/images/project-5.webp",
	info: [
		{
			label: "Role",
			value: "Full-stack Developer & UI/UX Designer Tech Stack: Nuxt.js (Vue.js), TailwindCSS, Framer Motion, WordPress (Headless CMS).",
		},
		{
			label: "Status",
			value: "Concept & Research Phase (Self-learning Nuxt.js & Framer).",
		},
		{
			label: "The Vision",
			value: "Researching a specialized digital solution for nail salons to bridge the gap between design discovery and physical service.",
		},
		{
			label: "Learning Objective",
			value: "Applying Nuxt.js and TailwindCSS to build a modular frontend architecture, exploring Framer for high-fidelity UI interaction prototypes.",
		},
		{
			label: "Core Concept",
			value: "Designing a 'Virtual Try-on' logic where users can visualize nail sets on digital hand models —focusing on simplifying the UI for non-tech users.",
		},
	],
});

onMounted(() => {
	const ctx = gsap.context(() => {
		gsap.from(".project-card", {
			scrollTrigger: {
				trigger: ".projects-grid",
				start: "top center",
				toggleActions: "play none none reverse",
			},
			y: 60,
			opacity: 0,
			stagger: 0.2,
			duration: 1,
			ease: "power3.out",
		});
	}, projectsRoot.value as HTMLElement);
});

onUnmounted(() => {
	ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
	<section
		id="projects"
		ref="projectsRoot"
		class="py-16 lg:py-24 bg-white overflow-hidden">
		<div class="container mx-auto px-6">
			<div
				class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-3 mb-12">
				<div class="w-12 h-1 bg-yellow-500"></div>
				<h2 class="text-section">FEATURED PROJECTS</h2>
			</div>

			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10 projects-grid">
				<div
					v-for="(item, index) in projects"
					:key="index"
					class="project-card group">
					<div
						class="project-image overflow-hidden rounded-xl shadow-lg aspect-video mb-6">
						<a :href="item.link" target="_blank">
							<NuxtImg
								:src="item.image"
								class="w-full h-full object-cover group-hover:scale-110 duration-700 transition-all ease-in-out"
								:alt="item.title"
								placeholder />
						</a>
					</div>
					<h5
						class="text-xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">
						<NuxtLink :to="item.link" target="_blank">
							{{ item.title }}
						</NuxtLink>
					</h5>
					<ul class="space-y-2 mb-6">
						<li
							v-for="(detail, dIdx) in item.details"
							:key="dIdx"
							class="text-base text-gray-900 flex gap-2">
							<span class="text-yellow-500 font-bold">-</span>
							{{ detail }}
						</li>
					</ul>
					<a
						:href="item.review"
						target="_blank"
						class="inline-flex items-center gap-2 text-base font-bold uppercase tracking-widest border-b-2 border-yellow-500 pb-1 hover:text-yellow-500 transition-all">
						Learn More
						<Icon name="material-symbols:arrow-outward" />
					</a>
				</div>
			</div>

			<div class="mt-32 personal-trigger">
				<div
					class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-3 mb-12">
					<div class="w-12 h-1 bg-yellow-500"></div>
					<h2 class="text-section">ONGOING PERSONAL PROJECT</h2>
				</div>

				<div
					class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
					<div class="w-full lg:w-1/2 personal-img">
						<div
							class="rounded-2xl overflow-hidden shadow-2xl border-8 border-gray-50">
							<NuxtImg
								:src="personalProject.image"
								class="w-full h-full object-cover hover:scale-105 duration-700 transition-all"
								alt="Personal Project"
								placeholder />
						</div>
					</div>
					<div class="w-full lg:w-1/2 personal-content">
						<h3 class="text-2xl font-black mb-6">
							{{ personalProject.title }}
						</h3>
						<ul class="space-y-4">
							<li
								v-for="(info, iIdx) in personalProject.info"
								:key="iIdx"
								class="text-base text-justify">
								<span class="font-bold text-yellow-500 mr-1">
									- {{ info.label }}:
								</span>
								<span class="text-gray-700">
									{{ info.value }}
								</span>
							</li>
						</ul>
						<div class="mt-10">
							<span
								class="px-6 py-3 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 italic">
								Coming Soon...
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
