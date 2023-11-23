<template>
	<footer class="flex flex-col gap-6 mx-auto max-w-7xl overflow-hidden px-4 py-20">
		<nav class="flex justify-center gap-x-12" aria-label="Footer">
			<div v-for="item in footerNavigation.main" :key="item.name">
				<a
					:href="item.href"
					class="text-sm leading-6 text-gray-600 hover:text-gray-900"
					:target="item.target ? item.target : '_self'"
					>{{ item.name }}</a
				>
			</div>
		</nav>
		<p class="text-center text-xs leading-5 text-gray-500">
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
