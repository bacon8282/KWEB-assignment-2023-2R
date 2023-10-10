const { readdir, stat } = require('fs').promises;
const { extname, join } = require('path');

const search = async (loc) => {
    const files = await readdir(loc);
    for (const file of files) {
        const line = join(loc, file);
        if (extname(file) === '.js') {
            console.log(line);
        } else {
            var stats = await stat(line);
            if (stats.isDirectory()) {
                await search(line);
            }
        }
    }
};
search("test");