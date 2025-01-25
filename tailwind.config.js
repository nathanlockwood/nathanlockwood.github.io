module.exports = {
    content: ["./**/*.html", "./**/**/*.html", "./content/*.md", "./config.toml"],
    theme: {
      extend: {
        colors: {
          tlgray: {
            200: "#E5E7EB",
            400: "#9CA3AF",
            700: "#374151",
            800: "#1F2937"
          },
          "custom-army-green": "#586d53",
        },
      },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
  };