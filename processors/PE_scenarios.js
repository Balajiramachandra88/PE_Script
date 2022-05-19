const path = require('path');
const csv = require('csvtojson')
const fs = require('fs')
const csvFilePath = path.dirname(__dirname) + '/excel/Create_Accessorial_request.csv';
const csvFilePath1 = path.dirname(__dirname) + '/excel/Booking_Shipment.csv';
const csvFilePath2 = path.dirname(__dirname) + '/excel/Offer_Distribution1.csv';
const csvFilePath3 = path.dirname(__dirname) + '/excel/bulk_driver_assigment.csv';
const csvFilePath4 = path.dirname(__dirname) + '/excel/add_adjustment_existing_payout.csv';
const csvFilePath5 = path.dirname(__dirname) + '/excel/add_adjustment_existing_invoice.csv';
const csvFilePath6 = path.dirname(__dirname) + '/excel/Bulk_Stop_Complete_With_File_Upload.csv';
const csvFilePath7 = path.dirname(__dirname) + '/excel/driverassigment.csv';
const csvFilePath8 = path.dirname(__dirname) + '/excel/bulk_appointment_changes.csv';
const csvFilePath9 = path.dirname(__dirname) + '/excel/bulk_accessorials.csv';
const csvFilePath11 = path.dirname(__dirname) + '/excel/approve_accessorial.csv';
const csvFilePath12 = path.dirname(__dirname) + '/excel/Get_Invoice_By_Shipper.csv';
const csvFilePath13 = path.dirname(__dirname) + '/excel/get_offers_by_carrier.csv';
const csvFilePath14 = path.dirname(__dirname) + '/excel/get_payouts_by_carrier.csv';
const csvFilePath15 = path.dirname(__dirname) + '/excel/get_shipment_by_customer.csv';
const csvFilePath16 = path.dirname(__dirname) + '/excel/get_shipment_by_ID.csv';
const csvFilePath17 = path.dirname(__dirname) + '/excel/get_shipment_by_refNbr.csv';
const csvFilePath18 = path.dirname(__dirname) + '/excel/authentication.csv';


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
    getPayload9,
    getPayload10,
    getPayload11,
    getPayload12,
    getPayload13,
    getPayload14,
    getPayload15,
    getPayload16,
    getPayload17,
    getPayload19,
    statusReady,
    statusReady3,
    statusReady4,
    statusReady5,
    statusReady2,
    statusReady7,
    statusReady8,
    statusReady9,
    statusReady10,
    statusReady11,
    statusReady12,
    statusReady13,
    statusReady14,
    statusReady15,
    statusReady16,
    statusReady17,
    statusReady18,
    statusReady19

    // statusReady4,
    // statusReady5
}

//console.log(Math.floor(100000 + Math.random() * 900000));


function getRandom() {
    const randomNbr = Math.floor(100000 + Math.random() * 900000)
    const string = "BLGD"
    return (string + randomNbr.toString());
}
//*ADD ADJUSTMENT TO EXISTING INVOICE *//
function _parseCSV5() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath5)
            .then((jsonObj5) => {
                resolve(jsonObj5)
            })
    })
}
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

function formatUrl8(shipmentid) {
    return `/admin/api/v2/jobs/${shipmentid}/adjustments`; 
}

function getPayload(context, events, next) {
    _parseCSV5().then((jsonObj5) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj5.length);
        let newData = data
        let newURL = formatUrl8(jsonObj5[Number(currentRow)].shipmentid.toString())
        newData.adjustment.equipment = jsonObj5[Number(currentRow)].equipmentid.toString()
        newData.adjustment.message = jsonObj5[Number(currentRow)].message.toString()
        newData.adjustment.value = jsonObj5[Number(currentRow)].value.toString()
        newData.adjustment.type = jsonObj5[Number(currentRow)].type.toString()
        context.vars.payload = newData;
        context.vars.urlEndPoint8 = newURL;
        console.log("New URL", context.vars.urlEndPoint8)
        console.log("New Transformed Data", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady5(context, next) {
    _parseCSV5().then((jsonObj5) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj5.length);
        let newData = data
        const continueLooping = currentRow < jsonObj5.length;
        if (continueLooping) {
            let newURL = formatUrl8(jsonObj5[Number(currentRow)].shipmentid.toString())
            newData.adjustment.equipment = jsonObj5[Number(currentRow)].equipmentid.toString()
            newData.adjustment.message = jsonObj5[Number(currentRow)].message.toString()
            newData.adjustment.value = jsonObj5[Number(currentRow)].value.toString()
            newData.adjustment.type = jsonObj5[Number(currentRow)].type.toString()
            context.vars.payload = newData;
            context.vars.urlEndPoint8 = newURL;
            console.log("New URL", context.vars.urlEndPoint8)
            console.log("New Transformed Data", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}

//*ADD ADJUSTMENT TO EXISTING PAYOUT *//
function _parseCSV4() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath4)
            .then((jsonObj4) => {
                resolve(jsonObj4)
            })
    })
}

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

function formatUrl9(shipmentid1) {
    return `/admin/api/v2/jobs/${shipmentid1}/adjustments`; 
}

