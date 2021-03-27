import fs from 'fs';
import Jimp = require('jimp');

/**
 * filterImageFromURL
 * - helper function to download, filter, and save the filtered image locally
 *
 * @param string a publicly accessible url to an image file
 * @returns Promise that will resolve with an absolute path to a filtered image locally saved file. Or throw error if something goes wrong.
 */
export async function filterImageFromURL(inputURL: string): Promise<string> {
    return new Promise(async (resolve, reject) => {
        Jimp.read(inputURL, (err, photo) => {
            if (err) {
                reject(err.message);
                return;
            }
            const outpath =
                '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg';
            photo
                .resize(256, 256) // resize
                .quality(60) // set JPEG quality
                .greyscale() // set greyscale
                .write(__dirname + outpath, (img) => {
                    resolve(__dirname + outpath);
                });
        });
    });
}

/**
 * deleteLocalFiles
 * - helper function to delete files on the local disk
 * - useful to cleanup after tasks
 * @param string[]  files: Array<string> an array of absolute paths to files
 */
export async function deleteLocalFiles(files: Array<string>) {
    for (let file of files) {
        fs.unlinkSync(file);
    }
}
