const dotenv = require('dotenv');
const path = require('path');
const zipDir = require('zip-dir');
const chromeWebstoreUpload = require('chrome-webstore-upload');

dotenv.config();

let pathToBeZipped = path.resolve(__dirname, './extension');

let REFRESH_TOKEN = process.env.REFRESH_TOKEN;
let EXTENSION_ID = process.env.EXTENSION_ID;
let CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
let CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const webStore = chromeWebstoreUpload({
  extensionId: EXTENSION_ID,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  refreshToken: REFRESH_TOKEN
});

const token = webStore.fetchToken();

// zipping the output folder
zipDir(pathToBeZipped, { filter: (path) => /(build|manifest.json)/.test(path) }, function (err, buffer) {
  if (err) {
    console.log('oh no!', err);
    process.exit(1);
  } else {
    console.log(`Successfully Zipped ${pathToBeZipped}`);
    uploadZip(buffer); // on successful zipping, call upload
  }
});

function uploadZip(buffer) {
  // upload the zip to webstore
  webStore.uploadExisting(buffer, token).then(() => {
    console.log('Successfully uploaded the ZIP');

    const target = process.env.NODE_ENV === 'production' ? 'default' : 'trustedTesters';

    // publish the uploaded zip
    webStore.publish(target, token).then(() => {
      console.log('Successfully published the newer version');
    }).catch((error) => {
      console.log(`Error while publishing uploaded extension: ${error}`);
      process.exit(1);
    });

  }).catch((error) => {
    console.log(`Error while uploading ZIP: ${error}`);
    process.exit(1);
  });
}