function getPayload1(context, events, next) {
    _parseCSV4().then((jsonObj4) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj4.length);
        let newData = data1
        let newURL = formatUrl9(jsonObj4[Number(currentRow)].shipmentid1.toString())
        newData.adjustment.equipment = jsonObj4[Number(currentRow)].equipmentid.toString()
        newData.adjustment.message = jsonObj4[Number(currentRow)].message.toString()
        newData.adjustment.value = jsonObj4[Number(currentRow)].value.toString()
        newData.adjustment.type = jsonObj4[Number(currentRow)].type.toString()
        context.vars.payload1 = newData;
        context.vars.urlEndPoint9 = newURL;
        console.log("New URL", context.vars.urlEndPoint9)
        console.log("New Transformed Data", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady4(context, next) {
    _parseCSV4().then((jsonObj4) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj4.length);
        let newData = data1
        const continueLooping = currentRow < jsonObj4.length;
        console.log(currentRow, jsonObj4[Number])
        if (continueLooping) {
            let newURL = formatUrl9(jsonObj4[Number(currentRow)].shipmentid1.toString())
            newData.adjustment.equipment = jsonObj4[Number(currentRow)].equipmentid.toString()
            newData.adjustment.message = jsonObj4[Number(currentRow)].message.toString()
            newData.adjustment.value = jsonObj4[Number(currentRow)].value.toString()
            newData.adjustment.type = jsonObj4[Number(currentRow)].type.toString()
            context.vars.payload1 = newData;
            context.vars.urlEndPoint9 = newURL;
            console.log("New URL", context.vars.urlEndPoint9)
            console.log("New Transformed Data", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
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
function getPayload2(context, events, next) {
    _parseCSV().then((jsonObj) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj.length);
        let newData = data2
        newData[0].shipper_rate = jsonObj[Number(currentRow)].shipper_rate1.toString()
        newData[0].carrier_rate = jsonObj[Number(currentRow)].carrier_rate1.toString()
        newData[0].shipment = jsonObj[Number(currentRow)].shipment.toString()
        newData[0].carrier = jsonObj[Number(currentRow)].carrierid.toString()
        newData[0].shipper = jsonObj[Number(currentRow)].shipperid.toString()
        context.vars.payload2 = newData;
        console.log("New Transformed Data", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady(context, next) {
    _parseCSV().then((jsonObj) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj.length);
        let newData = data2
        const continueLooping = currentRow < jsonObj.length;
        if (continueLooping) {
            newData[0].shipper_rate = jsonObj[Number(currentRow)].shipper_rate1.toString()
            newData[0].carrier_rate = jsonObj[Number(currentRow)].carrier_rate1.toString()
            newData[0].shipment = jsonObj[Number(currentRow)].shipment.toString()
            newData[0].carrier = jsonObj[Number(currentRow)].carrierid.toString()
            newData[0].shipper = jsonObj[Number(currentRow)].shipperid.toString()
            context.vars.payload2 = newData;
            console.log("New Transformed Data", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}


//* BULK APPOINTMENT CHANGES*// 
function _parseCSV8() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath8)
            .then((jsonObj8) => {
                resolve(jsonObj8)
            })
    })
}

let data3 = [
    {
        "stop_id": "624e79b3ccf19caa60906c44",
        "job_id": "624e79b8ccf19caa60906c7e",
        "updates": {
            "appointment": false,
            "window_start": "2022-04-29T08:00:00.000Z",
            "window_end": "2022-04-29T11:00:00.000Z",
            "appointment_unconfirmed": false
        }
    },
    {
        "stop_id": "624e79b3ccf19caa60906c44",
        "job_id": "624e79b8ccf19caa60906c7e",
        "updates": {
            "appointment": false,
            "window_start": "2022-05-02T08:00:00.000Z",
            "window_end": "2022-05-05T09:00:00.000Z",
            "appointment_unconfirmed": false
        }
    }
]

// function getPayload3(context, events, next) {
//     console.log("BULK_APPOINTMENT_CHANGES");
//     const randomNbr = getRandom();
//     //let newData = data
//     // newData.shipment.reference_numbers[0].value=randomNbr
//     context.vars.payload3 = data3;
//     return next();
// }

function getPayload3(context, events, next) {
    _parseCSV8().then((jsonObj8) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj8.length);
        let newData = data3
        newData[0].stop_id = jsonObj8[Number(currentRow)].stop_id.toString()
        newData[0].job_id = jsonObj8[Number(currentRow)].job_id.toString()
        newData[1].stop_id = jsonObj8[Number(currentRow)].stop_id1.toString()
        newData[1].job_id = jsonObj8[Number(currentRow)].job_id1.toString()
        context.vars.payload3 = newData;
        console.log("BULK_APPOINTMENT_CHANGES", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady8(context, next) {
    _parseCSV8().then((jsonObj8) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj8.length);
        let newData = data3
        const continueLooping = currentRow < jsonObj8.length;
        if (continueLooping) {
            newData[0].stop_id = jsonObj8[Number(currentRow)].stop_id.toString()
            newData[0].job_id = jsonObj8[Number(currentRow)].job_id.toString()
            newData[1].stop_id = jsonObj8[Number(currentRow)].stop_id1.toString()
            newData[1].job_id = jsonObj8[Number(currentRow)].job_id1.toString()
            context.vars.payload3 = newData;
            console.log("New BULK_APPOINTMENT_CHANGES Data", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}

/*Bulk_Stop_Complete_With_File_Upload*/

function _parseCSV6() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath6)
            .then((jsonObj6) => {
                resolve(jsonObj6)
            })
    })
}

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
            "window_start": "2022-05-02T11:00:00.000Z",
            "window_end": "2022-05-02T14:00:00.000Z",
            "appointment": false,
            "uploadPending": false,
            "isValid": true,
            "confirm_appointment": true,
            "applyAllDisabled": false
        }
    }
]

function getPayload4(context, events, next) {
    _parseCSV6().then((jsonObj6) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj6.length);
        let newData = data4
        newData[0].job_id = jsonObj6[Number(currentRow)].job_id.toString()
        newData[0].stop_id = jsonObj6[Number(currentRow)].stop_id.toString()
        context.vars.payload4 = newData;
        console.log("Bulk_Stop_Complete_With_File_Upload", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}
function statusReady18(context, next) {
    _parseCSV6().then((jsonObj6) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj6.length);
        let newData = data4
        const continueLooping = currentRow < jsonObj6.length;
        if (continueLooping) {
            newData[0].job_id = jsonObj6[Number(currentRow)].job_id.toString()
            newData[0].stop_id = jsonObj6[Number(currentRow)].stop_id.toString()
            context.vars.payload4 = newData;
            console.log("Bulk_Stop_Complete_With_File_Upload", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}

// function getPayload4(context, events, next) {
//     console.log("Bulk_Stop_Complete_With_File_Upload");
//     const randomNbr = getRandom();
//     //let newData = data
//     // newData.shipment.reference_numbers[0].value=randomNbr
//     context.vars.payload4 = data4;
//     return next();
// }

/*driverassigment*/

function _parseCSV7() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath7)
            .then((jsonObj7) => {
                resolve(jsonObj7)
            })
    })
}
function formatUrl6(shipmentid) {
    return `/api/v2/jobs/${ shipmentid }/driver`;
}

let data5 = { "driverId": "55025cdc02ca450f00000019", "_type": "Driver" }

function getPayload5(context, events, next) {
    _parseCSV7().then((jsonObj7) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj7.length);
        let newData = data5
        let newURL = formatUrl6(jsonObj7[Number(currentRow)].shipmentid.toString())
        newData.driverId = jsonObj7[Number(currentRow)].driverId.toString()
        context.vars.payload5 = newData;
        context.vars.urlEndPoint6 = newURL;
        console.log("New URL", context.vars.urlEndPoint6)
        console.log("driverassigment", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady7(context, next) {
    _parseCSV7().then((jsonObj7) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj7.length);
        let newData = data5
        const continueLooping = currentRow < jsonObj7.length;
        if (continueLooping) {
            newData.driverId = jsonObj7[Number(currentRow)].driverId.toString()
            let newURL = formatUrl6(jsonObj7[Number(currentRow)].shipmentid.toString())
            context.vars.urlEndPoint6 = newURL;
            context.vars.payload5 = newData;
            console.log("New URL", context.vars.urlEndPoint6)
            console.log("driverassigment", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
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
        let currentRow = 0;
        console.log(currentRow, jsonObj1);
        const randomNbr = getRandom();
        let newData = data7
        newData.shipment.reference_numbers[0].value = randomNbr
        newData.shipment.shipment_type = jsonObj1[Number(currentRow)].shipment_type.toString()
        newData.shipment.shipper = jsonObj1[Number(currentRow)].shipperid.toString()
        context.vars.payload7 = newData;
        console.log("booking shipment", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady2(context, next) {
    console.log("Hit status ready")
    _parseCSV1().then((jsonObj1) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj1);
        let newData = data7
        const continueLooping = currentRow < jsonObj1.length;
        if (continueLooping) {
            newData.shipment.shipment_type = jsonObj1[Number(currentRow)].shipment_type.toString()
            newData.shipment.shipper = jsonObj1[Number(currentRow)].shipperid.toString()
            context.vars.payload7 = newData;
            console.log("New Transformed Data", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
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

function formatUrl7(shipmentid) {
    return `/admin/marketplace/${shipmentid}/give?resend=false`;
}

let data8 = { "userId": "" }
// function getPayload8(context, events, next) {
//     _parseCSV2().then((jsonObj2) => {
//         console.log("Offer Distribution", jsonObj2);
//         let newData = data8
//         newData.userId = jsonObj2[0].driver.toString()
//         context.vars.payload8 = newData;
//         return next();
//     })
//}

function getPayload8(context, events, next) {
    _parseCSV2().then((jsonObj2) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj2.length);
        let newData = data8
        let newURL = formatUrl7(jsonObj2[Number(currentRow)].shipmentid.toString())
         newData.userId = jsonObj2[0].driver.toString()
        context.vars.payload8 = newData;
        context.vars.urlEndPoint7 = newURL;
        console.log("New URL", context.vars.urlEndPoint7)
        console.log("Offer Distribution", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady17(context, next) {
    _parseCSV2().then((jsonObj2) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj2.length);
        let newData = data8
        const continueLooping = currentRow < jsonObj2.length;
        if (continueLooping) {
			let newURL = formatUrl7(jsonObj2[Number(currentRow)].shipmentid.toString())
			newData.userId = jsonObj2[0].driver.toString()
            context.vars.urlEndPoint7 = newURL;
            context.vars.payload8 = newData;
            console.log("New URL", context.vars.urlEndPoint7)
            console.log("Offer Distribution", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
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
        "626b6e2f83c4121b6a2df2aa",
        "626b6e2f83c4121b6a2df337",
        "626b6e3083c4121b6a2df47a"
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
    _parseCSV3().then((jsonObj3) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj3.length);
        let newData = data9
        newData.shipmentIds[0] = jsonObj3[Number(currentRow)].shipmentid1.toString();
        newData.shipmentIds[1] = jsonObj3[Number(currentRow)].shipmentid2.toString();
        newData.shipmentIds[2] = jsonObj3[Number(currentRow)].shipmentid3.toString();
        context.vars.payload9 = newData;
        console.log("Bulk Driver assigment1", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady3(context, next) {
    console.log("bulk driver")
    _parseCSV3().then((jsonObj3) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj3.length);
        let newData = data9
        const continueLooping = currentRow < jsonObj3.length;
        if (continueLooping) {
            newData.shipmentIds[0] = jsonObj3[Number(currentRow)].shipmentid1.toString();
            newData.shipmentIds[1] = jsonObj3[Number(currentRow)].shipmentid2.toString();
            newData.shipmentIds[2] = jsonObj3[Number(currentRow)].shipmentid3.toString();
            context.vars.payload9 = newData;
            console.log("BULK DRIVER ASSIGNMENT", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}
/*BULK Accessorials */
function _parseCSV9() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath9)
            .then((jsonObj9) => {
                resolve(jsonObj9)
            })
    })
}
let data10 = [
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
        "shipment": "626941f17071f6bd20bc96c1",
        "carrier": "518d9941d80f1f0200000002",
        "shipper": "5918ead7d179d4090000001f",
        "shipper_name": "Ceva Ontaro - Yard Moves",
        "carrier_name": "DGCarrier",
        "payee_type": "carrier",
        "vendor_name": "",
        "vendor": null,
        "shipment_id": "CEV-19462",
        "shipper_status": "pending-shipper",
        "carrier_status": "pending-shipper"
    },
    {
        "shipper_rate": "20.00",
        "carrier_rate": "13.00",
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
        "message": "Cleaning",
        "accessorial_type": "cleaning",
        "type": "accessorial",
        "exception_type": "Accessorial Request",
        "shipment": "626941f17071f6bd20bc96c1",
        "carrier": "518d9941d80f1f0200000002",
        "shipper": "5918ead7d179d4090000001f",
        "shipper_name": "Ceva Ontaro - Yard Moves",
        "carrier_name": "DGCarrier",
        "payee_type": "carrier",
        "vendor_name": "",
        "vendor": null,
        "shipment_id": "CEV-19462",
        "shipper_status": "pending-shipper",
        "carrier_status": "pending-shipper"
    }
]

function getPayload10(context, events, next) {
    _parseCSV9().then((jsonObj9) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj9.length);
        let newData = data10
        newData[0].shipper_rate = jsonObj9[Number(currentRow)].shipper_rate.toString()
        newData[0].carrier_rate = jsonObj9[Number(currentRow)].carrier_rate.toString()
        newData[0].shipment = jsonObj9[Number(currentRow)].shipment.toString()
        newData[0].carrier = jsonObj9[Number(currentRow)].carrierid.toString()
        newData[0].shipper = jsonObj9[Number(currentRow)].shipperid.toString()
        newData[0].shipment_id = jsonObj9[Number(currentRow)].shipmentid.toString()
        newData[1].shipper_rate = jsonObj9[Number(currentRow)].shipper_rate1.toString()
        newData[1].carrier_rate = jsonObj9[Number(currentRow)].carrier_rate1.toString()
        newData[1].shipment = jsonObj9[Number(currentRow)].shipment1.toString()
        newData[1].carrier = jsonObj9[Number(currentRow)].carrierid1.toString()
        newData[1].shipper = jsonObj9[Number(currentRow)].shipperid1.toString()
        newData[1].shipment_id = jsonObj9[Number(currentRow)].shipmentid1.toString()
        context.vars.payload10 = newData;
        console.log("bulk_accessorials", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady9(context, next) {
    console.log("bulk driver")
    _parseCSV9().then((jsonObj9) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj9);
        let newData = data10
        const continueLooping = currentRow < jsonObj9.length;
        if (continueLooping) {
            newData[0].shipper_rate = jsonObj9[Number(currentRow)].shipper_rate.toString()
            newData[0].carrier_rate = jsonObj9[Number(currentRow)].carrier_rate.toString()
            newData[0].shipment = jsonObj9[Number(currentRow)].shipment.toString()
            newData[0].carrier = jsonObj9[Number(currentRow)].carrierid.toString()
            newData[0].shipper = jsonObj9[Number(currentRow)].shipperid.toString()
            newData[0].shipment_id = jsonObj9[Number(currentRow)].shipmentid.toString()
            newData[1].shipper_rate = jsonObj9[Number(currentRow)].shipper_rate1.toString()
            newData[1].carrier_rate = jsonObj9[Number(currentRow)].carrier_rate1.toString()
            newData[1].shipment = jsonObj9[Number(currentRow)].shipment1.toString()
            newData[1].carrier = jsonObj9[Number(currentRow)].carrierid1.toString()
            newData[1].shipper = jsonObj9[Number(currentRow)].shipperid1.toString()
            newData[1].shipment_id = jsonObj9[Number(currentRow)].shipmentid1.toString()
            context.vars.payload10 = newData;
            console.log("bulk_accessorials", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}

/* Accessorial resolve-status accept/decline */
function _parseCSV11() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath11)
            .then((jsonObj11) => {
                resolve(jsonObj11)
            })
    })
}
let data11 = {
    "accessorials": [
        {
            "_id": "627247344dc5c64bff92488b",
            "_type": "accessorial",
            "payee_type": "carrier",
            "carrier_status": "pending-shipper",
            "shipper_status": "pending-shipper",
            "carrier_unit_qty": 1,
            "shipper_unit_qty": 1,
            "equipment": [
                "61c102b3b1190f0db07dcdca"
            ],
            "equipment_id": [
                "TEST7856322"
            ],
            "resolved": false,
            "shipper_rate": 30.50,
            "carrier_rate": 27.25,
            "description": null,
            "begin_datetime": null,
            "end_datetime": null,
            "location": "",
            "note": "",
            "message": "Cleaning",
            "accessorial_type": "cleaning",
            "type": "accessorial",
            "exception_type": "Accessorial Request",
            "shipment": {
                "_id": "6213682096349f0dfbf64ebf",
                "equipments": [
                    "TEST7856322",
                    "TEST7856322"
                ],
                "reference_numbers": [
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6213682096349f0dfbf64ec2",
                        "name": "master_bol",
                        "value": "BLGS04052739",
                        "optimized": "BLGS04052739"
                    },
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6213682096349f0dfbf64ec3",
                        "name": "order_id",
                        "value": "ORD-6706",
                        "optimized": "ORD-6706"
                    },
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6213682096349f0dfbf64ec4",
                        "name": "order_id",
                        "value": "ORD-6706",
                        "optimized": "ORD-6706"
                    },
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6213682096349f0dfbf64ec5",
                        "name": "scac_code",
                        "value": "CevaOntarioYardMoves",
                        "optimized": "CEVAONTARIOYARDMOVES"
                    },
                    {
                        "editable": false,
                        "hidden": false,
                        "primary": false,
                        "_id": "6213682096349f0dfbf64ec6",
                        "name": "shipment_id",
                        "value": "CEV-19644",
                        "optimized": "CEV-19644"
                    },
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "621369b996349f0dfbf64f3d",
                        "name": "equipment_id",
                        "value": "TEST7856322",
                        "optimized": "TEST7856322"
                    },
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "62136b6496349f0dfbf64f86",
                        "name": "equipment_id",
                        "value": "TEST7856322",
                        "optimized": "TEST7856322"
                    }
                ],
                "carrier": "518d9941d80f1f0200000002",
                "shipper": "5918ead7d179d4090000001f",
                "order_type": "import",
                "shipment_id": "CEV-19644"
            },
            "carrier": "518d9941d80f1f0200000002",
            "shipper": "5918ead7d179d4090000001f",
            "shipper_name": "Ceva Ontaro - Yard Moves",
            "carrier_name": "DGCarrier",
            "vendor_name": "",
            "vendor": null,
            "shipment_id": "CEV-19644",
            "action_required": "Awaiting Shipper Response",
            "history": [
                {
                    "_id": "6213985196349f0dfbf6586b",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Shipper Notified\nShipper Rate Per Unit: $30.50\nUnits: 1\nShipper Total: $30.50\nCarrier Rate Per Unit: $27.25\nUnits: 1\nCarrier Total: $27.25",
                    "timestamp": "2022-02-21T13:49:05.439Z"
                }
            ],
            "shipper_begin_datetime": null,
            "shipper_end_datetime": null,
            "shipper_location": "",
            "shipper_description": null,
            "documents": [],
            "created_at": "2022-02-21T13:49:05.443Z",
            "modified_at": "2022-02-21T13:49:05.443Z",
            "expire_at": "9999-12-31T00:00:00.000Z",
            "shipper_rate": 30.50,
            "carrier_rate": 27.25,
            "__v": 0,
            "approveCarrier": true,
            "approveShipper": true
        }
    ],
    "resolution_type": "approve",
    "sendEmail": true
}

function getPayload11(context, events, next) {
    _parseCSV11().then((jsonObj11) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj11.length);
        let newData = data11
        newData.accessorials[0]._id = jsonObj11[Number(currentRow)]._id.toString()
        newData.accessorials[0].equipment_id[0] = jsonObj11[Number(currentRow)].equipment_id.toString()
        newData.accessorials[0].equipment[0] = jsonObj11[Number(currentRow)].equipment.toString()
        newData.accessorials[0].shipper_rate[0] = jsonObj11[Number(currentRow)].shipper_rate.toString()
        newData.accessorials[0].carrier_rate = jsonObj11[Number(currentRow)].carrier_rate.toString()
        newData.accessorials[0].message = jsonObj11[Number(currentRow)].message.toString()
        newData.accessorials[0].accessorial_type = jsonObj11[Number(currentRow)].accessorial_type.toString()
        newData.accessorials[0].shipment.equipments[0] = jsonObj11[Number(currentRow)].equipment_id.toString()
        newData.accessorials[0].shipment.equipments[1] = jsonObj11[Number(currentRow)].equipment_id.toString()
        newData.accessorials[0].shipment.reference_numbers[0].value[0] = jsonObj11[Number(currentRow)].Master_Ref.toString()
        newData.accessorials[0].shipment.reference_numbers[0].optimized[0] = jsonObj11[Number(currentRow)].Master_Ref.toString()
        newData.accessorials[0].shipment.reference_numbers[0].value[1] = jsonObj11[Number(currentRow)].order_nbr.toString()
        newData.accessorials[0].shipment.reference_numbers[0].optimized[1] = jsonObj11[Number(currentRow)].order_nbr.toString()
        newData.accessorials[0].shipment.reference_numbers[0].value[2] = jsonObj11[Number(currentRow)].order_nbr.toString()
        newData.accessorials[0].shipment.reference_numbers[0].optimized[2] = jsonObj11[Number(currentRow)].order_nbr.toString()
        newData.accessorials[0].shipment.reference_numbers[0].value[4] = jsonObj11[Number(currentRow)].shipmentid.toString()
        newData.accessorials[0].shipment.reference_numbers[0].optimized[4] = jsonObj11[Number(currentRow)].shipmentid.toString()
        newData.accessorials[0].shipment.reference_numbers[0].value[5] = jsonObj11[Number(currentRow)].equipment_id.toString()
        newData.accessorials[0].shipment.reference_numbers[0].optimized[5] = jsonObj11[Number(currentRow)].equipment_id.toString()
        newData.accessorials[0].shipment.reference_numbers[0].value[6] = jsonObj11[Number(currentRow)].equipment_id.toString()
        newData.accessorials[0].shipment.reference_numbers[0].optimized[6] = jsonObj11[Number(currentRow)].equipment_id.toString()
        newData.accessorials[0].shipment.carrier[0] = jsonObj11[Number(currentRow)].carrierid.toString()
        newData.accessorials[0].shipment.shipper[0] = jsonObj11[Number(currentRow)].shipperid.toString()
        newData.accessorials[0].carrier[0] = jsonObj11[Number(currentRow)].carrierid.toString()
        newData.accessorials[0].shipper[0] = jsonObj11[Number(currentRow)].shipperid.toString()
        newData.accessorials[0].shipment_id[0] = jsonObj11[Number(currentRow)].shipmentid.toString()
        newData.accessorials[0].shipper_rate[0] = Number(jsonObj11[Number(currentRow)].shipper_rate)
        newData.accessorials[0].carrier_rate[0] = Number(jsonObj11[Number(currentRow)].carrier_rate)
        context.vars.payload11 = newData;
        console.log("Accessorial resolve-status accept/decline", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady10(context, next) {
    console.log("bulk driver")
    _parseCSV11().then((jsonObj11) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj11);
        let newData = data11
        const continueLooping = currentRow < jsonObj11.length;
        if (continueLooping) {
            newData.accessorials[0]._id = jsonObj11[Number(currentRow)]._id.toString()
            newData.accessorials[0].equipment_id[0] = jsonObj11[Number(currentRow)].equipment_id.toString()
            newData.accessorials[0].equipment[0] = jsonObj11[Number(currentRow)].equipment.toString()
            newData.accessorials[0].shipper_rate[0] = Number(jsonObj11[Number(currentRow)].shipper_rate)
            newData.accessorials[0].carrier_rate = Number(jsonObj11[Number(currentRow)].carrier_rate)
            newData.accessorials[0].message = jsonObj11[Number(currentRow)].message.toString()
            newData.accessorials[0].accessorial_type = jsonObj11[Number(currentRow)].accessorial_type.toString()
            newData.accessorials[0].shipment.equipments[0] = jsonObj11[Number(currentRow)].equipment_id.toString()
            newData.accessorials[0].shipment.equipments[1] = jsonObj11[Number(currentRow)].equipment_id.toString()
            newData.accessorials[0].shipment.reference_numbers[0].value[0] = jsonObj11[Number(currentRow)].Master_Ref.toString()
            newData.accessorials[0].shipment.reference_numbers[0].optimized[0] = jsonObj11[Number(currentRow)].Master_Ref.toString()
            newData.accessorials[0].shipment.reference_numbers[0].value[1] = jsonObj11[Number(currentRow)].order_nbr.toString()
            newData.accessorials[0].shipment.reference_numbers[0].optimized[1] = jsonObj11[Number(currentRow)].order_nbr.toString()
            newData.accessorials[0].shipment.reference_numbers[0].value[2] = jsonObj11[Number(currentRow)].order_nbr.toString()
            newData.accessorials[0].shipment.reference_numbers[0].optimized[2] = jsonObj11[Number(currentRow)].order_nbr.toString()
            newData.accessorials[0].shipment.reference_numbers[0].value[4] = jsonObj11[Number(currentRow)].shipmentid.toString()
            newData.accessorials[0].shipment.reference_numbers[0].optimized[4] = jsonObj11[Number(currentRow)].shipmentid.toString()
            newData.accessorials[0].shipment.reference_numbers[0].value[5] = jsonObj11[Number(currentRow)].equipment_id.toString()
            newData.accessorials[0].shipment.reference_numbers[0].optimized[5] = jsonObj11[Number(currentRow)].equipment_id.toString()
            newData.accessorials[0].shipment.reference_numbers[0].value[6] = jsonObj11[Number(currentRow)].equipment_id.toString()
            newData.accessorials[0].shipment.reference_numbers[0].optimized[6] = jsonObj11[Number(currentRow)].equipment_id.toString()
            newData.accessorials[0].shipment.carrier[0] = jsonObj11[Number(currentRow)].carrierid.toString()
            newData.accessorials[0].shipment.shipper[0] = jsonObj11[Number(currentRow)].shipperid.toString()
            newData.accessorials[0].carrier[0] = jsonObj11[Number(currentRow)].carrierid.toString()
            newData.accessorials[0].shipper[0] = jsonObj11[Number(currentRow)].shipperid.toString()
            newData.accessorials[0].shipment_id[0] = jsonObj11[Number(currentRow)].shipmentid.toString()
            newData.accessorials[0].shipper_rate[0] = Number(jsonObj11[Number(currentRow)].shipper_rate)
            newData.accessorials[0].carrier_rate[0] = Number(jsonObj11[Number(currentRow)].carrier_rate)
            context.vars.payload11 = newData;
            console.log("Accessorial resolve-status accept/decline", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}

/*Get Invoice by shipper*/

function _parseCSV12() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath12)
            .then((jsonObj12) => {
                resolve(jsonObj12)
            })
    })
}

function formatUrl(shipper) {
    return `/api/v2/shippers/${shipper}/invoices?populate%5B0%5D%5Bpath%5D=shipper&populate%5B0%5D%5Bselect%5D=company_name%20email&page=1&page_size=20&sort_by=date_created`;
}

function getPayload12(context, events, next) {
    _parseCSV12().then((jsonObj12) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj12.length);
        let newURL = formatUrl(jsonObj12[Number(currentRow)].shipper.toString())
        context.vars.urlEndPoint = newURL;
        console.log("New URL", context.vars.urlEndPoint)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady11(context, next) {
    _parseCSV12().then((jsonObj12) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj12.length);
        const continueLooping = currentRow < jsonObj12.length;
        if (continueLooping) {
            let newURL = formatUrl(jsonObj12[Number(currentRow)].shipper.toString())
            context.vars.urlEndPoint = newURL;
            console.log("New URL", context.vars.urlEndPoint)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}


/*get_offers_by_carrier*/

function _parseCSV13() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath13)
            .then((jsonObj13) => {
                resolve(jsonObj13)
            })
    })
}

function formatUrl1(carrierid) {
    return `/api/v2/marketplace/offers?carrier=${ carrierid }&shipment_type%5B0%5D=drayage&shipment_type%5B1%5D=shorthaul&order.service_type%5B0%5D=drop&order.service_type%5B1%5D=live&_=1644229565232&page=1&per_page=10&sort=offerId&sort_dir=asc`;
}

function getPayload13(context, events, next) {
    _parseCSV13().then((jsonObj13) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj13.length);
        let newURL = formatUrl1(jsonObj13[Number(currentRow)].carrierid.toString())
        context.vars.urlEndPoint1 = newURL;
        console.log("New URL", context.vars.urlEndPoint)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady12(context, next) {
    _parseCSV13().then((jsonObj13) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj13.length);
        const continueLooping = currentRow < jsonObj13.length;
        if (continueLooping) {
            let newURL = formatUrl1(jsonObj13[Number(currentRow)].carrierid.toString())
            context.vars.urlEndPoint1 = newURL;
            console.log("New URL", context.vars.urlEndPoint)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}



/*get_payouts_by_carrier*/

function _parseCSV14() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath14)
            .then((jsonObj14) => {
                resolve(jsonObj14)
            })
    })
}

function formatUrl2(carrierid1) {
    return `/api/v2/carriers/${ carrierid1 }/payouts?page=1&page_size=20&sort_by=date_created&sort%5Bkey%5D=due_date&sort%5Border%5D=desc&sort%5Bkey%5D=due_date&sort%5Border%5D=desc`;
}

function getPayload14(context, events, next) {
    _parseCSV14().then((jsonObj14) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj14.length);
        let newURL = formatUrl2(jsonObj14[Number(currentRow)].carrierid1.toString())
        context.vars.urlEndPoint2 = newURL;
        console.log("New URL", context.vars.urlEndPoint2)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady13(context, next) {
    _parseCSV14().then((jsonObj14) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj14.length);
        const continueLooping = currentRow < jsonObj14.length;
        if (continueLooping) {
            let newURL = formatUrl2(jsonObj14[Number(currentRow)].carrierid1.toString())
            context.vars.urlEndPoint2 = newURL;
            console.log("New URL", context.vars.urlEndPoint2)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}
/*get_shipment by customer */

function _parseCSV15() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath15)
            .then((jsonObj15) => {
                resolve(jsonObj15)
            })
    })
}

function formatUrl3(customer) {
    return `/admin/api/v2/users?page=1&per_page=25&paginate=true&sort_by=optimized_name&test=false&select=optimized_name%20company_name%20_type%20picture%20require_tracking_id%20email&lean=false&order=asc&_type=Shipper&name=${customer}`;
}

function getPayload15(context, events, next) {
    _parseCSV15().then((jsonObj15) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj15.length);
        let newURL = formatUrl3(jsonObj15[Number(currentRow)].customer.toString())
        context.vars.urlEndPoint3 = newURL;
        console.log("New URL", context.vars.urlEndPoint3)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady14(context, next) {
    _parseCSV15().then((jsonObj15) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj15.length);
        const continueLooping = currentRow < jsonObj15.length;
        if (continueLooping) {
            let newURL = formatUrl3(jsonObj15[Number(currentRow)].customer.toString())
            context.vars.urlEndPoint3 = newURL;
            console.log("New URL", context.vars.urlEndPoint3)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}

/*get_shipment by id */

function _parseCSV16() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath16)
            .then((jsonObj16) => {
                resolve(jsonObj16)
            })
    })
}

