var replace = require("replace");
 
replace({
  regex: "service_worker",
  replacement: Math.random(),
  paths: ['dist/OneSignalSDKWorker.js', 'dist/OneSignalSDKUpdaterWorker.js'],
  recursive: false,
  silent: true,
});