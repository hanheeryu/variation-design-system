import { defineConfig } from 'tsup';

export default defineConfig([
  // Main library build
  {
    entry: ['src/index.ts'],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom'],
    esbuildOptions(options) {
      options.jsx = 'automatic';
    },
  },
  // Tailwind preset build (CommonJS for require())
  {
    entry: ['tailwind.preset.js'],
    format: ['cjs', 'esm'],
    outDir: 'dist',
    dts: false,
  },
]);
