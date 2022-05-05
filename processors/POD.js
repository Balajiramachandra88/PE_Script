const fs = require("fs");
const path = require("path");
const FormData = require("form-data");

module.exports = {
  setJSONBody,
  logResponse,
  setPODUploadJSONbody,
};

function setJSONBody(requestParams, context, ee, next) {
  console.log(
    path.dirname(__dirname) + "/JPG/1_CEV-19556_JPG_202104280241.jpg"
  );
  const formData = new FormData();
  formData.append(
    "file",
    fs.createReadStream(
      path.dirname(__dirname) + "/JPG/1_CEV-19556_JPG_202104280241.jpg"
    )
  );
  requestParams.body = formData;
  console.log("[DEBUG] Request: Added FormData to request body");
  return next();
}


function logResponse(requestParams, response, context, ee, next) {
  console.log("[DEBUG] Response: ", context.vars.key, context.vars.key1);
  return next();
}

function setPODUploadJSONbody(requestParams, context, ee, next) {
  console.log(context.vars.key1,context.vars.key)
  const payload = {
    "shipmentId": "626a92dd0fce344d561caaa2",
    "stopId": "626a92d80fce344d561ca8b8",
    "meta": {
        "signatory": "Test",
        "date": "2022-04-28T07:55:00.000Z",
        "reason": {
            "code": "31",
            "_id": "6154c65549f1fd00a2506d4e",
            "description": "CookieJar"
        },
        "reasonCode": "31",
        "reasonDescription": "CookieJar",
        "timezone": "America/Los_Angeles",
        "containerId": "TEST7856322",
        "files": [
            {
                "uri": context.vars.key1,
                "type": "shipmentdata"
            }
        ],
        "imageMetadataFiles": [
          context.vars.key,
        ]
    }
};
  requestParams.body = JSON.stringify(payload);
}
