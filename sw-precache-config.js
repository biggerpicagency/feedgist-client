module.exports = {
  staticFileGlobs: [
    'dist/**.html',
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
  }, {
    urlPattern: /external\.xx\.fbcdn\.net/,
    handler: 'networkFirst'
  }, {
    urlPattern: /scontent\.xx\.fbcdn\.net/,
    handler: 'networkFirst'
  }, {
    urlPattern: /fonts\.googleapis\.com/,
    handler: 'networkFirst'
  }, {
    urlPattern: /fonts\.gstatic\.com/,
    handler: 'networkFirst'
  }, {
    urlPattern: /cdn\.onesignal\.com/,
    handler: 'networkFirst'
  }]
};