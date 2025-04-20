import plugin from 'tailwindcss/plugin'

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lora', 'sans-serif'],
        custom: ['eternals-universe'],
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        'accent': {
          DEFAULT: 'var(--color-accent)',
          '600': 'hsl(from var(--color-accent) h s calc(l - 10))',
        }
      },
      animation: {
        ['smooth-slide']: 'smooth-slide 20s ease-in-out infinite alternate',
      },
      keyframes: {
        ['smooth-slide']: {
          'from': { ['object-position']: '0% 0%' },
          'to': { ['object-position']: '100% 0%' },
        }
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
    require("tailwindcss-animate"),
    plugin(function ({ addComponents }) {
      addComponents({
        '.object-t30': {
          'object-position': 'center 30%',
        },
      });
    }),
  ],
}