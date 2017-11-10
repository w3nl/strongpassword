import { dist } from '../../gulpfile.babel.js';

import fs from 'fs';
import del from 'del';

var manifestFile;

/*
 * Read and return the manifest as json
 */
function get() {
    manifestFile = dist.templates + 'rev-manifest.json';

    if (!fs.existsSync(manifestFile)) {
        return false;
    }

    return JSON.parse(fs.readFileSync(manifestFile));
}

/*
 * Remove the manifest entry and the file when a file is modified
 */
function checkFile(revManifest, base, filename) {
    var revfile;

    if (!revManifest) {
        return;
    }

    revfile = revManifest[filename];

    delete revManifest[filename];

    del(base + '/' + revfile, {
        force: true
    });

    return revManifest;
}

/*
 * Update the manifest file after possible changes
 */
function update(revManifest) {
    if (!revManifest) {
        return;
    }

    if (Object.keys(revManifest).length > 0) {
        fs.writeFile(manifestFile, JSON.stringify(revManifest));
    }

    del(manifestFile, {
        force: true
    });

    return true;
}

export { get, checkFile, update };
