import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#cd00ff",
                    secondary: "#00c3ff",
                    accent: "#008eff",
                    neutral: "#12210f",
                    "base-100": "#21253a",
                    info: "#00c3ff",
                    success: "#008e00",
                    warning: "#ef9600",
                    error: "#cf1743",
                },
            },
        ],
    },
};
export default config;
