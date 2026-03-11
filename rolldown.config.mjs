import { defineConfig } from 'rolldown';

const shared = {
  input: 'index.js',
  external: ['react'],
  moduleTypes: {
    '.js': 'jsx',
  },
  transform: {
    jsx: 'react',
  },
};

export default defineConfig([
  {
    ...shared,
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
  },
  {
    ...shared,
    output: {
      file: 'dist/index.module.js',
      format: 'esm',
    },
  },
]);
