import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  compressHTML: false,

  server: {
      port: 4360,
	},

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Montserrat Alternates',
      cssVariable: '--font-montserrat-alternates',
      weights: [500, 600, 700],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Mulish',
      cssVariable: '--font-mulish',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
    },
  ],

  build: {
      assets: 'assets',
      format: 'file',
	},

  vite: {
      plugins: [tailwindcss()],
      build: {
          assetsInlineLimit: 0,
          rollupOptions: {
              output: {
                  entryFileNames: 'assets/main.js',
                  assetFileNames: 'assets/main[extname]',
              },
          },
      },
	},

  output: 'static',
});
