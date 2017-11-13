var gulp = require('gulp');
var watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import')
;

gulp.task('default',function(){
console.log('Hooray - You crated a Gulp Task');});

gulp.task('html',function(){
	console.log('Something importante here in gulp task');
});

gulp.task('styles',function(){
	console.log('eXECUTANDO styles');
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){
	watch('./app/index.html',function(){
	gulp.start('html')});

	watch('./app/assets/styles/**/*.css',function(){
	gulp.start('styles')});
	
});