<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillWorkRoot = ref<HTMLElement | null>(null);

interface Skill {
	icon: string;
	title: string;
	desc: string;
}

interface Experience {
	company: string;
	role: string;
	time: string;
	website: string;
	tasks: string[];
}

const skills = ref<Skill[]>([
	{
		icon: "fa6-solid:code",
		title: "Core UI",
		desc: "TailwindCSS, SASS, Pug, GSAP",
	},
	{
		icon: "fa6-solid:laptop-code",
		title: "Library/Framework",
		desc: "VueJS, Nuxt 3 (Learning)",
	},
	{
		icon: "fa6-solid:brain",
		title: "CMS",
		desc: "Wordpress (Elementor, WPBakery), PHP Laravel",
	},
	{
		icon: "fa6-solid:gears",
		title: "Workflow",
		desc: "Git, Postman, SEO, GTM, AI-Driven Development",
	},
]);

const experiences = ref<Experience[]>([
	{
		company: "CANHCAM WEBSITE DESIGN AGENCY",
		role: "FRONTEND DEVELOPER",
		time: "03/2023 - 04/2025",
		website: "https://www.canhcam.vn/",
		tasks: [
			"Collaborated with Managers to deploy enterprise web solutions.",
			"Architected websites from design to WordPress CMS integration.",
			"Optimized page speed for UX and SEO performance.",
			"Provided CMS training and technical support.",
		],
	},
	{
		company: "INCOTRADE CO",
		role: "FRONTEND DEVELOPER",
		website: "https://incotrade.vn/",
		time: "05/2025 - Present",
		tasks: [
			"Engineered high-performance interfaces using jQuery & Bootstrap.",
			"Implemented mobile-first responsive designs.",
			"Collaborated with backend teams for API integration.",
		],
	},
]);

onMounted(() => {
	const ctx = gsap.context(() => {
		gsap.from(".skill-item", {
			scrollTrigger: {
				trigger: ".skill-grid",
				start: "top center",
				toggleActions: "play none none reverse",
			},
			y: 50,
			opacity: 0,
			stagger: 0.15,
			duration: 0.8,
			ease: "power2.out",
		});
		gsap.from(".work-item", {
			scrollTrigger: {
				trigger: ".work-grid",
				start: "top 80%",
				toggleActions: "play none none reverse",
			},
			x: (index) => (index % 2 === 0 ? -100 : 100),
			opacity: 0,
			duration: 1,
			ease: "power3.out",
		});
	}, skillWorkRoot.value as HTMLElement);
});

onUnmounted(() => {
	ScrollTrigger.getAll().forEach((t) => t.kill());
});
</script>

<template>
	<section
		id="experience"
		ref="skillWorkRoot"
		class="bg-section py-10 lg:py-16 overflow-hidden">
		<div class="container mx-auto px-6">
			<div
				class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-3 mb-5">
				<div class="w-12 h-1 bg-yellow-500"></div>
				<h2 class="text-section">SKILLS</h2>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 skill-grid">
				<div
					v-for="(skill, index) in skills"
					:key="index"
					class="skill-item flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-600 transition-colors group">
					<div
						class="text-yellow-500 group-hover:scale-110 transition-transform">
						<Icon :name="skill.icon" size="32" />
					</div>
					<div class="flex flex-col">
						<h3 class="text-lg font-bold text-gray-900">
							{{ skill.title }}
						</h3>
						<p class="text-base text-gray-900 max-w-[300px]">
							{{ skill.desc }}
						</p>
					</div>
				</div>
			</div>

			<div
				class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-3 mt-10 mb-5">
				<div class="w-12 h-1 bg-yellow-500"></div>
				<h2 class="text-section">WORK EXPERIENCE</h2>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 work-grid">
				<div
					v-for="(work, idx) in experiences"
					:key="idx"
					class="work-item lg:px-10">
					<h3
						class="text-xl font-black text-gray-900 leading-tight mb-1">
						{{ work.company }}
					</h3>
					<h6
						class="text-yellow-500 font-bold text-base tracking-widest mb-1">
						{{ work.role }}
					</h6>
					<NuxtLink
						:to="work.website"
						target="_blank"
						class="text-gray-900 underline font-bold text-base tracking-widest mb-4 hover:text-yellow-500 transition-colors">
						{{ work.website }}
					</NuxtLink>

					<div class="flex items-center my-6">
						<div
							class="badge-timeline px-4 py-2 text-xs font-bold bg-[#1a1a1a] text-white">
							{{ work.time }}
						</div>
						<div class="h-[2px] flex-grow bg-gray-300"></div>
					</div>

					<ul class="space-y-3">
						<li
							v-for="(task, tIdx) in work.tasks"
							:key="tIdx"
							class="text-base text-gray-900 text-justify flex gap-2">
							<span class="text-yellow-500">•</span>
							{{ task }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.bg-section {
	background: url("../../public/images/background.jpg") no-repeat center
		center/cover;
}
</style>
