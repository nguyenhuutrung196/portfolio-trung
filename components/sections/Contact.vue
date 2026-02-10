<script setup lang="ts">
import { ref, reactive } from "vue";

interface FormContactData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

const formData = reactive<FormContactData>({
	name: "",
	email: "",
	phone: "",
	message: "",
});

const errors = reactive<Partial<FormContactData>>({});

const isLoading = ref(false);
const isSuccess = ref(false);

const validateForm = () => {
	let isValid = true;
	Object.keys(errors).forEach(
		(key) => (errors[key as keyof typeof errors] = ""),
	);

	if (!formData.name.trim()) {
		errors.name = "Please enter your name/company";
		isValid = false;
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(formData.email)) {
		errors.email = "Please enter a valid email address";
		isValid = false;
	}

	const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
	if (formData.phone && !phoneRegex.test(formData.phone)) {
		errors.phone = "Please enter a valid phone number";
		isValid = false;
	}

	if (formData.message.length < 10) {
		errors.message = "Please enter a message of at least 10 characters";
		isValid = false;
	}

	return isValid;
};

const handleSubmit = async () => {
	if (!validateForm()) return;

	isLoading.value = true;

	try {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		console.log("Data sent:", formData);
		isSuccess.value = true;
		Object.keys(formData).forEach(
			(key) => (formData[key as keyof typeof formData] = ""),
		);
	} catch (error) {
		console.error("An error occurred, please try again later!", error);
	} finally {
		isLoading.value = false;
		setTimeout(() => (isSuccess.value = false), 5000);
	}
};
</script>

<template>
	<section id="contact" class="py-16 lg:py-24 bg-[#F1F5F9]">
		<div class="container mx-auto px-6">
			<div
				class="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
				<div class="flex flex-col gap-8 lg:w-1/2">
					<div
						class="flex flex-col-reverse lg:flex-row items-center lg:items-end gap-3">
						<div class="w-12 h-1 bg-blue-600"></div>
						<h2 class="text-section">Don't forget to contact me</h2>
					</div>

					<ul class="space-y-6">
						<li class="flex items-center gap-4 text-gray-700">
							<div
								class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
								<Icon
									name="fa6-solid:user"
									class="text-blue-600" />
							</div>
							<span class="font-medium text-lg text-black">
								Nguyễn Hữu Trung
							</span>
						</li>
						<li class="flex items-center gap-4 text-gray-700">
							<div
								class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
								<Icon
									name="fa6-solid:phone"
									class="text-blue-600" />
							</div>
							<NuxtLink
								to="tel:+84703007904"
								class="hover:text-blue-600 transition-colors">
								+84 70 300 7904
							</NuxtLink>
						</li>
						<li class="flex items-center gap-4 text-gray-700">
							<div
								class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
								<Icon
									name="fa6-solid:envelope"
									class="text-blue-600" />
							</div>
							<NuxtLink
								to="mailto:nguyenhuutrung.196@gmail.com"
								class="hover:text-blue-600 transition-colors">
								nguyenhuutrung.196@gmail.com
							</NuxtLink>
						</li>
						<li class="flex items-center gap-4 text-gray-700">
							<div
								class="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
								<Icon
									name="fa6-solid:location-dot"
									class="text-blue-600" />
							</div>
							<span>Chanh Hung Ward, District 8, HCMC</span>
						</li>
					</ul>
				</div>

				<div
					class="w-full lg:w-5/12 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
					<form @submit.prevent="handleSubmit" class="space-y-4">
						<div class="form-group">
							<input
								v-model="formData.name"
								type="text"
								placeholder="Your Name"
								:class="[
									'form-input',
									errors.name
										? 'border-red-500'
										: 'border-gray-200',
								]" />
							<p
								v-if="errors.name"
								class="text-red-500 text-xs mt-1">
								{{ errors.name }}
							</p>
						</div>

						<div class="form-group">
							<input
								v-model="formData.email"
								type="email"
								placeholder="Email Address"
								:class="[
									'form-input',
									errors.email
										? 'border-red-500'
										: 'border-gray-200',
								]" />
							<p
								v-if="errors.email"
								class="text-red-500 text-xs mt-1">
								{{ errors.email }}
							</p>
						</div>

						<div class="form-group">
							<input
								v-model="formData.phone"
								type="tel"
								placeholder="Phone Number"
								:class="[
									'form-input',
									errors.phone
										? 'border-red-500'
										: 'border-gray-200',
								]" />
							<p
								v-if="errors.phone"
								class="text-red-500 text-xs mt-1">
								{{ errors.phone }}
							</p>
						</div>

						<div class="form-group">
							<textarea
								v-model="formData.message"
								placeholder="How can I help you?"
								rows="4"
								:class="[
									'form-input resize-none',
									errors.message
										? 'border-red-500'
										: 'border-gray-200',
								]"></textarea>
							<p
								v-if="errors.message"
								class="text-red-500 text-xs mt-1">
								{{ errors.message }}
							</p>
						</div>

						<button
							type="submit"
							:disabled="isLoading"
							class="w-full py-4 bg-blue-600 text-white rounded-xl font-bold uppercase tracking-widest hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2">
							<Icon
								v-if="isLoading"
								name="line-md:loading-twotone-loop"
								size="20" />
							{{ isLoading ? "Sending..." : "Send Message" }}
						</button>

						<Transition name="fade">
							<div
								v-if="isSuccess"
								class="bg-green-100 text-green-700 p-4 rounded-lg text-center text-base font-medium">
								Your message has been sent successfully!
							</div>
						</Transition>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.form-input {
	@apply w-full p-4 bg-gray-50 border rounded-xl outline-none focus:border-blue-600 focus:bg-white transition-all text-base;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
