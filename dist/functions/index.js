const functions = require("firebase-functions");
const mainjsfile = require(__dirname + '/server/main' );
exports.ngssr = functions.https.onRequest(mainjsfile.app());