function formatUrl4(shipmentid) {
    return `/api/v3/jobs/${ shipmentid }`;
}

function getPayload16(context, events, next) {
    _parseCSV16().then((jsonObj16) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj16.length);
        let newURL = formatUrl4(jsonObj16[Number(currentRow)].shipmentid.toString())
        context.vars.urlEndPoint4 = newURL;
        console.log("New URL", context.vars.urlEndPoint4)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady15(context, next) {
    _parseCSV16().then((jsonObj16) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj16.length);
        const continueLooping = currentRow < jsonObj16.length;
        if (continueLooping) {
            let newURL = formatUrl4(jsonObj16[Number(currentRow)].shipmentid.toString())
            context.vars.urlEndPoint4 = newURL;
            console.log("New URL", context.vars.urlEndPoint4)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}

/*get_shipment by refnumber */

function _parseCSV17() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath17)
            .then((jsonObj17) => {
                resolve(jsonObj17)
            })
    })
}

function formatUrl5(refNumber) {
    return `/api/v3/jobs?reference%5B0%5D=${ refNumber }-&deliver_after%5B0%5D=2022-02-01T08%3A00%3A00.000Z&deliver_by%5B0%5D=2022-02-17T07%3A59%3A59.999Z&page=1&per_page=25&_=1645002950612`;
}

