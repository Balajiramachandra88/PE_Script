const fs = require('fs');
const path = require('path');

module.exports = {
  setJSONBody,
  logResponse,
}

function setJSONBody(requestParams, context, ee, next) {
    console.log(path.dirname(__dirname) + '/JPG/1_CEV-19556_JPG_202104280241.jpg')
    const formData = {
      file: fs.createReadStream(path.dirname(__dirname) + '/JPG/1_CEV-19556_JPG_202104280241.jpg'),
    };
    requestParams.formData = Object.assign({}, requestParams.formData, formData);
    return next();
  }

function logResponse(requestParams, response, context, ee, next) {
  console.log('[DEBUG] Response: ', response.body);
  return next();
}
