module.exports = {
  staticFileGlobs: [
    'dist/**.js',
    'dist/**.css',
    'dist/assets/*',
    'dist/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /api\.feed-gist\.dev/,
    handler: 'networkFirst'
  },{
    urlPattern: /api\.feedgist\.io/,
    handler: 'networkFirst'
  }, {
    urlPattern: /external\.xx\.fbcdn\.net/,
    handler: 'fastest'
  }, {
    urlPattern: /scontent\.xx\.fbcdn\.net/,
    handler: 'fastest'
  }, {
    urlPattern: /fonts\.googleapis\.com/,
    handler: 'fastest'
  }, {
    urlPattern: /fonts\.gstatic\.com/,
    handler: 'cacheFirst'
  }, {
    urlPattern: /cdn\.onesignal\.com/,
    handler: 'networkFirst'
  }]
};