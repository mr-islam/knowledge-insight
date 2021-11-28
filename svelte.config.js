import precompileIntl from "svelte-intl-precompile/sveltekit-plugin.js";
import adapter from '@sveltejs/adapter-netlify';
// import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(), // currently the adapter does not take any options
		target: '#svelte',
    vite: {
      plugins: [
        precompileIntl('locales') // if your translations are defined in /locales/[lang].json
      ]			
    }		
	}
};

export default config;
