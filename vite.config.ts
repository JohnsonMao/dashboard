/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
                    target: 'http://slopeuat.freeway.gov.tw/web',
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    };
});
