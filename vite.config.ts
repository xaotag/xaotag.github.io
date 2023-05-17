import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			'/sug': {
				target: 'https://suggest.taobao.com/',
				changeOrigin: true,
				//	rewrite: (path) => path.replace(/^\/sug/, ''),
			},
		},
	},
});
