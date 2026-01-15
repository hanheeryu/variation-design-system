import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [require('./tailwind.preset')],
  content: [
    './src/**/*.{ts,tsx}',
    './stories/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
