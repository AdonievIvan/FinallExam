const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer')
var cssmin = require('gulp-cssmin');
const minify = require('gulp-minify');


gulp.task('css', function(){
    return gulp.src('./css/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
     .pipe(gulp.dest('dist'));
})
gulp.task('min', function (done) {
    gulp.src('./css/*.css')
        .pipe(cssmin())

        .pipe(gulp.dest('dist'));
        done()
});
gulp.task('compress', function(done){
    gulp.src('./webpages/*.js')
    .pipe(minify({
        min:'.js'
    }))
    .pipe(gulp.dest('dist'))
    done()
})
