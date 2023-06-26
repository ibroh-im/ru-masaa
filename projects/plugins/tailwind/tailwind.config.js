tailwind.config = {
  darkMode:'class',
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 10px 22px 0px rgba(147, 117, 81, 1)',
      },
    },
    letterSpacing: {
      currentWide: ".0.005em;",
      current: "0.5px",
      currentBig: "1px",
    },
    screens:{
      xs: '480px',
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1280px',
    },
    container: {
      padding: {
        DEFAULT: '0.5rem',
        sm: '0.9rem',
        lg: '1rem',
        xl: '1.2rem'
      },
      center: 'true',
    },
    colors: {
      'dark': {
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
        950: '#030712'
      },
      white: '#ffffff'
    },
  },
};
module.exports = {
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    }
  }
};