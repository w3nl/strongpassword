/*
 * Bootstrap gulp
 */
import gulp from 'gulp';
import { folders } from '../gulpfile.babel.js';
import * as utilities from './bootstrap/utilities';

/*
 * Add specific modules
 */
import gulpStylelint from 'gulp-stylelint';
import eslint from 'gulp-eslint';

/*
 * Task: lint all scss with Stylelint
 */
function lintStyles() {
    return gulp.src(folders.styles + '**/*.{scss,css}')
        .pipe(
            gulpStylelint({
                reporters: [{
                    formatter: 'string',
                    console: true
                }],
                failAfterError: utilities.doContinue(true)
            })
        );
}

/*
 * Task: lint all JavasSript with ESlint
 */
function lintScripts() {
    let stream = gulp.src(folders.scripts + '**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());

    if (!utilities.doContinue()) {
        stream
            .pipe(eslint.failAfterError());
    }

    return stream;
}

export { lintStyles, lintScripts };
