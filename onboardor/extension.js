const zipFolder = require('zip-folder');
let folderName = './extension/build';
// I too hate placeholders! will be attaching a sample file at the end of this writeup
let zipName = 'extension.zip';

zipFolder(folderName, zipName, function(err) {
    if(err) {
        console.log('oh no! ', err);
    } else {
        console.log(`Successfully zipped the ${folderName} directory and store as ${zipName}`);
        // will be invoking upload process
    }
});
