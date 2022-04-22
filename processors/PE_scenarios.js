const path = require('path');
const csv = require('csvtojson')
const fs = require('fs')
const csvFilePath = path.dirname(__dirname) + '/excel/Create_Accessorial_request.csv';
const csvFilePath1 = path.dirname(__dirname) + '/excel/Booking_Shipment.csv';
const csvFilePath2 = path.dirname(__dirname)+'/excel/Offer_Distribution.csv';
const csvFilePath3 = path.dirname(__dirname)+'/excel/bulk_driver_assigment.csv';


module.exports = {
    getPayload,
    _parseCSV,
    _parseCSV1,
    logResponse,
    logResponse1,
    getPayload1,
    getPayload2,
    getPayload3,
    getPayload4,
    getPayload5,
    getPayload6,
    getPayload7,
    getPayload8,
    getPayload9
}

console.log(Math.floor(100000 + Math.random() * 900000));


function getRandom() {
    const randomNbr = Math.floor(100000 + Math.random() * 900000)
    const string = "BLGD"
    return (string + randomNbr.toString());
}
//*ADD ADJUSTMENT TO EXISTING INVOICE *//
let data = {
    "adjustment": {
        "adjustedItem": "accessorial",
        "category": "accessorials",
        "message": "Shipper Cost Adjustment",
        "value": "23.00",
        "type": "shipper_cost",
        "reason": "TEST",
        "equipment": "61c102b3b1190f0db07dcdca",
        "appointment": false
    },
    "ledger": "receivables"
}

function getPayload(context, events, next) {
    console.log("add_adjustment_existing_invoice");
    const randomNbr = getRandom();
    //let newData = data
    // newData.shipment.reference_numbers[0].value=randomNbr
    context.vars.payload = data;
    return next();
}

//*ADD ADJUSTMENT TO EXISTING PAYOUT *//
let data1 = {
    "adjustment": {
        "adjustedItem": "accessorial",
        "category": "accessorials",
        "message": "Shipper Cost Adjustment",
        "value": "22.00",
        "type": "shipper_cost",
        "reason": "TEST",
        "equipment": "61c102b3b1190f0db07dcdca",
        "appointment": false
    },
    "ledger": "payables"
}


function getPayload1(context, events, next) {
    console.log("add_adjustment_existing_payout");
    const randomNbr = getRandom();
    //let newData = data
    // newData.shipment.reference_numbers[0].value=randomNbr
    context.vars.payload1 = data1;
    return next();
}


/*Create_Accessorial_request_Bobtail*/
function _parseCSV() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath)
            .then((jsonObj) => {
                resolve(jsonObj)
            })
    })
}

let data2 = [
    {
        "shipper_rate": "30.50",
        "carrier_rate": "27.25",
        "carrier_unit_qty": 1,
        "shipper_unit_qty": 1,
        "description": null,
        "begin_datetime": null,
        "end_datetime": null,
        "location": "",
        "note": "",
        "equipment": [
            "61c102b3b1190f0db07dcdca"
        ],
        "message": "Bobtail",
        "accessorial_type": "bobtail",
        "type": "accessorial",
        "exception_type": "Accessorial Request",
        "shipment": "6254232edc4081155136fd2e",
        "carrier": "518d9941d80f1f0200000002",
        "shipper": "5918ead7d179d4090000001f",
        "shipper_name": "Ceva Ontaro - Yard Moves",
        "carrier_name": "DGCarrier",
        "payee_type": "carrier",
        "vendor_name": "",
        "vendor": null,
        "shipment_id": "CEV-19072",
        "shipper_status": "pending-shipper",
        "carrier_status": "pending-shipper"
    }
]

// function getPayload2(context, events, next) {
//     _parseCSV().then((jsonObj) => {
//         console.log("Applying list shipment params", jsonObj);
//         let newData = data2
//         newData[0].shipper_rate = jsonObj[0].shipper_rate1.toString()
//         newData[0].carrier_rate=jsonObj[0].carrier_rate1.toString()
//         newData[0].shipment=jsonObj[0].shipment.toString()
//         newData[0].carrier=jsonObj[0].carrierid.toString()
//         newData[0].shipper=jsonObj[0].shipperid.toString()
//         context.vars.payload2 = newData;
//         console.log(newData)
//         return next();
//     })
// }
function getPayload2(context, events, next) {
    _parseCSV().then((jsonObj)=>{
        let currentRow = context.vars.currentRow || 0;
        console.log(currentRow, jsonObj.length);
        let newData = data2 // 1, 3
        const continueLooping = currentRow < jsonObj.length;
        console.log(jsonObj[Number(currentRow)])
        if (continueLooping) {
           // context.vars.shipNbr = jsonObj[Number(currentRow)].page
            newData[0].shipper_rate = jsonObj[Number(currentRow)].shipper_rate1.toString()
            newData[0].carrier_rate=jsonObj[Number(currentRow)].carrier_rate1.toString()
            newData[0].shipment=jsonObj[Number(currentRow)].shipment.toString()
            newData[0].carrier=jsonObj[Number(currentRow)].carrierid.toString()
            newData[0].shipper=jsonObj[Number(currentRow)].shipperid.toString()
            context.vars.payload2 = newData;
            console.log(newData)
        }
        // While `continueLooping` is true, the `next` function will
        // continue the loop in the test scenario.
        context.vars.currentRow=currentRow+1;
        return next(continueLooping);
    })
}
/*BULK_APPOINTMENT_CHANGES*/

