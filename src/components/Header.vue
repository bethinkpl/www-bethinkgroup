<template>
	<header class="sticky inset-x-0 top-0 z-50 bg-background/60 backdrop-blur-lg">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">{{ COMPANY_NAME }}</span>
					<img class="h-8 w-auto" :src="LOGO_URL" alt="" />
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					@click="mobileMenuOpen = true"
				>
					<span class="sr-only">Open main menu</span>
					<Bars3Icon class="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
			<!-- <div class="hidden lg:flex lg:gap-x-12">
			</div> -->
			<div class="hidden lg:flex lg:flex-1 lg:gap-x-8 lg:justify-end">
				<a
					v-for="item in navigation"
					:key="item.name"
					:href="item.href"
					:class="[isActive(item.href) ? 'text-teal-600' : '']"
					class="text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-teal-600"
					:target="item.newTab ? '_blank' : '_self'"
					>{{ item.name }}</a
				>
			</div>
		</nav>
		<Dialog
			as="div"
			class="lg:hidden"
			@close="mobileMenuOpen = false"
			:open="mobileMenuOpen"
		>
			<div class="fixed inset-0 z-50" />
			<DialogPanel
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">{{ COMPANY_NAME }}</span>
						<img class="h-8 w-auto" :src="LOGO_URL" alt="" />
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						@click="mobileMenuOpen = false"
					>
						<span class="sr-only">Close menu</span>
						<XMarkIcon class="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6"></div>
						<a
							v-for="item in navigation"
							:key="item.name"
							:href="item.href"
							:class="[isActive(item.href) ? 'text-teal-600' : '']"
							class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
							:target="item.newTab ? '_blank' : '_self'"
						>
							{{ item.name }}
						</a>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	</header>
</template>
<script setup lang="ts">
	import { ref } from 'vue';
	import { Dialog, DialogPanel } from '@headlessui/vue';
	import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

	const COMPANY_NAME = 'Bethink Group';
	const LOGO_URL = '/bethinkgroup__logo.png';

	const navigation = [
		{ name: 'Our story', href: '/our-story' },
		{ name: 'Technology', href: '/technology' },
		{ name: 'Join us', href: '/join-us' },
		{ name: 'Blog', href: 'https://medium.com/bethink-pl', newTab: true },
	];

	const mobileMenuOpen = ref(false);

	function isActive(path: string): boolean {
		return !!window.location.pathname.match(path);
	}
</script>
