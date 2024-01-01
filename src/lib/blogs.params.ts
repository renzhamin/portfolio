import Assets from './data/assets';
import { getSkills } from './skills.params';
import FreeCodeCamp from '$lib/Icons/FreeCodeCamp.svelte';
import Dev from '$lib/Icons/Dev.svelte';
import Blog from '$lib/Icons/Blog.svelte';

const MY_BLOGS = [
	{
		slug: 'regex-guide',
		description:
			'Regex can be used to perform bulk edits/deletes/substitution, extracting relevant texts and many more use cases that can save you a ton of time.',
		skills: getSkills('python', 'bash'),
		name: 'A practical guide to regular expression with real life examples',
		color: '#ffffff',
		link: 'https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/',
		icon: FreeCodeCamp
	},
	{
		slug: 'rest-api-auth-guide',
		description:
			'Authentication and authorization is one of the most critical part of any app. Protecting resources from unwanted users can be done using jsonwebtoken.',
		skills: getSkills('ts', 'js', 'express'),
		name: 'How to authenticate and protect rest api routes with jwt and refresh tokens',
		color: '#ffffff',
		link: 'https://dev.to/renzhamin/authenticate-and-protect-rest-api-routes-with-jwt-and-refersh-token-rotation-1lg5',
		icon: Dev
	},
	{
		slug: 'hdbscan-clustering',
		description: 'HDBSCAN is a clustering technique that addresses the limitations of DBSCAN',
		skills: getSkills(),
		name: 'HDBSCAN - an efficient and flexible clustering technique',
		color: '#ffffff',
		link: 'https://blog.renzhamin.com/hdbscan',
		icon: Blog
	}
];

export default MY_BLOGS;
