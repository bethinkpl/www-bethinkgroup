<template>
	<!-- Image section -->
	<div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
		<img
			src="https://bethink.space/wp-content/uploads/2021/12/zdjecia_Bethink064-scaled.jpg"
			alt=""
			class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
		/>
	</div>

	<!-- Values section -->
	<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Our values
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				The success we've seen is based firmly on our core values.
			</p>
		</div>
		<dl
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<div v-for="value in values" :key="value.name">
				<dt class="font-semibold text-gray-900">{{ value.name }}</dt>
				<dd class="mt-1 text-gray-600">{{ value.description }}</dd>
			</div>
		</dl>
	</div>
</template>

<script setup lang="ts">
	const values = [
		{
			name: 'Evidence-based teaching',
			description:
				'Hype is dangerous. It often promotes a solution that is not beneficial to students. We base our teaching methodology on evidence based practices and latest research.',
		},
		{
			name: 'Think, say and do the same',
			description:
				'Integrity between thoughts, speech and actions is the fundamental principle we follow. We embrace healthy conflict of ideas and prioritize truth over comfort.',
		},
		{
			name: 'Growth mindset',
			description:
				'We treat our mistakes as an opportunity to learn. Always asking "Why?", but never seeking scape goats, we try to understand our failures and be wiser in the future. ',
		},
		{
			name: 'Effective collaboration',
			description:
				'We value teamwork, where diverse perspectives are respected. Effective collaboration is core, fostering a culture of shared goals and celebrating collective achievements.',
		},
		{
			name: 'Full ownership',
			description:
				"More than responsibility, it's a commitment to excellence. We empower team members to take initiative, make decisions, and be accountable. This instills pride and dedication, ensuring each contributes to the company's success.",
		},
		{
			name: 'Caring about others',
			description:
				"At our core is genuine concern for others' well-being. We cultivate empathy, kindness, and support, recognizing individual success is intertwined with team success. Caring is a guiding principle shaping our interactions.",
		},
	];
</script>
