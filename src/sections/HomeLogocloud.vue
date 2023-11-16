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
			<h2 class="text-center text-lg font-semibold leading-8 text-gray-900">
				Read more about our projects
			</h2>
			<div
				class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none"
			>
				<img
					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					src="https://wiecejnizlek.pl/wp-content/uploads/2019/01/normal.svg"
					alt="Więcej niż LEK"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					src="https://wiecejnizmatura.pl/wp-content/uploads/2022/05/img-1.png"
					alt="Więcej niż Matura"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
					src="https://twojdyzur.pl/wp-content/uploads/2019/04/Logo.svg"
					alt="Twój Dyżur"
					width="158"
					height="48"
				/>
				<img
					class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
					src="https://najprosciejmowiac.pl/wp-content/uploads/2023/07/logo.png"
					alt="Najprościej Mówiąc"
					width="158"
					height="48"
				/>
			</div>
		</div>
	</div>
</template>
