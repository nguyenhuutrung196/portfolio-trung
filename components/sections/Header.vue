<script setup></script>

<template>
	<nav class="container">
		<div class="py-5">
			<div class="flex flex-col lg:flex-row items-center justify-around">
				<ul class="flex flex-col lg:flex-row justify-center gap-5">
					<li>
						<NuxtLink
							to="/"
							class="p-5 text-base font-semibold hover:text-[#F7ED00]">
							Home
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/about"
							class="p-5 text-base font-semibold hover:text-[#F7ED00]">
							About me
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/experience"
							class="p-5 text-base font-semibold hover:text-[#F7ED00]">
							Experience
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/projects"
							class="p-5 text-base font-semibold hover:text-[#F7ED00]">
							Projects
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="/contact"
							class="p-5 text-base font-semibold hover:text-[#F7ED00]">
							Contact
						</NuxtLink>
					</li>
				</ul>
				<ul class="flex gap-4">
					<li
						class="cursor-pointer rounded-full p-2 border flex-center hover:bg-[#F7ED00] hover:text-white transition-colors">
						<NuxtLink to="tel:+84703007904" class="flex-center">
							<Icon name="fa6-solid:phone" size="16" />
						</NuxtLink>
					</li>
					<li
						class="cursor-pointer rounded-full p-2 border flex-center hover:bg-[#F7ED00] hover:text-white transition-colors">
						<NuxtLink
							to="mailto:nguyenhuutrung.196@gmail.com"
							class="flex-center">
							<Icon name="fa6-solid:envelope" size="16" />
						</NuxtLink>
					</li>
				</ul>
			</div>
			<div id="hambugerMenu" class="cursor-pointer block lg:hidden">
				<div class="line"></div>
				<div class="line"></div>
				<div class="line"></div>
			</div>
		</div>
	</nav>
</template>

<style scoped>
#hambugerMenu:hover .line:nth-child(1) {
	background-color: #f7ed00;
	transform: rotate(45deg);
}
#hambugerMenu:hover .line:nth-child(2) {
	background-color: #f7ed00;
	transform: rotate(-45deg);
}
#hambugerMenu:hover .line:nth-child(3) {
	background-color: #f7ed00;
	opacity: 0;
	display: none;
}

.line {
	width: 25px;
	height: 3px;
	background-color: #333;
	margin: 5px 0;
}
</style>
