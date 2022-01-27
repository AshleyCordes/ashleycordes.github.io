//import needed plugins
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

//Define pathnames
const sassSrc = 'scss/base.scss' 
const sassDest = 'css/'
const sassInc = [ 'node_modules/foundation-sites/scss', 'node_modules/motion-ui/src' ]
const jsSrc = [ 'node_modules/foundation-sites/dist/js/foundation.min.*', 'node_modules/jquery/dist/jquery.min.*', 'node_modules/what-input/dist/what-input.min.*' ]
const jsDest = 'js/'

function transpileSass() {
        return gulp.src(sassSrc)
                .pipe(sass({
                        includePaths: sassInc
                }).on('error', sass.logError))
                .pipe(autoprefixer())
                .pipe(gulp.dest(sassDest))
}

function devJS() {
        return gulp.src(jsSrc)
                .pipe(gulp.dest(jsDest))
}

function defaultTask(cb) {
  // place code for your default task here
        transpileSass();
        devJS();
        cb();
}

exports.transpileSass = transpileSass
exports.devJS = devJS
exports.devSetup = gulp.parallel(transpileSass, devJS)
exports.default = defaultTask
