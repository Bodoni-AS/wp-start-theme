// webpack.mix.js
let mix = require('laravel-mix');

//mix.js('assets/src/js/gutenberg-filters.js', 'assets/js').react();

if(mix.inProduction()) {
  jsOutputDir = 'js/prod';
  cssOutputDir = 'css/prod';
} else {
  jsOutputDir = 'js/dev';
  cssOutputDir = 'css/dev';
}


mix
  .sourceMaps(true, 'inline-source-map')
  .js('js/src/front-end.js', jsOutputDir)
  .js('js/src/gutenberg-editor.js', jsOutputDir)
  .js('js/src/legacy.js', jsOutputDir)
  .sass('sass/global.scss', cssOutputDir)
  .sass('sass/gutenberg-editor-styles.scss', cssOutputDir)
  .setPublicPath('')
  .options({
    processCssUrls: false,
  })
  // .browserSync({
  //   proxy: process.env.MIX_APP_HOST,
  //   host: process.env.MIX_APP_HOST,
  //   open: false,
  //   files: ['./**/*.php', './**/*.css', './**/*.js']
  // });

  mix.webpackConfig({
    stats: {
        hash: false,
        version: false,
        timings: false,
        children: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        chunks: false,
        modules: false,
        reasons: false,
        source: false,
        publicPath: false,
    }
});