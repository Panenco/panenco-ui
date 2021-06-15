/* eslint-disable global-require */
import svgSprite from '@panenco/rollup-plugin-svg-sprite';
import linaria from 'linaria/rollup';
import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from 'rollup-plugin-typescript2';

import packageJson from './package.json';

const paths = require('./config/paths');

const external = Object.keys(packageJson.peerDependencies);

export default {
  input: paths.entryPoint,
  output: {
    file: path.join(paths.outputPath, 'ui.esm.js'),
    format: 'esm',
  },
  plugins: [
    // alias({
    //   config: paths.appConfig,
    // }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: /node_modules/,
    }),
    resolve({
      extensions: ['.ts', '.tsx', '.json'],
      preferBuiltins: false,
      moduleDirectories: ['node_modules', paths.nodeModules, paths.src],
    }),
    typescript({
      clean: true,
      tsconfigDefaults: {
        declaration: true,
        jsx: 'react',
      },
    }),
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
    css({
      output: path.join(paths.outputPath, 'styles.css'),
    }),
    commonjs(
    //   {
    //   namedExports: {
    //     'node_modules/react/index.js': ['cloneElement', 'createContext', 'Component', 'createElement'],
    //     'node_modules/react-dom/index.js': ['render', 'hydrate'],
    //     'node_modules/react-is/index.js': ['isElement', 'isValidElementType', 'ForwardRef', 'Memo'],
    //   },
    // }
    ),
    json(),
    svgSprite({
      outputFolder: paths.outputPath,
      spriteFilename: 'spritesheet.svg',
    }),
  ],
  external,
};
