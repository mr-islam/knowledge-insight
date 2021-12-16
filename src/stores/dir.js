import { derived } from 'svelte/store';
import { locale, t } from 'svelte-i18n';

const dir = derived(locale, $locale => );

export { dir };