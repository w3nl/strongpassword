/*
 * Bootstrap gulp
 */
import { dist } from '../gulpfile.babel.js';

/*
 * Add specific modules
 */
import del from 'del';

/*
 * Task: copy files from source to destination
 */
function clean() {
    return del([dist.root], {
        force: true
    });
}

export { clean };
