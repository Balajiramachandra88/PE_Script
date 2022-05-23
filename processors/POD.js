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
  console.log("[DEBUG] Response: ", response.body);
  return next();
}

function setPODUploadJSONbody(requestParams, context, ee, next) {
  const payload = {
    shipmentId: "628b949f86c212d6159e5008",
    stopId: "628b949b86c212d6159e4f45",
    meta: {
      signatory: "Test",
      date: "2022-04-28T07:55:00.000Z",
      reason: {
        code: "31",
        _id: "6154c65549f1fd00a2506d4e",
        description: "CookieJar",
      },
      reasonCode: "31",
      reasonDescription: "CookieJar",
      timezone: "America/Los_Angeles",
      containerId: "TEST1457829",
      files: [
        {
          uri: context.vars.key1,
          type: "shipmentdata",
        },
      ],
      imageMetadataFiles: [context.vars.key],
    },
  };
  context.vars.payload = payload;
  console.log("[DEBUG] Request: Added payload for Stop Completion", payload);
  return next();
}
