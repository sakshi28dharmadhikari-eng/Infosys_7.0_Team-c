import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],
manifest:{name:'SoilSense AI',short_name:'SoilSense',description:'Understand Your Soil. Grow Smarter.',theme_color:'#236B45',background_color:'#F7F8F3',display:'standalone',start_url:'/',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]},
// Only static assets are precached; API/user data is never cached.
workbox:{globPatterns:['**/*.{js,css,html,svg}'],navigateFallback:'/index.html',navigateFallbackDenylist:[/^\/api/]}})]})
