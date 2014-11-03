var gulp = require('gulp')
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

// CometD build process
// This task build the never-modified CometD Library
// Launch this task with "gulp cometd"

var cometdPath= 'bower_components/cometd-jquery/cometd-javascript/common/src/main/js/org/cometd/';
var zeptoPath= 'bower_components/zepto/';
var jqueyCometdPath= 'bower_components/cometd-jquery/cometd-javascript/jquery/src/main/webapp/jquery/';

var concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename');

gulp.task('cometdzepto', function() {
  return gulp.src([
  		zeptoPath + 'zepto.js',
  		'cometdzepto.js',
		cometdPath + 'cometd-namespace.js',
	    cometdPath + 'CometD.js', 
	    cometdPath + 'Utils.js' ,
	    cometdPath + 'cometd-json.js',
	    cometdPath + 'Transport.js',
	    cometdPath + 'RequestTransport.js',
	    cometdPath + 'TransportRegistry.js', 
	    cometdPath + 'WebSocketTransport.js', 
	    cometdPath + 'LongPollingTransport.js',
	    cometdPath + 'CallbackPollingTransport.js',
	    jqueyCometdPath + 'jquery.cometd.js'
    ])
    .pipe(concat('cometdzepto.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
gulp.task('cometd', function() {
  return gulp.src([
		cometdPath + 'cometd-namespace.js',
	    cometdPath + 'CometD.js', 
	    cometdPath + 'Utils.js' ,
	    cometdPath + 'cometd-json.js',
	    cometdPath + 'Transport.js',
	    cometdPath + 'RequestTransport.js',
	    cometdPath + 'TransportRegistry.js', 
	    cometdPath + 'WebSocketTransport.js', 
	    cometdPath + 'LongPollingTransport.js',
	    cometdPath + 'CallbackPollingTransport.js',
	    jqueyCometdPath + 'jquery.cometd.js'
    ])
    .pipe(concat('cometd.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', [], function() {
    gulp.start('cometd', 'cometdzepto');
});
