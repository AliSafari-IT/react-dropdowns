import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json'
      }),
      postcss({
        extract: true,
        minimize: true,
        modules: true
      })
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'src/css.ts',
    output: [
      {
        file: 'dist/css.js',
        format: 'esm'
      }
    ],
    plugins: [
      postcss({
        extract: 'index.css',
        minimize: true,
        modules: false
      })
    ]
  }
];
