/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';

    return {
        base: isDev ? '/' : '/react_practive/',
        plugins: [react()],
        server: {
            host: '0.0.0.0',
            open: true,
            proxy: {
                '/api': {
                    target: 'https://jsonplaceholder.typicode.com',
                    changeOrigin: true,
                    secure: false,
                    rewrite: (p) => p.replace(/^\/api/, '')
                }
            }
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    };
});