let data3 = [
    {
        "stop_id": "624e79b3ccf19caa60906c44",
        "job_id": "624e79b8ccf19caa60906c7e",
        "updates": {
            "appointment": false,
            "window_start": "2022-02-04T08:00:00.000Z",
            "window_end": "2022-02-04T11:00:00.000Z",
            "appointment_unconfirmed": false
        }
    },
    {
        "stop_id": "624e79b3ccf19caa60906c44",
        "job_id": "624e79b8ccf19caa60906c7e",
        "updates": {
            "appointment": false,
            "window_start": "2022-02-03T08:00:00.000Z",
            "window_end": "2022-02-03T09:00:00.000Z",
            "appointment_unconfirmed": false
        }
    }
]

function getPayload3(context, events, next) {
    console.log("BULK_APPOINTMENT_CHANGES");
    const randomNbr = getRandom();
    //let newData = data
    // newData.shipment.reference_numbers[0].value=randomNbr
    context.vars.payload3 = data3;
    return next();
}

/*Bulk_Stop_Complete_With_File_Upload*/

let data4 = [
    {
        "job_id": "624fcdde400bdad95047a5de",
        "stop_id": "624fcdd9400bdad95047a3fd",
        "meta": {
            "uri": [
                {
                    "uri": "2022/02/669db8bcbda433a1f86e7bf740f61dc6.jpg"
                }
            ],
            "filePath": [
                {
                    "path": "https://cargomatic-shipment-data-acceptance.s3.amazonaws.com/2022/02/669db8bcbda433a1f86e7bf740f61dc6.jpg"
                }
            ],
            "signatory": "Balaji",
            "date": "2022-02-21T13:52:27.331Z",
            "window_start": "2022-02-21T11:00:00.000Z",
            "window_end": "2022-02-21T14:00:00.000Z",
            "appointment": false,
            "uploadPending": false,
            "isValid": true,
            "confirm_appointment": true,
            "applyAllDisabled": false
        }
    }
]

function getPayload4(context, events, next) {
    console.log("Bulk_Stop_Complete_With_File_Upload");
    const randomNbr = getRandom();
    //let newData = data
    // newData.shipment.reference_numbers[0].value=randomNbr
    context.vars.payload4 = data4;
    return next();
}

/*driverassigment*/

let data5 = { "driverId": "55025cdc02ca450f00000019", "_type": "Driver" }

function getPayload5(context, events, next) {
    console.log("driverassigment");
    const randomNbr = getRandom();
    //let newData = data
    // newData.shipment.reference_numbers[0].value=randomNbr
    context.vars.payload5 = data5;
    return next();
}

/**/
let data6 = {
    "shipmentId": "62500c93400bdad95048c7b8",
    "stopId": "62500c8d400bdad95048c75d",
    "meta": {
        "signatory": "Teest Tester",
        "date": "2022-02-21T08:55:00.000Z",
        "reason": {
            "code": "31",
            "_id": "6154c65549f1fd00a2506d4e",
            "description": "CookieJar"
        },
        "reasonCode": "31",
        "reasonDescription": "CookieJar",
        "timezone": "America/Los_Angeles",
        "containerId": "TEST1457829",
        "files": [
            {
                "uri": "2022/02/b6c41a87da74ad8ca996059d26e52f22.jpg",
                "type": "shipmentdata"
            }
        ],
        "imageMetadataFiles": [
            "3ae43074-df3e-4bbf-823b-309f985af2f8.jpg"
        ]
    }
}
function getPayload6(context, events, next) {
    console.log("Stop Complete With File Upload");
    const randomNbr = getRandom();
    //let newData = data
    // newData.shipment.reference_numbers[0].value=randomNbr
    context.vars.payload6 = data6;
    return next();
}

/*Booking Shipment */
function _parseCSV1() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath1)
            .then((jsonObj1) => {
                resolve(jsonObj1)
            })
    })
}

