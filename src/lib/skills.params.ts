import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';
import Server from '$lib/Icons/Server.svelte';
import Linux from '$lib/Icons/Linux.svelte';
import Scripting from '$lib/Icons/Scripting.svelte';
import Platforms from '$lib/Icons/Platforms.svelte';
import Database from '$lib/Icons/Database.svelte';
import Frontend from '$lib/Icons/Frontend.svelte';
import Education from '$lib/Icons/Education.svelte';

const s = (skill: Skill) => {
	if (!skill.type) skill.type = 'language';
	return skill;
};

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'education',
		color: 'aqua',
		name: 'Education',
		type: 'core',
		icon: Education,
		description:
			'4th year Computer Science student studiying in Islamic University of Technology. Current CGPA: 3.89 / 4.0'
	}),

	s({
		slug: 'backend',
		color: 'aqua',
		name: 'Backend',
		type: 'core',
		icon: Server,
		description:
			'I have made backends with java, nodejs and also used backed as a service like supabase, dived deep into authentication and creating secure endpoints. I mostly used express to build backends but currently I like the NextJs/SvelteKit approach to creating full stack apps.'
	}),

	s({
		slug: 'database',
		color: 'grey',
		name: 'Database',
		type: 'core',
		icon: Database,
		description:
			"I have used a lot of different databases. My current standpoint is, use postgres if I can, if not use mariadb or mysql. I have also used managed services like supabase and pocketbase that provides a backend in addition to a database. For small projects, I used mongodb but nowdays I avoid it unless there's a really good reason to use it. These days I prefer to use ORM's if possible. Tools like prisma really makes working with a database a lot easier. For serverless/edge environments, upstash redis is my go to for caching or rate limiting."
	}),

	s({
		slug: 'frontend',
		color: 'orange',
		name: 'Frontend',
		type: 'core',
		icon: Frontend,
		description:
			'Besides vanilla html and css, I have build projects with react and svelte. I really like the simplicity of svelte but react is fine as well. I also used css component libraries like materialui, daisyui to name a few.'
	}),

	s({
		slug: 'platforms',
		color: 'blue',
		name: 'Platforms',
		type: 'core',
		icon: Platforms,
		description:
			'Railway was my favourite platform to deploy any web app until they killed the free tier. Currently, I use adaptable which is really fantastic for nodejs apps. But for a Next/SvelteKit app I tend to prefer vercel which not only support serverless/edge runtime but also provide postgres and redis as well. If I have to deploy a docker, fly.io is my go to platform but render is also great. For static sites, I like netlify a lot but nowdays I find github pages to be a bit faster.'
	}),

	s({
		slug: 'linux',
		color: 'yellow',
		name: 'Linux',
		type: 'core',
		icon: Linux,
		description:
			"I started my journey with Linux Mint which is a fantastic distribution for beginners. Then I moved to archlinux and been here ever since. I mainly used virtualbox for virtual machines but I later found out about KVM/Qemu which is really flexible and  performant. I make sure that I'm up to date with WSL as its kind of mandatory for me when using windows."
	}),
	s({
		slug: 'scripting',
		color: 'yellow',
		name: 'Scripting',
		type: 'core',
		icon: Scripting,
		description:
			"If the task involves heavy usage of command line tools I go with bash. But If my script starts to get big, I would move to python. Bash is good enough for most of my automation tasks. It's the backbone of my linux environment with a minimal window manager setup. I also use a bit of lua because of using neovim which is configured using lua."
	}),

	s({
		slug: 'cpp',
		color: 'blue',
		logo: Assets.Cpp,
		name: 'C++'
	}),

	s({
		slug: 'js',
		color: 'yellow',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),

	s({
		slug: 'python',
		color: 'green',
		logo: Assets.Python,
		name: 'Python'
	}),

	s({
		slug: 'java',
		color: 'red',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'bash',
		color: 'green',
		logo: Assets.Bash,
		name: 'Bash'
	}),

	s({
		slug: 'reactjs',
		color: 'cyan',
		logo: Assets.ReactJs,
		name: 'ReactJs',
		type: 'framework'
	}),
	s({
		slug: 'nextjs',
		color: 'black',
		logo: Assets.NextJs,
		type: 'framework',
		name: 'NextJs'
	}),

	s({
		slug: 'svelte',
		color: 'orange',
		description: svelte,
		logo: Assets.Svelte,
		type: 'framework',
		name: 'Svelte(Kit)'
	}),
	s({
		slug: 'express',
		color: 'grey',
		logo: Assets.ExpressJs,
		type: 'framework',
		name: 'ExpressJs'
	}),

	s({
		slug: 'docker',
		color: 'black',
		logo: Assets.Docker,
		type: 'tool',
		name: 'Docker'
	}),

	s({
		slug: 'hugo',
		color: 'pink',
		logo: Assets.Hugo,
		type: 'tool',
		name: 'Hugo'
	}),

	s({
		slug: 'git',
		color: 'orange',
		logo: Assets.Git,
		type: 'tool',
		name: 'Git'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
