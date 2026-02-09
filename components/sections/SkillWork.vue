<script setup lang="ts"></script>

<template>
	<section class="bg-section py-10 lg:py-20">
		<div class="container">
			<div
				class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-2">
				<div class="w-10 h-1 bg-[#F7ED00]"></div>
				<h2 class="text-section">SKILLS</h2>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
				<div class="px-5 lg:px-20">
					<div class="skill-item">
						<Icon name="fa6-solid:code" size="24" />
						<div class="flex flex-col">
							<h3 class="text-base">Core UI</h3>
							<p class="text-sm">TailwindCSS, SASS</p>
						</div>
					</div>
				</div>
				<div class="px-5 lg:px-20">
					<div class="skill-item">
						<Icon name="fa6-solid:code" size="24" />
						<div class="flex flex-col">
							<h3 class="text-base">Library/Framework</h3>
							<p class="text-sm">VueJS</p>
						</div>
					</div>
				</div>
				<div class="px-5 lg:px-20">
					<div class="skill-item">
						<Icon name="fa6-solid:code" size="24" />
						<div class="flex flex-col">
							<h3 class="text-base">CMS</h3>
							<p class="text-sm">
								Wordpress (Elementor, WP Bakery), PHP Laravel
							</p>
						</div>
					</div>
				</div>
				<div class="px-5 lg:px-20">
					<div class="skill-item">
						<Icon name="fa6-solid:code" size="24" />
						<div class="flex flex-col">
							<h3 class="text-base">WORKFLOW</h3>
							<p class="text-sm">
								Git, Postman, SEO, GTM, Google PageSpeed,
								AI-Driven Development
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-20">
				<div
					class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-2">
					<div class="w-10 h-1 bg-[#F7ED00]"></div>
					<h2 class="text-section">WORK EXPERIENCE</h2>
				</div>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
				<div class="work-item lg:px-20">
					<h3>CANH CAM WEBSITE DESIGN AGENCY</h3>
					<h6>FRONTEND DEVELOPER</h6>
					<div class="flex items-center my-5">
						<div
							class="badge-timeline p-3 text-nowrap bg-[#1a1a1a] text-white">
							03/2022 - 04/2025
						</div>
						<div
							class="line-timeline h-1 w-[calc(50%)] bg-[#1a1a1a]"></div>
					</div>
					<ul class="work-content text-sm text-justify">
						<li>
							- Collaborated directly with Account and Project
							Managers to deploy high-quality web solutions for
							enterprise clients.
						</li>
						<li>
							- Architected websites from initial design concepts
							to full WordPress CMS integration.
						</li>
						<li>
							- Optimized page load speeds to enhance User
							Experience (UX) and boost SEO performance.
						</li>
						<li>
							- Customized system features and maintained backend
							security to protect administrative data.
						</li>
						<li>
							- Provided comprehensive CMS training and technical
							support during the project handover phase.
						</li>
					</ul>
				</div>
				<div class="work-item lg:px-20">
					<h3>CANH CAM WEBSITE DESIGN AGENCY</h3>
					<h6>FRONTEND DEVELOPER</h6>
					<div class="flex items-center my-5">
						<div
							class="badge-timeline p-3 text-nowrap bg-[#1a1a1a] text-white">
							03/2022 - 04/2025
						</div>
						<div
							class="line-timeline h-1 w-[calc(50%)] bg-[#1a1a1a]"></div>
					</div>
					<ul class="work-content text-sm text-justify">
						<li>
							- Collaborated directly with Account and Project
							Managers to deploy high-quality web solutions for
							enterprise clients.
						</li>
						<li>
							- Architected websites from initial design concepts
							to full WordPress CMS integration.
						</li>
						<li>
							- Optimized page load speeds to enhance User
							Experience (UX) and boost SEO performance.
						</li>
						<li>
							- Customized system features and maintained backend
							security to protect administrative data.
						</li>
						<li>
							- Provided comprehensive CMS training and technical
							support during the project handover phase.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.bg-section {
	background: url("/images/background.jpg") no-repeat center center/cover;
}
.skill-item {
	display: flex;
	align-items: center;
	gap: 10px;
	margin: 0 auto;
	justify-content: start;
}

.skill-item p {
	max-width: 250px;
}
</style>
