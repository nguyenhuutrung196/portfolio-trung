<script setup lang="ts"></script>

<template>
	<section class="py-10 lg:py-20 bg-slate-400">
		<div class="container">
			<div class="flex flex-col lg:flex-row justify-between gap-5">
				<div class="flex flex-col gap-5">
					<div
						class="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-start gap-2">
						<div class="w-10 h-1 bg-[#F7ED00]"></div>
						<h2 class="text-section">Don't forget to contact me</h2>
					</div>
					<ul class="">
						<li class="flex items-center gap-2">
							<Icon name="fa6-solid:user" size="16" />
							Nguyễn Hữu Trung
						</li>
						<li class="flex items-center gap-2">
							<Icon name="fa6-solid:phone" size="16" />
							<NuxtLink to="tel:+84703007904">
								+84 70 300 7904
							</NuxtLink>
						</li>
						<li class="flex items-center gap-2">
							<Icon name="fa6-solid:envelope" size="16" />
							<NuxtLink to="mailto:nguyenhuutrung.196@gmail.com">
								inguyenhuutrung.196@gmail.com
							</NuxtLink>
						</li>
						<li class="flex items-center gap-2">
							<Icon name="fa6-solid:location-dot" size="16" />
							Ho Chi Minh City
						</li>
					</ul>
				</div>
				<div class="w-full lg:w-1/3">
					<form action="">
						<div class="flex flex-col gap-2">
							<div class="form-control">
								<input
									type="text"
									name="name"
									placeholder="Name" />
							</div>
							<div class="form-control">
								<input
									type="email"
									name="email"
									placeholder="Email" />
							</div>
							<div class="form-control">
								<input
									type="tel"
									name="phone"
									placeholder="Phone" />
							</div>
							<div class="form-control">
								<textarea
									name="message"
									placeholder="Give me some message"
									rows="5"></textarea>
							</div>
							<div class="form-control">
								<button
									type="submit"
									class="p-3 bg-slate-800 text-white rounded-md w-full hover:bg-slate-950 transition-colors">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.form-control {
	position: relative;
}

.form-control input,
.form-control textarea {
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 5px;
	outline: none;
}
</style>
