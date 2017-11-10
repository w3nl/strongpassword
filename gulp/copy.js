/*
 * Bootstrap gulp
 */
import gulp from 'gulp';
import { taskConfig } from '../gulpfile.babel.js';
import * as utilities from './bootstrap/utilities';

/*
 * Add specific modules
 */
import merge from 'merge-stream';

/*
 * Task: copy files from source to destination
 */
function copy() {
    let tasks = taskConfig.copy.map(task => {
        return gulp.src(task.src, {
            dot: true
        })
            .on('end', utilities.logBegin('Copy'))
            .on('end', utilities.logEnd(task))
            .pipe(gulp.dest(task.dist));
    });

    return merge(tasks);
}

export { copy };
