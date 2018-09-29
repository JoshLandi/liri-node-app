require("dotenv").config();

var request = require("request");

var keysJS = require("./keys.js");

var arg1 = process.argv[2];

if (arg1 === "concert-this") {

    var bandName = process.argv[3];
    request("https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp", function (error, response, body) {
        console.log(body);
    });
}