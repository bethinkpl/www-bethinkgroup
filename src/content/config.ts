import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const jobs = defineCollection({
	schema: z.object({
		meta: z.object({
			title: z.string(),
			description: z.string(),
			linkImageUrl: z.string(),
		}),
		title: z.string(),
		excerpt: z.string(),
		salaryRange: z.string(),
		isRemote: z.boolean().optional(),
		externalLink: z
			.object({
				text: z.string(),
				url: z.string().url(),
			})
			.optional(),
		isDraft: z.boolean(),
		isOpen: z.boolean(),
		isArchived: z.boolean(),
		heroImage: z.object({
			url: z.string(),
			alt: z.string().optional(),
		}),
	}),
});

export const collections = { blog, jobs };
