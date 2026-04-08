import { heroui } from '@heroui/react';
export default heroui({
  themes: {
    light: {
      colors: {
        primary: {
          50: '#e8ecf5',
          100: '#c5cfe5',
          200: '#9fafd3',
          300: '#798fc1',
          400: '#5d77b3',
          500: '#243e85',
          600: '#1f3777',
          700: '#1a2e64',
          800: '#152551',
          900: '#0f1c3e',
          DEFAULT: '#243e85',
          foreground: '#ffffff',
        },
        focus: '#243e85',
      },
    },
    dark: {
      colors: {
        primary: {
          50: '#0f1c3e',
          100: '#152551',
          200: '#1a2e64',
          300: '#1f3777',
          400: '#243e85',
          500: '#5d77b3',
          600: '#798fc1',
          700: '#9fafd3',
          800: '#c5cfe5',
          900: '#e8ecf5',
          DEFAULT: '#5d77b3',
          foreground: '#ffffff',
        },
        focus: '#5d77b3',
      },
    },
  },
});
