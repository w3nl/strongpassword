import parsePath from 'parse-filepath';

/**
 * Task base.
 */
class Task {
    /**
     * Task constructor.
     *
     * @param {array} glob
     * @param {string} base
     * @param {string} dist
     * @param {object} options
     */
    constructor(glob, base, dist, options) {
        this.glob = glob;
        this.base = base;
        this.dist = dist;
        this.options = options;

        this.filename = parsePath(dist).basename;
        this.saveto = parsePath(dist).dirname;

        this.src = glob.map((globItem) => prefixGlob(globItem, base));
    }
}

/*
* Prefix a glob string with the base path
*/
function prefixGlob (globItem, base) {

    /*
     * Check if a glob string has an exclude flag, remove the flag from the glob string
     * and move it to the begin of the path
     */
    if (globItem.indexOf('!') == 0) {
        return '!' + base + globItem.substr(1);
    }

    return base + globItem;
}

export default Task;