let data7 = {
    "shipment": {
        "shipment_type": "shorthaul",
        "shipper": "chandurondla@gmail.com",
        "stops": [
            {
                "sequence": 1,
                "action": "pickup",
                "window_start": "2022-04-12T00:30:00-07:00",
                "window_end": "2022-04-12T03:30:00-07:00",
                "location": [
                    {
                        "contact": {
                            "name": "",
                            "phone": "",
                            "email": "ssharma@cargomatic.com"
                        },
                        "_id": "5cb9f5fe62960e0013f427e6",
                        "address": "Four Embarcadero Center, 4 Embarcadero Center, San Francisco, CA 94111, USA",
                        "name": "CM",
                        "coords": [
                            -122.3961067,
                            37.7953898
                        ],
                        "timezone": "America/Los_Angeles",
                        "optimized_name": "CM",
                        "street": "4 Embarcadero Center",
                        "city": "SF",
                        "zipcode": "94111",
                        "state": "CA",
                        "lng": -122.3961067,
                        "lat": 37.7953898,
                        "optimized_address": "four embarcadero center, 4 embarcadero center, san francisco, ca 94111, usa",
                        "raw_address": "Four Embarcadero Center, 4 Embarcadero Center, San Francisco, CA 94111, USA",
                        "market": {
                            "market_id": "54891764f4ce842e038206de",
                            "max_shipment_distance": 125,
                            "timezone": "America/Los_Angeles",
                            "code": "SFO",
                            "name": "Bay Area"
                        },
                        "exceptions_enabled": true,
                        "suite_or_apt": "",
                        "aliases": [],
                        "custom": false,
                        "_sub_type": "Address",
                        "_type": "point",
                        "__v": 0,
                        "location_timezone": "America/Los_Angeles",
                        "locationid": "7Q7N"
                    }
                ],
                "id": "6255230cba0bbc889488eabc",
                "loads": [
                    {
                        "type": "pallets",
                        "quantity": 1,
                        "length": 48,
                        "width": 40,
                        "height": 60,
                        "weight": 1456,
                        "weight_units": "lbs"
                    }
                ],
                "contacts": [
                    {
                        "name": "",
                        "phone": "",
                        "email": "ssharma@cargomatic.com"
                    }
                ]
            },
            {
                "sequence": 2,
                "action": "deliver",
                "window_start": "2022-04-12T03:30:00-07:00",
                "window_end": "2022-04-12T06:30:00-07:00",
                "location": [
                    {
                        "contact": {
                            "name": "",
                            "phone": ""
                        },
                        "_id": "5ff5c12ac67da6001de2cca3",
                        "street": "2324 Ocean View Ave",
                        "city": "Westlake",
                        "zipcode": "90057",
                        "state": "CA",
                        "lng": -118.2765087,
                        "lat": 34.0626179,
                        "coords": [
                            -118.2765087,
                            34.0626179
                        ],
                        "address": "2324 Ocean View Ave, Los Angeles, CA 90057, USA",
                        "optimized_address": "2324 ocean view ave, los angeles, ca 90057, usa",
                        "name": "test",
                        "raw_address": "2324 Ocean View Ave, Los Angeles, CA 90057, USA",
                        "location_timezone": "America/Los_Angeles",
                        "market": {
                            "market_id": "53c7413eada73b2b04c39830",
                            "max_shipment_distance": 125,
                            "timezone": "America/Los_Angeles",
                            "code": "LAX",
                            "name": "Los Angeles"
                        },
                        "exceptions_enabled": true,
                        "suite_or_apt": null,
                        "aliases": [],
                        "custom": false,
                        "_sub_type": "Address",
                        "_type": "point",
                        "__v": 0,
                        "locationid": "RWJS",
                        "timezone": "America/Los_Angeles"
                    }
                ],
                "id": "6255230ccd3c5d1de3a56417",
                "loads": [
                    {
                        "type": "pallets",
                        "quantity": 1,
                        "length": 48,
                        "width": 40,
                        "height": 60,
                        "weight": 1456,
                        "weight_units": "lbs"
                    }
                ],
                "contacts": [
                    {
                        "name": "",
                        "phone": ""
                    }
                ]
            }
        ],
        "loads": [
            {
                "type": "pallets",
                "quantity": 1,
                "length": 48,
                "width": 40,
                "height": 60,
                "weight": 1456,
                "weight_units": "lbs"
            }
        ],
        "boxes": {},
        "pallets": [
            {
                "type": "pallets",
                "quantity": 1,
                "length": 48,
                "width": 40,
                "height": 60,
                "weight": 1456,
                "weight_units": "lbs"
            }
        ],
        "full_truckload": false,
        "notes": "",
        "reference_numbers": [
            {
                "name": "tracking_id",
                "value": "",
                "optimized": "BOL068452GLL"
            }
        ],
        "distance": 609343,
        "weight": 1456,
        "project": false,
        "hold_at_dispatch": false,
        "exception_exempt": false,
        "business": false,
        "documents": [],
        "payables": [
            {
                "category": "accessorials",
                "type": "bedframe_setup",
                "message": "Bed Frame Setup",
                "timestamp": "2022-04-12T06:59:30.554Z",
                "value": 10
            },
            {
                "category": "accessorials",
                "type": "inside_delivery",
                "message": "Inside Delivery",
                "timestamp": "2022-04-12T06:59:30.554Z",
                "value": 25
            },
            {
                "category": "accessorials",
                "type": "residential_delivery",
                "message": "Residential Delivery",
                "timestamp": "2022-04-12T06:59:30.554Z",
                "value": 25
            }
        ],
        "receivables": [
            {
                "category": "accessorials",
                "type": "bedframe_setup",
                "message": "Bed Frame Setup",
                "timestamp": "2022-04-12T06:59:30.554Z",
                "value": 15
            },
            {
                "category": "accessorials",
                "type": "inside_delivery",
                "message": "Inside Delivery",
                "timestamp": "2022-04-12T06:59:30.554Z",
                "value": 35
            },
            {
                "category": "accessorials",
                "type": "residential_delivery",
                "message": "Residential Delivery",
                "timestamp": "2022-04-12T06:59:30.554Z",
                "value": 35
            }
        ],
        "courier": false,
        "market": {
            "market_id": "54891764f4ce842e038206de",
            "max_shipment_distance": 125,
            "timezone": "America/Los_Angeles",
            "code": "SFO",
            "name": "Bay Area"
        },
        "equipment_type": [],
        "pickup_after": "2022-04-12T07:30:00Z",
        "pickup_by": "2022-04-12T10:30:00Z",
        "deliver_after": "2022-04-12T10:30:00Z",
        "deliver_by": "2022-04-12T13:30:00Z"
    },
    "action": "add"
}
function getPayload7(context, events, next) {
    _parseCSV1().then((jsonObj1) => {
    console.log("Booking Shipment Details",jsonObj1);
    const randomNbr = getRandom();
    let newData = data7
    newData.shipment.reference_numbers[0].value=randomNbr
    newData.shipment.shipment_type = jsonObj1[0].shipment_type.toString()
    newData.shipment.shipper=jsonObj1[0].shipperid.toString()
    context.vars.payload7 = newData;
    return next();
    })
}

