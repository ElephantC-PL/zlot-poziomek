import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const version = defineCollection({
	loader: glob({ base: './src/content/version', pattern: '**/*.{md,mdx}' }),	
  	schema: ({ image }) =>
		z.discriminatedUnion('type', [
			z.object({
				type: z.literal('banner'),  
				image: z.object({
					src: image(),   
					alt: z.string(), 
				}).optional(),
			}),
			z.object({
				type: z.literal('about'),   
				image: z.object({
					src: image(),   
					alt: z.string(), 
				}).optional(),
				banner: z.object({
					src: image(),   
					alt: z.string(), 
				}).optional(),
			}),
			z.object({
				type: z.literal('directions'), 
				map: z.string().url().optional(),     
			}),		
			z.object({
				type: z.literal('accomodation'), 
				image: z.object({
					src: image(),   
					alt: z.string(), 
				}).optional(),
			}),
			z.object({
				type: z.literal('cattering'),      
				image: z.object({
					src: image(),   
					alt: z.string(), 
				}).optional(),
			}),
			z.object({
				type: z.literal('schedule'),      
			}),
			z.object({
				type: z.literal('tracks'),  
				days: z.array(
					z.object({
						name: z.string(),
						routes: z.array(
							z.object({
								name: z.string().optional(),
								map: z.string().url().optional(),
								link: z.string().url().optional(),
								gpx: z.string().optional(),
							})
						),
					})
				).optional(),      
			}),
			z.object({
				type: z.literal('registry'),      
			}),
			z.object({
				type: z.literal('tShirts'),  
				image: z.object({
					src: image(),   
					alt: z.string(), 
				}).optional(),
			}),
			z.object({
				type: z.literal('contact'),    
			image: z.object({
					src: image(),   
					alt: z.string(), 
				}).optional(),		
				nameLines: z.array(z.string()),
				email: z.string().email(),
				phone: z.string(),
			}),
		]),
});

const error404 = defineCollection({	
	loader: glob({ base: './src/content/page/error404', pattern: '**/*.{md,mdx}' }),	
	schema: () => z.object({
		title: z.string(),	
	}),
});

export const collections = { version, error404 };
