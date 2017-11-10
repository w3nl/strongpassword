import sourcemaps from 'gulp-sourcemaps';
import notifier from 'node-notifier';
import gutil from 'gulp-util';
import fs from 'fs';

/*
 * Generic function for initializing sourcemaps
 */
function initSourceMaps() {
    return sourcemaps.init();
}

/*
 * Generic function for writing sourcemaps to the same folder as the task
 */
function writeSourceMaps() {
    return sourcemaps.write('.');
}

/*
 * Generic and low-level way of error reporting, some gulp packages have their own
 * odd way of error handling.
 */
function onError(stream = false, error = false, errormessage = false, file = false) {
    if (file || errormessage) {
        console.log(
            gutil.colors.black(gutil.colors.bgRed(file)),
            errormessage
        );
    }

    if (!errormessage && error) {
        console.log(error);
    }

    console.log('');

    notifier.notify({
        'title': 'w2w build',
        'message': 'Build error!'
    });

    if (stream && doContinue()) {
        stream.emit('end');
    }
}

/*
 * Checks if the --continue flag is used
 * when added don't break the stream on a error/warning
 *
 * @param {boolean} reverse returns the opposite of the normal return (eg. false becomes true)
 *
 * @return {boolean}
 */
function doContinue(reverse = false) {
    if (gutil.env.continue) {
        return !reverse;
    }

    return reverse;
}

/*
 * Simple log output for the task name
 */
function logBegin(name, task = false) {
    return function() {
        console.log('');
        console.log(gutil.colors.green.underline(name + ' task'));
    };
}

/*
 * Simple log output for the task details or just a spacer
 */
function logEnd(task = false) {
    return function() {
        if (task) {
            task.glob.map(file => fileExists(file, task.base));

            console.log('');
            console.log(gutil.colors.dim('Saving to: ') + gutil.colors.black(gutil.colors.bgGreen(task.saveto + '/' + task.filename)));
        }

        console.log('');
    };
}

/*
 * Checks and logs a file or glob
 */
function fileExists(file, base) {
    /*
     * If this file begins with a !, then the
     * user intends to exclude it from the
     * src set; we're free to ignore it.
     */
    if (file.indexOf('!') == 0) {
        return true;
    }

    /*
     * Checks if the file is a glob pattern of a file
     */
    if(file.match(/\*/) || fs.existsSync(base + file)) {
        console.log('- ' + file);

        return base + file;
    }

    console.log(
        '- ' + file,
        gutil.colors.black(gutil.colors.bgRed('File not found'))
    );

    return;
}

export { initSourceMaps, writeSourceMaps, onError, logBegin, logEnd, doContinue };
