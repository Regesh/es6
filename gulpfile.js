var gulp = require('gulp');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
//var es6transpiler = require('gulp-es6-transpiler');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('copy',function(){
	gulp.src('src/index.html')
	.pipe(gulp.dest('./build'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync',function(){
	browserSync({
		server: {
			baseDir: './build'
		}
	});
});

gulp.task('watch',function(){
	gulp.watch('src/index.html',['copy']);
	gulp.watch('src/**/*.js',['babelIt']);
});

// gulp.task('babelIt', function () {
//     return gulp.src('src/**/*.js')
//         .pipe(es6transpiler())
//         .pipe(gulp.dest('./build'))
//         .pipe(browserSync.reload({stream:true}))
// });

gulp.task('babelIt', function () {
    return gulp.src('src/**/*.js')
    	.pipe(concat('bundle.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./build'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('clean',function(){
	return gulp.src('./build',{read:false})
			.pipe(clean());
});

gulp.task('default',['clean','copy','browserSync','watch']);