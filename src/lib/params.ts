import MY_EXPERIENCES from './experiences.params';
import MY_BLOGS from './blogs.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'renzhamin';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	blogs: 'Blogs',
	resume: 'Resume',
	skills: 'Skills',
	about: 'About'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
		case Platform.FreeCodeCamp:
			return Icons.Freecodecamp;
		case Platform.Dev:
			return Icons.Dev;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Tasnim',
	lastName: 'Ferdous',
	alias: 'renzhamin',
	description: `Software Engineer | CTF Player | Final year Computer Science Student.\n
    I go by the alias renzhamin in all platforms.`,
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/renzhamin' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/renzhamin'
		},
		{
			platform: Platform.Twitter,
			link: 'https://twitter.com/renzhamin'
		},
		{
			platform: Platform.FreeCodeCamp,
			link: 'https://www.freecodecamp.org/news/author/renzhamin/'
		},
		{
			platform: Platform.Dev,
			link: 'https://dev.to/renzhamin/'
		},
		{
			platform: Platform.StackOverflow,
			link: 'https://stackoverflow.com/users/10004404/renzhamin'
		},
		{
			platform: Platform.Email,
			link: 'renzhamin@gmail.com'
		}
		/* { */
		/* 	platform: Platform.Youtube, */
		/* 	link: 'https://www.youtube.com' */
		/* }, */
		/* { */
		/* 	platform: Platform.Facebook, */
		/* 	link: 'https://www.facebook.com' */
		/* } */
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const BLOGS = {
	title: 'Blogs',
	items: MY_BLOGS
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: ''
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
