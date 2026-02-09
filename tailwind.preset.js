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
        // Primary - Rehabworks
        primary: {
          '100': '#F5F5FF',
          '200': '#EBEBFF',
          '300': '#DBDBFF',
          '400': '#B7B7FF',
          '500': '#8F8FFF',
          '600': '#7070FE',
          '700': '#5A5AFF',
          '800': '#4141FF',
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
          100: '#E6FCF5',
          600: '#00D897',
        },
        warning: {
          100: '#FFF9DB',
          600: '#F76707',
        },
        error: {
          100: '#FFE3E4',
          600: '#F13E3E',
        },
        info: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
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
