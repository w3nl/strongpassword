/*
 * Bootstrap gulp
 */
import gulp from 'gulp';
import { dist } from '../gulpfile.babel.js';
import * as utilities from './bootstrap/utilities';

/*
 * Add specific modules
 */
import rev from 'gulp-rev';

/*
 * Task: Static asset revisioning by appending content hash to filenames
 */
function bust() {
    return gulp.src([
        dist.scripts + '*.js'
    ])
        .on('end', utilities.logBegin('Create revision file(s)'))
        .pipe(rev())
        .pipe(gulp.dest(function(file) {
            return file.base;
        }))
        .pipe(rev.manifest())
        .pipe(gulp.dest(dist.scripts));
}

export { bust };
