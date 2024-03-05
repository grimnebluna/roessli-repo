const { src, dest, parallel, series, watch } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

// Assuming FancyBox CSS is available in node_modules/fancybox/dist/jquery.fancybox.css
// and Lenis does not require a CSS file
function cssTask() {
    return src(['src/fancybox/fancybox.min.css', 'src/roessli.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('all.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/'));
}

function jsTask() {
    return src([
            'node_modules/@studio-freight/lenis/dist/lenis.min.js',
            'src/fancybox/fancybox.min.js',
            'src/roessli.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/'));
}

function watchTask() {
    watch('src/*.js', jsTask);
    watch('src/*.scss', cssTask);
}

exports.default = series(parallel(jsTask, cssTask), watchTask);
