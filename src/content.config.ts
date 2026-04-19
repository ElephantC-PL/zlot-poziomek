import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { map } from 'astro:schema';

const version = defineCollection({
	loader: glob({ base: './src/content/version', pattern: '**/*.{md,mdx}' }),	
  	schema: ({ image }) =>
		z.discriminatedUnion('type', [
			z.object({
				type: z.literal('banner'),  
				image: image().optional(),   
				alt: z.string().optional(), 
			}),
			z.object({
				type: z.literal('about'),   
				image: image().optional(),   
				alt: z.string().optional(), 
			}),
			z.object({
				type: z.literal('directions'), 
				map: z.string().url().optional(),     
			}),		
			z.object({
				type: z.literal('accomodation'), 
				image: image().optional(),   
				alt: z.string().optional(),      
			}),
			z.object({
				type: z.literal('cattering'),      
				image: image().optional(),   
				alt: z.string().optional(),      
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
			}),
			z.object({
				type: z.literal('contact'),      
			}),
		]),
});

const blog = defineCollection({	
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),	
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),		
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
	}),
});


const home = defineCollection({	
	loader: glob({ base: './src/content/page/home', pattern: '**/*.{md,mdx}' }),	
	schema: () => z.object({
		title: z.string(),			
	}),
});

const aboutUs = defineCollection({	
	loader: glob({ base: './src/content/page/aboutUs', pattern: '**/*.{md,mdx}' }),		
	schema: () => z.object({
		title: z.string(),			
	}),
});

const termsOfService = defineCollection({	
	loader: glob({ base: './src/content/page/termsOfService', pattern: '**/*.{md,mdx}' }),	
	schema: () => z.object({
		title: z.string(),			
	}),
});

const privacyPolicy = defineCollection({	
	loader: glob({ base: './src/content/page/privacyPolicy', pattern: '**/*.{md,mdx}' }),		
	schema: () => z.object({
		title: z.string(),			
	}),
});

const cookiesPopup = defineCollection({	
	loader: glob({ base: './src/content/popup/cookies', pattern: '**/*.{md,mdx}' }),	
	schema: () => z.object({
	}),
});

const error404 = defineCollection({	
	loader: glob({ base: './src/content/page/error404', pattern: '**/*.{md,mdx}' }),	
	schema: () => z.object({
		title: z.string(),	
	}),
});

const cookiesPage = defineCollection({	
	loader: glob({ base: './src/content/page/cookies', pattern: '**/*.{md,mdx}' }),	
	schema: () => z.object({
		title: z.string(),	
	}),
});

const nested = defineCollection({	
	loader: glob({ base: './src/content/page/nested', pattern: '**/*.{md,mdx}' }),
	schema: () => z.object({
		title: z.string(),			
	}),
});

export const collections = { version, blog, home, aboutUs, termsOfService, privacyPolicy, cookiesPage, cookiesPopup, error404, nested };
