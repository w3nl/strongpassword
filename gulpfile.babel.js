/* eslint-env node, es6 */

'use strict';

/*
 * Setup Gulp and our Task class
 */
import gulp from 'gulp';
import gutil from 'gulp-util';
import Task from './gulp/bootstrap/task';
import { packageOptions, gulpOptions } from './gulp/bootstrap/config';

/*
 * Configure
 */

const paths = {
    root: './',
    dist: './dist/'
};

export const folders = {
    scripts:      `${paths.root}js/`,
    test:         `${paths.root}test/`,
    example:      `${paths.root}example/`,
    dictionaries: 'node_modules/typo-js/dictionaries/en_US/',
    npm:          'node_modules/'
};

export const dist = {
    root:         `${paths.dist}`,
    scripts:      `${paths.dist}js/`,
    dictionaries: `${paths.dist}dictionaries/en_US/`
};

/*
 * Change default options like:
 *
 * packageOptions.postcssUrls.rules.push({
 *       from: 'font/winternote',
 *       to: '../fonts/winternote/winternote'
 * });
 */
export { packageOptions, gulpOptions };

/*
 * Import all our tasks
 */
import { lintScripts } from './gulp/lint';
import { scripts } from './gulp/scripts';
import { copy } from './gulp/copy';
import { clean } from './gulp/clean';
import { bust } from './gulp/rev';
import { modernizr } from './gulp/modernizr';

/*
 * Define the tasks
 */
export const taskConfig = {
    scripts: [
        new Task(
            [
                'typo-js/typo.js'
            ],
            folders.npm,
            dist.scripts + 'vendor.js',
            {
                babel:  false,
                uglify: true
            }
        ),
        new Task(
            [
                'is_strong_password.js'
            ],
            folders.scripts,
            dist.scripts + 'app.js',
            {
                babel:  true,
                uglify: true
            }
        )
    ],
    copy: [
        new Task(
            ['*'],
            folders.example,
            dist.root
        ),
        new Task(
            ['*'],
            folders.dictionaries,
            dist.dictionaries
        )
    ]
};

/*
 * Task: Watch files and perform task when changed
 */
function watch() {
    gutil.env.continue = true;
    gulp.watch(folders.scripts + '**/*.js', gulp.parallel(scripts, lintScripts));
}

/*
 * Combine tasks
 */
const lint = gulp.parallel(lintScripts);
const build = gulp.series(
    clean,
    gulp.parallel(lint, scripts, modernizr, copy),
    bust
);

/*
 * All tasks
 */
export {
    watch,
    build,
    scripts,
    lint,
    lintScripts,
    copy,
    modernizr
};

/*
 * Export a default task
 */
export default build;
