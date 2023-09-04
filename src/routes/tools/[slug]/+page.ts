import MY_SKILLS from '$lib/skills.params';

export const entries = () => {
	const res = [];
	MY_SKILLS.forEach((skill) => {
		res.push({ slug: skill.slug });
	});
	return res;
};

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const skill = MY_SKILLS.find((item) => {
			return item.slug === params.slug;
		});

		return { skill };
	}
}
