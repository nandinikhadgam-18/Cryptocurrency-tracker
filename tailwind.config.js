/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                nordic: {
                    bg: '#0f172a', // Slate 900
                    card: 'rgba(30, 41, 59, 0.7)', // Slate 800 with opacity
                    accent: '#38bdf8', // Sky 400
                    text: '#f8fafc', // Slate 50
                    muted: '#94a3b8', // Slate 400
                    glass: 'rgba(255, 255, 255, 0.1)',
                    glassBorder: 'rgba(255, 255, 255, 0.2)',
                }
            },
            backdropBlur: {
                xs: '2px',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
