import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.js";
import cloudflare from '@sveltejs/adapter-cloudflare';
// import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		adapter: cloudflare({}),
    vite: {
      plugins: [
        precompileIntl('locales') // if your translations are defined in /locales/[lang].json
      ]			
    }		
	}
};

export default config;
