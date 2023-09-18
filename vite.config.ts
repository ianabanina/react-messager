import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {find: 'app', replacement: '/src/app'},
            {find: 'common', replacement: '/src/common'},
            {find: 'entities', replacement: '/src/entities'},
        ],
    },
})