function getPayload17(context, events, next) {
    _parseCSV17().then((jsonObj17) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj17.length);
        let newURL = formatUrl5(jsonObj17[Number(currentRow)].refNumber.toString())
        context.vars.urlEndPoint5 = newURL;
        console.log("New URL", context.vars.urlEndPoint5)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady16(context, next) {
    _parseCSV17().then((jsonObj17) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj17.length);
        const continueLooping = currentRow < jsonObj17.length;
        if (continueLooping) {
            let newURL = formatUrl5(jsonObj17[Number(currentRow)].refNumber.toString())
            context.vars.urlEndPoint5 = newURL;
            console.log("New URL", context.vars.urlEndPoint5)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}


function _parseCSV19() {
    return new Promise((resolve, _) => {
        csv()
            .fromFile(csvFilePath18)
            .then((jsonObj19) => {
                resolve(jsonObj19)
            })
    })
}
let data19 = {"username":"admin","password":"admin"}

function getPayload19(context, events, next) {
    _parseCSV19().then((jsonObj19) => {
        let currentRow = 0;
        console.log(currentRow, jsonObj19.length);
        let newData = data19
        newData.username = jsonObj19[Number(currentRow)].username.toString()
        newData.password = jsonObj19[Number(currentRow)].password.toString()
        context.vars.payload19 = newData;
        console.log("autherntication Data", newData)
        context.vars.currentRow = currentRow + 1;
        return next();
    })
}

function statusReady19(context, next) {
    _parseCSV5().then((jsonObj19) => {
        let currentRow = context.vars.currentRow;
        console.log(currentRow, jsonObj19.length);
        let newData = data19
        const continueLooping = currentRow < jsonObj19.length;
        if (continueLooping) {
            newData.username = jsonObj19[Number(currentRow)].username.toString()
            newData.password = jsonObj19[Number(currentRow)].password.toString()
            context.vars.payload19 = newData;
            console.log("autherntication Data", newData)
        }
        context.vars.currentRow = currentRow + 1;
        return next(continueLooping);
    })
}


function logResponse(requestParams, response, context, ee, next) {
    const parsedResponse = response.body
    console.log(parsedResponse);
    return next(); // MUST be called for the scenario to continue
}

function logResponse1(requestParams, response, context, ee, next) {
    const parsedResponse = JSON.parse(response.body);
    console.log(parsedResponse);
    return next(); // MUST be called for the scenario to continue
}
