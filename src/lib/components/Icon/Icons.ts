import { Icons } from '$lib/utils';

export const viewBox = (icon: Icons) => {
	if (icon === Icons.Youtube) return '0 0 461.001 461.001';

	if (icon === Icons.Facebook) return '0 0 408.788 408.788';

	if (icon === Icons.Pen || icon === Icons.Info) return '0 0 512 512';
	if (icon === Icons.Dev) return '0 0 448 512';
	if (icon === Icons.Freecodecamp) return '0 0 576 512';

	return [Icons.GitHub, Icons.Search, Icons.Code].includes(icon) ? '0 0 16 16' : '0 0 24 24';
};
