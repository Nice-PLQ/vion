import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import vuePlugin from 'rollup-plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import multiInput from 'rollup-plugin-multi-input';
import nodeResolve from '@rollup/plugin-node-resolve';
import staticImport from 'rollup-plugin-static-import';

import pkg from './package.json';

const name = 'vion';
const externalDeps = Object.keys(pkg.peerDependencies).concat([/@babel\/runtime/]);
const banner = `/**
 * ${name} v${pkg.version}
 * (c) ${new Date().getFullYear()} ${pkg.author}
 * @license ${pkg.license}
 */
`;

const getPlugins = () => {
  const plugins = [
    multiInput(),
    vuePlugin(),
    nodeResolve(),
    commonjs(),
    esbuild({
      target: 'esnext',
      minify: false,
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: [...DEFAULT_EXTENSIONS, '.vue'],
    }),
    json(),
    url(),
    replace({
      preventAssignment: true,
      values: {
        __VERSION__: JSON.stringify(pkg.version),
      },
    }),
  ];

  return plugins;
};

const esConfig = {
  input: ['src/*/index.js', 'src/index-es.js'],
  external: externalDeps,
  plugins: [
    ...getPlugins(),
    staticImport({
      include: ['src/**/style.js', 'src/style/**/*.{less,svg,png,ttf}', 'src/locale/lang/*.js'],
    }),
  ],
  output: {
    banner,
    dir: 'es/',
    format: 'esm',
    sourcemap: true,
  },
};

const cjsConfig = {
  input: ['src/*/index.js', 'src/index.js'],
  external: externalDeps,
  plugins: [
    ...getPlugins(),
    staticImport({
      include: ['src/style/**/*.{svg,png}', 'src/locale/lang/*.js'],
    }),
    postcss({
      extract: 'style/index.css',
      minimize: true,
      extensions: ['.css', '.less'],
    }),
  ],
  output: {
    banner,
    dir: 'lib/',
    format: 'cjs',
    sourcemap: true,
    exports: 'named',
  },
};

export default [esConfig, cjsConfig];
