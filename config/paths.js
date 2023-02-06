const path = require('path');

const paths = {};

paths.root = path.resolve(__dirname, '..');
paths.nodeModules = path.join(paths.root, 'node_modules');
paths.src = path.join(paths.root, 'src');
paths.outputPath = path.join(paths.root, 'lib');
paths.entryPoint = path.join(paths.src, 'index.tsx');
paths.appConfig = path.join(paths.src, 'config', `${process.env.PROJECT_ENV || 'development'}.js`);
paths.publicFiles = path.join(paths.root, 'public');
paths.storybook = path.join(paths.root, 'storybook-dist');

module.exports = paths;
