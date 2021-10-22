module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
    content: ['/purge/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    screens: {
      'xs': '290px',
      // => @media (min-width: 290px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      content: {
        inputRegistration: 'Пожалуйста введите корректный email'
      },
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      dark: ["checked"],
      backgroundColor: ["checked", "active"],
      backgroundOpacity: ["active"],
      borderColor: ["checked", "hover", "active"],
      borderOpacity: ["active"],
      textColor: ["active"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [
   
  ],
  future: {
    purgeLayersByDefault: true,
  },
};