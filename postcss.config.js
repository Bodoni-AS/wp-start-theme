// postcss.config.js

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('postcss-nested'),
    /*require('postcss-css-variables')({
      preserve: false,
      preserveAtRulesOrder: true
    }),*/
    require('postcss-calc')({
      precision: 3
    }),
    require('postcss-discard-duplicates')
  ]
}