<template>
	<footer
		class="mx-auto mt-40 max-w-7xl overflow-hidden px-6 pb-20 sm:mt-64 sm:pb-24 lg:px-8"
	>
		<nav
			class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
			aria-label="Footer"
		>
			<div v-for="item in footerNavigation.main" :key="item.name" class="pb-6">
				<a
					:href="item.href"
					class="text-sm leading-6 text-gray-600 hover:text-gray-900"
					:target="item.target ? item.target : '_self'"
					>{{ item.name }}</a
				>
			</div>
		</nav>
		<p class="mt-10 text-center text-xs leading-5 text-gray-500">
			&copy; 2017 - {{ currentYear }} Bethink sp. z o. o. All rights reserved.
		</p>
	</footer>
</template>
<script setup lang="ts">
	const footerNavigation = {
		main: [
			{ name: 'Blog', href: '/blog' },
			{ name: 'Jobs', href: '/join-us' },
			{
				name: 'Follow us',
				href: 'https://www.linkedin.com/company/bethinkgroup',
				target: '_blank',
			},
		],
	};

	const currentYear = new Date().getFullYear();
</script>
