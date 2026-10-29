// build.js - Ultra-fast bundle script using esbuild

const esbuild = require('esbuild');
const path = require('path');

const nodeModulesPath =
  process.env.NODE_PATH ||
  path.resolve('C:/Users/HP/AppData/Local/Programs/Antigravity IDE/resources/app/node_modules');

async function build() {
  console.log('🐻 Building Bear Dash: Pixel Adventure client bundle...');
  const start = Date.now();

  try {
    await esbuild.build({
      entryPoints: [path.join(__dirname, 'src', 'index.tsx')],
      bundle: true,
      outfile: path.join(__dirname, 'public', 'bundle.js'),
      format: 'esm',
      target: ['es2020'],
      loader: {
        '.ts': 'ts',
        '.tsx': 'tsx',
        '.js': 'js',
      },
      nodePaths: [nodeModulesPath],
      define: {
        'process.env.NODE_ENV': '"production"',
      },
      minify: false,
      sourcemap: true,
    });

    console.log(`✨ Build completed successfully in ${Date.now() - start}ms! Output: public/bundle.js`);
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
