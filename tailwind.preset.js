/**
 * vlab Corporation Design System - Tailwind CSS Preset
 * Use this preset in your tailwind.config.js:
 *
 * module.exports = {
 *   presets: [require('@vlab-corporation/design-system/tailwind-preset')],
 *   // your config...
 * }
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primary - Variation
        primary: {
          '100': '#FEF0F0',
          '200': '#FEE2E2',
          '300': '#FFD3D3',
          '400': '#FFB4B4',
          '500': '#FF9292',
          '600': '#FE7070',
          '700': '#E46464',
          '800': '#EE4E4E',
        },

          // Gray scale
         gray: {
         "50": "#F8f9fa",
         "100": "#F1f3f5",
         "200": "#e9ecef",
         "300": "#dee2e6",
         "400": "#ced4da",
         "500": "#adb5bd",
         "600": "#868e96",
         "700": "#495057",
         "800": "#343a40",
         "900": "#212529",
  },
        // Semantic
        success: {
            '50': '#EBFCF7',
            '100': '#E6FCF5',
            '200': '#66E7C0',
            '300': '#4CE3B6',
            '400': '#33DFAB',
            '500': '#19DBA1',
            '600': '#00D897',
            '700': '#00C287',
            '800': '#00AC78',
            '900': '#009769',
            '950': '#00815A',
        },
        warning: {
            '50': '#FFFAE2',
            '100': '#FFF9DB',
            '200': '#FAA36A',
            '300': '#F99451',
            '400': '#F88538',
            '500': '#F7761F',
            '600': '#F76707',
            '700': '#DE5C06',
            '800': '#C55205',
            '900': '#AC4804',
            '950': '#943D04',
        },
        error: {
            '50': '#FFE8E9',
            '100': '#FFE3E4',
            '200': '#F68B8B',
            '300': '#F57777',
            '400': '#F36464',
            '500': '#F25151',
            '600': '#F13E3E',
            '700': '#D83737',
            '800': '#C03131',
            '900': '#A82B2B',
            '950': '#902525',
        },
        info: {
            '50': '#A7C0F7',
            '100': '#92B1F5',
            '200': '#7CA1F3',
            '300': '#6691F1',
            '400': '#5082EF',
            '500': '#3A72ED',
            '600': '#2563EB',
            '700': '#2159D3',
            '800': '#1D4FBC',
            '900': '#1945A4',
            '950': '#163B8D',
        },
      },

      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          '"Malgun Gothic"',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },

      borderRadius: {
        card: '0.75rem',
        button: '0.375rem',
        input: '0.375rem',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },

      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'fade-out': 'fadeOut 200ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'slide-down': 'slideDown 300ms ease-out',
        'scale-in': 'scaleIn 200ms ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        shimmer: 'shimmer 2s ease-in-out infinite',
        'spin-slow': 'spin 1.5s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
      },

      transitionDuration: {
        fast: '150ms',
        normal: '200ms',
        slow: '300ms',
      },
    },
  },
};
