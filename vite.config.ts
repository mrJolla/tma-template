import svg from '@neodx/svg/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: './build',
  },
  plugins: [
    tsconfigPaths(),
    react(),
    svg({
      fileName: '{name}.{hash:8}.svg',
      group: true,
      metadata: {
        path: 'src/shared/types/icon.ts',
        runtime: {
          viewBox: true,
        },
      },
      output: 'public/imgs/svg-sprites',
      resetColors: {
        replaceUnknown: 'currentColor',
      },
      root: 'assets/icons',
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
  root: './',
  server: {
    open: true,
  },
});
