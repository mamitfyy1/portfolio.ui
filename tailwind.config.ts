import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        './src/component/*.{ts,tsx}',
        './src/section/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#91ABAB",
                secondary: "#414141"
            },
            backgroundImage: {
                o3layer: "url('/asset/backgroundImages/o3layer-bg.png')",
                deutschexpress: "url('/asset/backgroundImages/deutschexpress-bg.png')",
                octopusbridge: "url('/asset/backgroundImages/octopusbridge-bg.png')"
            },
            screens: {
                '3xl': '1920px',
                '4xl': '2560px',
            },
        },
    },
    plugins: [
        require("@xpd/tailwind-3dtransforms")
    ],
};
export default config;
