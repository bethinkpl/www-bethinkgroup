<template>
	<div class="mx-auto mb-32 max-w-7xl px-6 sm:mb-48 lg:px-8">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Our mission
			</h2>
			<div class="mt-6 flex flex-col gap-x-16 gap-y-20 lg:flex-row">
				<div class="lg:w-full lg:max-w-2xl lg:flex-auto">
					<p class="text-lg leading-8 text-gray-600">
						Education → Freedom → Happiness
					</p>
					<div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
						<p>
							Our mission is to assist in development, both individual and
							collective. We help people by inspiring them to overcome their own
							limitations. This is the driving force of progress. Therefore, in
							each of our minds, the words expressing what we want to offer
							resonate... Education → Freedom → Happiness.
						</p>
						<p class="mt-10">
							Proper education opens the mind and develops critical thinking and
							life skills, without which achieving freedom is impossible. Without
							it, there is not enough space in our minds to experience true
							happiness.
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-8 sm:flex-row lg:flex-auto lg:justify-center">
					<dl class="w-64 space-y-8 xl:w-64">
						<div
							v-for="stat in stats_1"
							:key="stat.label"
							class="flex flex-col-reverse gap-y-4"
						>
							<dt class="text-base leading-7 text-gray-600">{{ stat.label }}</dt>
							<dd class="text-5xl font-semibold tracking-tight text-gray-900">
								{{ stat.value }}
							</dd>
						</div>
					</dl>
					<dl class="w-64 space-y-8 xl:w-64">
						<div
							v-for="stat in stats_2"
							:key="stat.label"
							class="flex flex-col-reverse gap-y-4"
						>
							<dt class="text-base leading-7 text-gray-600">{{ stat.label }}</dt>
							<dd class="text-5xl font-semibold tracking-tight text-gray-900">
								{{ stat.value }}
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const stats_1 = [
		{ label: 'Yearly active students', value: '20k+' },
		{ label: 'Number of alumni', value: '40k+' },
		{ label: 'MedEd market share in Poland', value: '71%' },
	];
	const stats_2 = [
		{ label: 'Average course NPS', value: '72' },
		{ label: 'Average course satisfaction', value: '94%' },
		{ label: 'Current headcount', value: '170+' },
	];
</script>
