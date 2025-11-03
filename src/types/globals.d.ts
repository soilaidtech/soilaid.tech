declare module '*.css'
declare module 'daisyui' {
	import type { Plugin } from 'tailwindcss/types/config'

	const daisyui: Plugin
	export default daisyui
}
