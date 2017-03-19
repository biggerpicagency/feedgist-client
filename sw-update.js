var replace = require("replace");
 
replace({
  regex: "service-worker.js",
  replacement: "service-worker.js?v=" + Math.random(),
  paths: ['dist/OneSignalSDKWorker.js', 'dist/OneSignalSDKUpdaterWorker.js'],
  recursive: false,
  silent: true,
});