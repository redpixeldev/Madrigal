import tailwind from 'eslint-plugin-tailwindcss';
import eslintPluginAstro from 'eslint-plugin-astro';
import tsParser from '@typescript-eslint/parser';

export default [
	tailwind.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		// Parse standalone TypeScript files (e.g. src/consts.ts) with the TS parser.
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
		},
	},
	{
		settings: {
			tailwindcss: {
				// Tailwind v4 is CSS-first: point the plugin at the @theme entry
				// (v4 default is src/style.css, which this project does not use).
				cssConfigPath: 'src/styles/main.css',
			},
		},
	},
];
