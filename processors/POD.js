const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

module.exports = {
  setJSONBody,
  logResponse,
}

function setJSONBody(requestParams, context, ee, next) {
    console.log(path.dirname(__dirname) + '/JPG/1_CEV-19556_JPG_202104280241.jpg')
    const formData = new FormData();
    formData.append('file', fs.createReadStream(path.dirname(__dirname) + '/JPG/1_CEV-19556_JPG_202104280241.jpg'));
    requestParams.body = formData;
    console.log('[DEBUG] Request: ', requestParams);
    return next();
  }

function logResponse(requestParams, response, context, ee, next) {
  console.log('[DEBUG] Response: ', response.body);
  return next();
}
