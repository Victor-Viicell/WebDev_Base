import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'gd-selected-blue': '#70BAFAff',
      'gd-purple': '#8DA5F3ff',
      'gd-violet': '#C38EF1ff',
      'gd-red': '#FB7F7Fff',
      'gd-yellow': '#F6D764ff',
      'gd-green': '#8EEF97ff',
      'gd-prop-blue': '#88B6DDff',
      'gd-logo-blue': '#478CBFff',
      'gd-white': '#E0E0E0ff',
      'gd-container': '#363D4Aff',
      'gd-container-nav': '#252B34ff',
      'gd-container-selected': '#202832ff',
      'gd-header-1': '#40444Cff',
      'gd-header-2': '#282D35ff',
      'gd-content': '#21262Eff',
      'gd-prop&background': '#1D2229ff',
      'gd-prop-type': '#15181Eff',
      'gd-unchecked-toggle': '#45484Eff',
      'gd-collapsable': '#4C535Eff',
    },
    fontFamily: {
      'victor-mono': ['"Victor Mono"', 'monospace'],
      'play': ['"Play"', 'sans-serif'],

    },
  },
  plugins: [
    plugin(
      ({
        addComponents,
      }: {
        addComponents: (
          styles: Record<string, Record<string, unknown>>
        ) => void;
      }) => {
        addComponents({
          '.transition-outline': {
            'transition-property':
              'outline-offset outline-width outline-style outline-color',
            'transition-duration': '150ms',
            'transition-timing-function': 'ease-out',
          },
        });
      }
    ),

  ],
} satisfies Config