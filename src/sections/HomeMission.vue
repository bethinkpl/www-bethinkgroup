<template>
	<div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
		<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Our mission
			</h2>
			<div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
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
				<div class="lg:flex lg:flex-auto lg:justify-center">
					<dl class="w-64 space-y-8 xl:w-80">
						<div
							v-for="stat in stats"
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
	const stats = [
		{ label: 'Yearly active students', value: '17,000+' },
		{ label: 'Average course satisfaction', value: '93%+' },
		{ label: 'Current headcount', value: '80+' },
	];
</script>
