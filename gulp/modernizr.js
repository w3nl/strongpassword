/*
 * Bootstrap gulp
 */
import gulp from 'gulp';
import { folders, dist, packageOptions } from '../gulpfile.babel.js';
import * as utilities from './bootstrap/utilities';
import * as manifest from './bootstrap/manifest';

/*
 * Add specific modules
 */
import gulpModernizr from 'gulp-modernizr';
import uglify from 'gulp-uglify';

/*
 * Task: build custom modernizr test suite
 */
function modernizr() {
    var revManifest = manifest.get();

    revManifest = manifest.checkFile(revManifest, dist.scripts, 'modernizr.js');
    manifest.update(revManifest);

    return gulp.src(folders.scripts + 'is_strong_password.js')
        .on('end', utilities.logBegin('Modernizr'))
        .pipe(gulpModernizr(packageOptions.modernizr))
        .pipe(uglify(packageOptions.uglify))
        .pipe(gulp.dest(dist.scripts));
}

export { modernizr };
