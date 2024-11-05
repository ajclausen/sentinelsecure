/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";

export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        "./node_modules/@tailus/themer-**/dist/**/*.{js,ts}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#FAF5FF',
                    100: '#F3E8FF',
                    200: '#E9D5FF',
                    300: '#D8B4FE',
                    400: '#C084FC',
                    500: '#9333EA', // Your main purple
                    600: '#7E22CE',
                    700: '#6B21A8',
                    800: '#581C87',
                    900: '#3B0764',
                }
            }
        }
    },
    plugins: [
        themer({
            palette: {
                primary: '#9333EA',
                extend: "oz",
            },
            scheme: "dark",
            radius: "smoothest",
            spacing: "large"
        })
    ],
};