import path from 'path';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import svgSprite from '@panenco/rollup-plugin-svg-sprite';
import linaria from 'linaria/rollup';
import css from 'rollup-plugin-css-only';

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
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: /node_modules/,
    }),
    resolve({
      extensions: ['.ts', '.tsx', '.json'],
      preferBuiltins: false,
      customResolveOptions: {
        moduleDirectory: ['node_modules', paths.nodeModules, paths.src],
      },
    }),
    typescript({
      tsconfigDefaults: {
        compilerOptions: { declaration: true, jsx: 'react' },
      },
    }),
    linaria({
      sourceMap: process.env.NODE_ENV !== 'production',
    }),
    css({
      output: path.join(paths.outputPath, 'styles.css'),
    }),
    commonjs({
      // namedExports: {
      //   'node_modules/react-is/index.js': ['isValidElementType'],
      // },
    }),
    json(),
    svgSprite({
      outputFolder: paths.outputPath,
      spriteFilename: 'spritesheet.svg',
    }),
  ],
  external,
};
