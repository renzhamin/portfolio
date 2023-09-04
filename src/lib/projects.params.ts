import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

function githubLink(link: string) {
	return {
		to: link,
		label: 'GitHub'
	};
}

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'classroom-feed',
		color: '#ff3e00',
		links: [
			githubLink('https://github.com/renzhamin/classroom-feed'),
			{ to: 'https://classroom.renzhamin.com', label: 'Deployment' }
		],
		logo: Assets.Classroom_Feed,
		name: 'classroom-feed',
		description:
			"This app shows all announcements of enrolled google classrooms sorted by last updated time. It's essentialy like a news feed for google classrom. Mobile support via PWA",
		type: 'Web App',
		skills: getSkills('ts', 'svelte'),
		period: {
			from: new Date('July 27, 2023'),
			to: new Date('Aug 14, 2023')
		}
	},
	{
		slug: 'lightchess',
		color: '#5e95e3',
		description:
			'A multiplayer chess platform with rating system. You can see your performance with statistics such as your rating graph. You can also replay past games for your improvement.',
		links: [
			githubLink('https://github.com/renzhamin/lightchess'),
			{ to: 'https://lightchess.renzhamin.com', label: '[ render.com ] 30s cold start :( ' }
		],
		logo: Assets.Lightchess,
		name: 'lightchess',
		period: {
			from: new Date('Sep 22, 2022'),
			to: new Date('Nov 25, 2022')
		},
		skills: getSkills('js', 'reactjs', 'express', 'ts'),
		type: 'Web App'
	},
	{
		slug: 'lightchess-desktop',
		color: '#ff3e00',
		description:
			'Play chess in your local network. You can play casual games or  host and participate in tournaments.',
		links: [githubLink('https://github.com/renzhamin/lightchess-desktop')],
		logo: Assets.Lightchess,
		name: 'lightchess-desktop',
		period: {
			from: new Date('Feb 1, 2022'),
			to: new Date('Apr 20, 2022')
		},
		skills: getSkills('java'),
		type: 'Desktop App'
	},
	{
		slug: 'zoomer',
		color: '#1ce87f',
		description:
			'Auto fetch lates zoom/meet links from enrolled google classrooms. Can also show the links for the current class from class routine.',
		links: [githubLink('https://github.com/renzhamin/zoomer')],
		logo: Assets.Zoomer,
		name: 'zoomer',
		period: {
			from: new Date('Apr 30, 2022'),
			to: new Date('May 6, 2022')
		},
		skills: getSkills('python'),
		type: 'CLI'
	},
	{
		slug: 'a-way-out',
		color: '#1c74e8',
		description:
			'A puzzle game where the player has to find a path that visits all the nodes of a 2d grid with obstacles essentially finding a hamltonian path in a graph.',
		links: [githubLink('https://github.com/renzhamin/a-way-out')],
		logo: Assets.AWayOut,
		name: 'a-way-Out',
		period: {
			from: new Date('Aug 10, 2021'),
			to: new Date('Nov 8, 2021')
		},
		skills: getSkills('cpp'),
		type: 'Desktop App'
	},
	{
		slug: 'listit',
		color: '#5e95e3',
		description:
			'Create notes, search others notes and import them into their own account. Notes are stored as lists, you can create todos, how to guides or even an entire course using a list. Mobile support via PWA.',
		links: [githubLink('https://github.com/renzhamin/listit')],
		logo: Assets.ReactJs,
		name: 'listit',
		period: {
			from: new Date('Apr 17, 2023'),
			to: new Date('Jun 3, 2023')
		},
		skills: getSkills('ts', 'reactjs', 'express'),
		type: 'Web App'
	},
	{
		slug: 'ai-chatbot',
		color: '#25cdd9',
		description: 'General purpose AI Chatbot with voice input and ocr.',
		links: [
			githubLink('https://github.com/renzhamin/ai-chatbot'),
			{
				to: 'https://chatbot.renzhamin.com',
				label: 'Deployment'
			}
		],
		logo: Assets.NextJs,
		name: 'ai-chatbot',
		period: {
			from: new Date('Jul 13, 2023'),
			to: new Date('Jul 16, 2023')
		},
		skills: getSkills('nextjs', 'reactjs', 'ts'),
		type: 'Web App'
	},

	{
		slug: 'anon-share',
		color: '#c5d119',
		description: 'Anonymously share files',
		links: [
			githubLink('https://github.com/renzhamin/anon-share'),
			{
				to: 'https://share.renzhamin.com',
				label: 'Deployment'
			}
		],
		logo: Assets.NextJs,
		name: 'anon-share',
		period: {
			from: new Date('Jul 10, 2023'),
			to: new Date('Jul 10, 2023')
		},
		skills: getSkills('nextjs', 'reactjs', 'js'),
		type: 'Web App'
	},
	{
		slug: 'caffeine',
		color: '#98b3b5',
		description:
			'Tea/Coffe ordering site tailored for IUT dormitory. Uses pocketbase as the backend/database.',
		links: [
			githubLink('https://github.com/renzhamin/caffeine'),
			{ to: 'https://caffeine.fly.dev/', label: 'Deployment' }
		],
		logo: Assets.Caffeine,
		name: 'caffeine',
		period: {
			from: new Date('Oct 7, 2022'),
			to: new Date('Oct 11, 2022')
		},
		skills: getSkills('reactjs', 'ts'),
		type: 'Web App'
	}
];

export default MY_PROJECTS;
