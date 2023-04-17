/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        extend: {
            colors: {
                "primary-400": "hsla(45, 100%, 50%, 1)",
                "secondary-300": "hsla(213, 76%, 34%, 1)",
                "secondary-400": "hsla(211, 80%, 24%, 1)",
                "secondary-500": "hsla(211, 100%, 16%, 1)",
                "gray-100": "#F9F9F9",
                "gray-200": "#F6F6F6",
                "gray-300": "hsla(0, 0%, 43%, 1)",
                "black-600": "hsla(211, 100%, 16%, 1)",
                "gray-border": "rgba(0, 0, 0, 0.2);",
                "70-black": "rgba(0,0,0,0.7)",
                "80-black": "rgba(0,0,0,0.8)",
                "90-black": "rgba(31, 26, 23, 0.9)",
                "20-black": "rgba(0,0,0,0.2)",
                "80-gray": "rgba(217, 217, 217, 0.8)",
                "50-gray": "rgba(200, 200, 200, 0.5);",
                "20-white": "rgba(246, 246, 246, 0.2)",
            },
            backgroundImage: {
                info: "url('/assets/info.jpg')",
            },

            fontFamily: {
                body: ["Open sans", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },

            borderWidth: {
                3: "3px",
                5: "5px",
                10: "10px",
            },
        },

        screens: {
            "2xl": { max: "1535px" },

            xl: { max: "1279px" },

            lg: { max: "1023px" },

            md: { max: "767px" },

            sm: { max: "639px" },
        },
    },

    plugins: [],
};

