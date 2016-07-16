var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');

gulp.task('cssConcat', function () {
    return gulp.src([
        'src/css/reset.css',
        'src/css/main.css', 
        'src/css/mobile.css'])
        .pipe(concat('all.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css'));
});
gulp.task('jsConcat',function () {
    return gulp.src(['src/js/index.js','src/js/01.js'])
        .pipe(concat('all.js'))

        .pipe(gulp.dest('./build/js'));
});

gulp.task('build',['jsConcat','cssConcat']);
gulp.task('watch',function () {
    gulp.watch('./src/css/*.css',['cssConcat'])
    gulp.watch('./src/js/*.js',['jsConcat'])
});

gulp.task('default',['build,'watch]);

