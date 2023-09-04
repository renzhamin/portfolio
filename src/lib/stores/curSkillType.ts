import type { Skill } from '$lib/types';
import { writable } from 'svelte/store';

export const curSkillType = writable<Skill['type']>('core');
