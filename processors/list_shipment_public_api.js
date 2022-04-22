const path = require('path');
//const csv=require('csvtojson')
const csvFilePath = path.dirname(__dirname)+'/excel/list_shipments_public_api.csv';
const csvFilePath1 = path.dirname(__dirname)+'/excel/list_shipments_public_api_Perpage_251.csv';
module.exports = {
    getPayload,
    logResponse,
    statusReady
}

function statusReady(context, next) {
    _parseCSV().then((jsonObj)=>{
        let currentPageNo = context.vars.page;
        console.log(currentPageNo, jsonObj.length); // 1, 3
        const continueLooping = currentPageNo < jsonObj.length;
        if (continueLooping) {
            context.vars.page = jsonObj[Number(currentPageNo)].page
            context.vars.per_page = jsonObj[Number(currentPageNo)].per_page
        }
        // While `continueLooping` is true, the `next` function will
        // continue the loop in the test scenario.
        return next(continueLooping);
    })
}

function _parseCSV() {
    return new Promise((resolve, _) => {
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            resolve(jsonObj)
        })
    })
}

function statusReady1(context, next) {
    _parseCSV1().then((jsonObj1)=>{
        let currentPageNo1 = context.vars.page;
        console.log(currentPageNo1, jsonObj1.length); // 1, 3
        const continueLooping = currentPageNo1 < jsonObj1.length;
        if (continueLooping) {
            context.vars.page = jsonObj1[Number(currentPageNo1)].page
            context.vars.per_page = jsonObj1[Number(currentPageNo1)].per_page
        }
        // While `continueLooping` is true, the `next` function will
        // continue the loop in the test scenario.
        return next(continueLooping);
    })
}

function _parseCSV1() {
    return new Promise((resolve, _) => {
        csv()
        .fromFile(csvFilePath1)
        .then((jsonObj1)=>{
            resolve(jsonObj1)
        })
    })
}
/*
* This function will be called only once before all scenario in the test.
*/
function getPayload(context, events, next) {
    _parseCSV().then((jsonObj)=>{
        console.log("Applying list shipment params", jsonObj);
        context.vars.page = Number(jsonObj[0].page);
        context.vars.per_page = Number(jsonObj[0].per_page);
        return next();
    })
}


function logResponse(requestParams, response, context, ee, next) {
    const parsedResponse = JSON.parse(response.body);
    console.log(parsedResponse);
    return next(); // MUST be called for the scenario to continue
}
