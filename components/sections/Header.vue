<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const isSticky = ref(false);
const isMenuOpen = ref(false);

const activeSection = ref("#home");

const navLinks = [
	{ name: "Home", to: "#home" },
	{ name: "About me", to: "#about" },
	{ name: "Experience", to: "#experience" },
	{ name: "Projects", to: "#projects" },
	{ name: "Contact", to: "#contact" },
];

const handleScroll = () => {
	isSticky.value = window.scrollY > 400;
};

const handleScrollTo = (e, targetId) => {
	e.preventDefault();

	isMenuOpen.value = false;

	gsap.to(window, {
		duration: 1.2,
		scrollTo: {
			y: targetId,
			offsetY: 80,
		},
		ease: "power4.inOut",
	});
	history.pushState(null, null, targetId);
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
	<header
		:class="[
			'w-full z-50 transition-all duration-500 transform',
			isSticky
				? 'translate-y-0 fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md py-5'
				: 'translate-y-0 lg:bg-transparent py-5',
		]">
		<nav class="container">
			<div class="hidden lg:flex items-center lg:justify-evenly gap-8">
				<ul class="flex gap-5">
					<li v-for="link in navLinks" :key="link.to">
						<NuxtLink
							@click="handleScrollTo($event, link.to)"
							:to="link.to"
							class="p-5 text-base font-semibold hover:text-blue-600"
							active-class="text-blue-600">
							{{ link.name }}
						</NuxtLink>
					</li>
				</ul>
				<ul class="flex gap-4">
					<li
						class="cursor-pointer rounded-full p-2 border border-gray-900 flex-center hover:bg-blue-600 hover:text-white transition-colors">
						<NuxtLink to="tel:+84703007904" class="flex-center">
							<Icon name="fa6-solid:phone" size="16" />
						</NuxtLink>
					</li>
					<li
						class="cursor-pointer rounded-full p-2 border border-gray-900 flex-center hover:bg-blue-600 hover:text-white transition-colors">
						<NuxtLink
							to="mailto:nguyenhuutrung.196@gmail.com"
							class="flex-center">
							<Icon name="fa6-solid:envelope" size="16" />
						</NuxtLink>
					</li>
				</ul>
			</div>
			<button
				@click="isMenuOpen = !isMenuOpen"
				class="lg:hidden flex flex-col gap-1.5 z-[60]">
				<span
					:class="[
						'w-7 h-0.5 bg-gray-900 transition-all',
						isMenuOpen ? 'rotate-45 translate-y-2' : '',
					]"></span>
				<span
					:class="[
						'w-7 h-0.5 bg-gray-900 transition-all',
						isMenuOpen ? 'opacity-0' : '',
					]"></span>
				<span
					:class="[
						'w-7 h-0.5 bg-gray-900 transition-all',
						isMenuOpen ? '-rotate-45 -translate-y-2' : '',
					]"></span>
			</button>
			<Teleport to="body">
				<Transition name="fade">
					<div
						v-if="isMenuOpen"
						@click="isMenuOpen = false"
						class="fixed inset-0 bg-black/50 z-[99] backdrop-blur-sm"></div>
				</Transition>

				<div
					:class="[
						'fixed top-0 right-0 h-full w-[300px] bg-white z-[100] shadow-2xl transition-transform duration-300 transform p-8 flex flex-col',
						isMenuOpen ? 'translate-x-0' : 'translate-x-full',
					]">
					<button
						@click="isMenuOpen = false"
						class="self-end p-2 text-gray-500 hover:text-black transition-colors">
						<Icon name="material-symbols:close-rounded" size="32" />
					</button>

					<ul class="flex flex-col gap-6 mt-12">
						<li
							v-for="link in navLinks"
							:key="link.to"
							@click="handleScrollTo($event, link.to)">
							<NuxtLink
								:to="link.to"
								class="text-2xl font-bold uppercase tracking-tighter hover:text-blue-600 transition-colors"
								active-class="text-blue-600">
								{{ link.name }}
							</NuxtLink>
						</li>
					</ul>

					<div class="mt-auto flex gap-4 border-t pt-8">
						<NuxtLink
							to="tel:+84703007904"
							class="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-blue-600">
							<Icon name="fa6-solid:phone" size="18" />
						</NuxtLink>
						<NuxtLink
							to="mailto:nguyenhuutrung.196@gmail.com"
							class="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-blue-600">
							<Icon name="fa6-solid:envelope" size="18" />
						</NuxtLink>
					</div>
				</div>
			</Teleport>
		</nav>
	</header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