/*Offer Distribution*/
function _parseCSV2() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath2)
            .then((jsonObj2) => {
                resolve(jsonObj2)
            })
    })
}

let data8 = {"userId":""}
function getPayload8(context, events, next) {
    _parseCSV2().then((jsonObj2) => {
    console.log("Offer Distribution",jsonObj2);
    let newData = data8
    newData.userId = jsonObj2[0].driver.toString()
    context.vars.payload8 = newData;
    return next();
    })
}


/*BULK DRIVER ASSIGNMENT */
function _parseCSV3() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath3)
            .then((jsonObj3) => {
                resolve(jsonObj3)
            })
    })
}

let data9 = {
    "shipmentIds": [
        "625eac94d83aec140f8e9629",
        "625eaca0d83aec140f8e9e4f",
        "625eacaed83aec140f8ea616"
    ],
    "driver": {
        "_id": "55025cdc02ca450f00000019",
        "_type": "Driver",
        "authorized": true,
        "carrier": "DGCarrier",
        "email": "ce913e29-3cfc-49fe-b2a5-fdfeea6b84f6@xcargomatic.com",
        "first_name": "Michael",
        "last_name": "Jordan",
        "picture": "default.jpg",
        "optimized_name": "MICHAEL JORDAN",
        "company_name": "",
        "account_name": "",
        "value": "55025cdc02ca450f00000019",
        "type": "Driver",
        "name": "Michael Jordan",
        "carrierData": {
            "_id": "518d9941d80f1f0200000002",
            "_type": "Carrier",
            "name": "DGCarrier"
        }
    }
}
function getPayload9(context, events, next) {
    console.log("bulk driver assigment");
    const randomNbr = getRandom();
    //let newData = data
    // newData.shipment.reference_numbers[0].value=randomNbr
    context.vars.payload9 = data9;
    return next()
    
}


function logResponse(requestParams, response, context, ee, next) {
    const parsedResponse = JSON.parse(response.body);
    console.log(parsedResponse);
    return next(); // MUST be called for the scenario to continue
}
function logResponse1(requestParams, response, context, ee, next) {
    const parsedResponse = JSON.parse(response.body);
    console.log(parsedResponse);
    return next(); // MUST be called for the scenario to continue
}
