import preprocess from "svelte-preprocess";
import { dirname } from "path";
import { fileURLToPath } from "url";

const filePath = dirname(fileURLToPath(import.meta.url));
const sassPath = `${filePath}/src/styles/`;

export default {
	// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: `@use '${sassPath}_utilities.scss' as *;`,
		},
	}),
};
