<template>
	<div class="relative isolate -z-10 mb-32 sm:mb-48">
		<div
			class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]"
		>
			<svg class="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
				<defs>
					<pattern
						id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
						width="200"
						height="200"
						x="50%"
						y="50%"
						patternUnits="userSpaceOnUse"
						patternTransform="translate(-100 0)"
					>
						<path d="M.5 200V.5H200" fill="none" />
					</pattern>
				</defs>
				<svg x="50%" y="50%" class="overflow-visible fill-gray-50">
					<path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0" />
				</svg>
				<rect
					width="100%"
					height="100%"
					stroke-width="0"
					fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
				/>
			</svg>
		</div>
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Our brands
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray-600">
					The success we've seen is based firmly on our core values.
				</p>
			</div>
			<div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
				<dl
					v-for="project in projects"
					:key="project.name"
					class="p-6 flex flex-col gap-6 shadow rounded-lg bg-background border border-gray-100"
				>
					<dt class="flex justify-between">
						<span class="text-xl font-bold">
							{{ project.name }}
						</span>
						<img
							class="object-contain"
							:src="project.logo"
							:alt="project.name"
							width="120"
							height="36"
						/>
					</dt>
					<dd class="text-gray-600">
						{{ project.description }}
					</dd>
					<a :href="project.website" target="_blank" class="text-sm font-bold"
						>Visit website →</a
					>
				</dl>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
	const projects = [
		{
			logo: 'https://wiecejnizlek.pl/wp-content/uploads/2019/01/normal.svg',
			name: 'Więcej niż LEK',
			website: 'https://wiecejnizlek.pl',
			description:
				'Leading provider of e-learning education for medical students and practitioners. Managing 15 courses and serving over 9,000 students every year.',
		},
		{
			logo: 'https://wiecejnizmatura.pl/wp-content/uploads/2022/05/img-1.png',
			name: 'Więcej niż Matura',
			website: 'https://wiecejnizmatura.pl',
			description:
				'The biggest med-prep solution on the market. Online Biology and Chemistry courses for high-school students with fully integrated tutoring and assessments bank.',
		},
		{
			logo: 'https://twojdyzur.pl/wp-content/uploads/2019/04/Logo.svg',
			name: 'Twój Dyżur',
			website: 'https://twojdyzur.pl',
			description:
				'Market leader in the field of ER-prep education. Reaching tens of thousands of doctors, paramedics and nurses, it helps thousands of medical graduate every year.',
		},
		{
			logo: 'https://najprosciejmowiac.pl/wp-content/uploads/2023/07/logo.png',
			name: 'Najprościej Mówiąc',
			website: 'https://najprosciejmowiac.pl',
			description:
				'An emerging health education portal for patients. Started as an educative YouTube channel, Najprościej Mówiąc aims at being a widespread and trusted source.',
		},
		{
			logo: '/bethinkgroup__logo.png',
			name: 'Bethink.space',
			website: 'https://bethink.space',
			description:
				'A space created for an online course on effective learning. Based on the latest scientific research and our methodology, the course helps people fall in love with learning.',
		},
	];
</script>
