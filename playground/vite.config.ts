import * as path from 'node:path';

import reactScan from '@react-scan/vite-plugin-react-scan';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode !== 'production';
  const isAnalyze = mode === 'analyze';

  return {
    define: {
      'process.env': {},
    },
    plugins: [
      react(),
      ...(isDev
        ? [
            reactScan({
              enable: true,
              autoDisplayNames: true,
            }),
          ]
        : []),
    ],
    optimizeDeps: {
      include: ['react'],
    },
    css: {
      devSourcemap: isDev,
    },
    build: {
      commonjsOptions: {
        include: [/node_modules/],
      },
      sourcemap: isAnalyze,
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    esbuild: {
      sourcemap: isDev,
    },
    server: {
      host: '0.0.0.0',
      port: 8000,
    },
    preview: {
      host: '0.0.0.0',
      port: 8000,
    },
  };
});
