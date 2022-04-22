module.exports = {
    getPayload,
    logResponse
}

let data = {
    "accessorials": [
        {
            "_id": "621e25fa138ea97bdb2120b9",
            "_type": "accessorial",
            "type": "accessorial",
            "payee_type": "carrier",
            "exception_type": "Accessorial Request",
            "shipment": {
                "_id": "6217ab0ccf289b6edc211655",
                "equipments": [
                    "6666"
                ],
                "reference_numbers": [
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6217ab0ccf289b6edc211658",
                        "name": "equipment_id",
                        "value": "6666",
                        "optimized": "6666"
                    },
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6217ab0ccf289b6edc211659",
                        "name": "scac_code",
                        "value": "CGTR",
                        "optimized": "CGTR"
                    },
                    {
                        "editable": false,
                        "hidden": false,
                        "primary": false,
                        "_id": "6217ab0ccf289b6edc21165a",
                        "name": "shipment_id",
                        "value": "TER-1051",
                        "optimized": "TER-1051"
                    }
                ],
                "carrier": "5d7023923dc17600136ae96b",
                "order_type": "import",
                "shipper": "5d488a5970cac27eff14ad94",
                "shipment_id": "TER-1051"
            },
            "shipper": "5d488a5970cac27eff14ad94",
            "carrier": "5d7023923dc17600136ae96b",
            "vendor": null,
            "carrier_name": "Terry's Carrier",
            "shipper_name": "Terry's Shipper",
            "vendor_name": "",
            "shipment_id": "TER-1051",
            "accessorial_type": "bobtail",
            "message": "Bobtail",
            "shipper_description": null,
            "description": null,
            "carrier_status": "declined",
            "shipper_status": "declined",
            "carrier_rate": 30,
            "shipper_rate": 40,
            "carrier_unit_qty": 1,
            "shipper_unit_qty": 1,
            "equipment": [
                "621516d7a771de167bb95c90"
            ],
            "equipment_id": [
                "6666"
            ],
            "history": [
                {
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "email": "admin@cargomatic.com",
                    "message": "Shipper Notified\nShipper Rate Per Unit: $40.00\nUnits: 1\nShipper Total: $40.00\nCarrier Rate Per Unit: $30.00\nUnits: 1\nCarrier Total: $30.00",
                    "timestamp": "2022-03-01T13:56:10.538Z",
                    "_id": "621e25fa138ea97bdb2120ba"
                },
                {
                    "_id": "621e3c676e33933873f4bd8c",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-01T15:31:51.419Z"
                },
                {
                    "_id": "621e3c676e33933873f4bd93",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Shipper",
                    "timestamp": "2022-03-01T15:31:51.463Z"
                },
                {
                    "_id": "621e3caf6e33933873f4bdae",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-01T15:33:03.705Z"
                },
                {
                    "_id": "621e3caf6e33933873f4bdb4",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-01T15:33:03.738Z"
                },
                {
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "email": "admin@cargomatic.com",
                    "message": "Approved Shipper",
                    "timestamp": "2022-03-01T16:09:43.557Z",
                    "_id": "621e45478cb864974cda91e3"
                },
                {
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "email": "admin@cargomatic.com",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-01T16:09:43.931Z",
                    "_id": "621e45478cb864974cda91e5"
                },
                {
                    "_id": "621f6fdd916df23650c6be62",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T13:23:41.915Z"
                },
                {
                    "_id": "621f6fde916df23650c6be64",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T13:23:42.217Z"
                },
                {
                    "_id": "621f72e760ba6f38619d155c",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-02T13:36:39.977Z"
                },
                {
                    "_id": "621f72e760ba6f38619d155a",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Shipper",
                    "timestamp": "2022-03-02T13:36:39.970Z"
                },
                {
                    "_id": "621f731660ba6f38619d1575",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T13:37:26.947Z"
                },
                {
                    "_id": "621f731660ba6f38619d157c",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T13:37:26.974Z"
                },
                {
                    "_id": "621f732b60ba6f38619d1582",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T13:37:47.673Z"
                },
                {
                    "_id": "621f732b60ba6f38619d1586",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T13:37:47.716Z"
                },
                {
                    "_id": "621f98d036cce8515ad06c9b",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-02T16:18:24.387Z"
                },
                {
                    "_id": "621f994536cce8515ad06ca7",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T16:20:21.401Z"
                },
                {
                    "_id": "621f994536cce8515ad06caa",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T16:20:21.418Z"
                }
            ],
            "note": "Test",
            "action_required": "",
            "begin_datetime": null,
            "end_datetime": null,
            "location": "",
            "shipper_begin_datetime": null,
            "shipper_end_datetime": null,
            "shipper_location": "",
            "resolved": false,
            "documents": [],
            "created_at": "2022-03-01T13:56:10.542Z",
            "modified_at": "2022-03-02T16:20:21.418Z",
            "expire_at": "9999-12-31T00:00:00.000Z",
            "shipper_cost": 40,
            "carrier_cost": 30,
            "__v": 0,
            "modified_by": "admin@cargomatic.com",
            "carrier_note": "",
            "shipper_note": "",
            "meta": {
                "carrier_note": " "
            },
            "approveCarrier": true,
            "approveShipper": true,
            "approveVendor": false
        },
        {
            "_id": "621e2614560b193fd5d12963",
            "_type": "accessorial",
            "type": "accessorial",
            "payee_type": "carrier",
            "exception_type": "Accessorial Request",
            "shipment": {
                "_id": "6217ab0ccf289b6edc211655",
                "equipments": [
                    "6666"
                ],
                "reference_numbers": [
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6217ab0ccf289b6edc211658",
                        "name": "equipment_id",
                        "value": "6666",
                        "optimized": "6666"
                    },
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6217ab0ccf289b6edc211659",
                        "name": "scac_code",
                        "value": "CGTR",
                        "optimized": "CGTR"
                    },
                    {
                        "editable": false,
                        "hidden": false,
                        "primary": false,
                        "_id": "6217ab0ccf289b6edc21165a",
                        "name": "shipment_id",
                        "value": "TER-1051",
                        "optimized": "TER-1051"
                    }
                ],
                "carrier": "5d7023923dc17600136ae96b",
                "order_type": "import",
                "shipper": "5d488a5970cac27eff14ad94",
                "shipment_id": "TER-1051"
            },
            "shipper": "5d488a5970cac27eff14ad94",
            "carrier": "5d7023923dc17600136ae96b",
            "vendor": null,
            "carrier_name": "Terry's Carrier",
            "shipper_name": "Terry's Shipper",
            "vendor_name": "",
            "shipment_id": "TER-1051",
            "accessorial_type": "kelvin",
            "message": "Kelvin",
            "shipper_description": null,
            "description": null,
            "carrier_status": "declined",
            "shipper_status": "declined",
            "carrier_rate": 60,
            "shipper_rate": 80,
            "carrier_unit_qty": 1,
            "shipper_unit_qty": 1,
            "equipment": [
                "621516d7a771de167bb95c90"
            ],
            "equipment_id": [
                "6666"
            ],
            "history": [
                {
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "email": "admin@cargomatic.com",
                    "message": "Shipper Notified\nShipper Rate Per Unit: $80.00\nUnits: 1\nShipper Total: $80.00\nCarrier Rate Per Unit: $60.00\nUnits: 1\nCarrier Total: $60.00",
                    "timestamp": "2022-03-01T13:56:36.736Z",
                    "_id": "621e2614560b193fd5d12964"
                },
                {
                    "_id": "621e3c676e33933873f4bd8e",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Shipper",
                    "timestamp": "2022-03-01T15:31:51.448Z"
                },
                {
                    "_id": "621e3c686e33933873f4bd95",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-01T15:31:52.094Z"
                },
                {
                    "_id": "621e3caf6e33933873f4bdad",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-01T15:33:03.691Z"
                },
                {
                    "_id": "621e3caf6e33933873f4bdb1",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-01T15:33:03.727Z"
                },
                {
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "email": "admin@cargomatic.com",
                    "message": "Approved Shipper",
                    "timestamp": "2022-03-01T16:09:43.946Z",
                    "_id": "621e45478cb864974cda91e7"
                },
                {
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "email": "admin@cargomatic.com",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-01T16:09:43.951Z",
                    "_id": "621e45478cb864974cda91e9"
                },
                {
                    "_id": "621f6fdd916df23650c6be5d",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T13:23:41.893Z"
                },
                {
                    "_id": "621f6fde916df23650c6be63",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T13:23:42.206Z"
                },
                {
                    "_id": "621f72e760ba6f38619d1555",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Shipper",
                    "timestamp": "2022-03-02T13:36:39.953Z"
                },
                {
                    "_id": "621f72e760ba6f38619d1558",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-02T13:36:39.965Z"
                },
                {
                    "_id": "621f731660ba6f38619d1576",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T13:37:26.952Z"
                },
                {
                    "_id": "621f732b60ba6f38619d1581",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T13:37:47.256Z"
                },
                {
                    "_id": "621f732b60ba6f38619d1589",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T13:37:47.725Z"
                },
                {
                    "_id": "621f98d036cce8515ad06c9d",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-02T16:18:24.394Z"
                },
                {
                    "_id": "621f994536cce8515ad06cac",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T16:20:21.425Z"
                },
                {
                    "_id": "621f994536cce8515ad06cad",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T16:20:21.429Z"
                }
            ],
            "note": "",
            "action_required": "",
            "begin_datetime": null,
            "end_datetime": null,
            "location": "",
            "shipper_begin_datetime": null,
            "shipper_end_datetime": null,
            "shipper_location": "",
            "resolved": false,
            "documents": [],
            "created_at": "2022-03-01T13:56:36.742Z",
            "modified_at": "2022-03-02T16:20:21.429Z",
            "expire_at": "9999-12-31T00:00:00.000Z",
            "shipper_cost": 80,
            "carrier_cost": 60,
            "__v": 0,
            "modified_by": "admin@cargomatic.com",
            "shipper_note": "",
            "carrier_note": "",
            "meta": {
                "carrier_note": " "
            },
            "approveCarrier": true,
            "approveShipper": true,
            "approveVendor": false
        },
        {
            "_id": "621e2630138ea97bdb2121ed",
            "_type": "accessorial",
            "type": "accessorial",
            "payee_type": "carrier",
            "exception_type": "Accessorial Request",
            "shipment": {
                "_id": "6217ab0ccf289b6edc211655",
                "equipments": [
                    "6666"
                ],
                "reference_numbers": [
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6217ab0ccf289b6edc211658",
                        "name": "equipment_id",
                        "value": "6666",
                        "optimized": "6666"
                    },
                    {
                        "editable": true,
                        "hidden": false,
                        "primary": false,
                        "_id": "6217ab0ccf289b6edc211659",
                        "name": "scac_code",
                        "value": "CGTR",
                        "optimized": "CGTR"
                    },
                    {
                        "editable": false,
                        "hidden": false,
                        "primary": false,
                        "_id": "6217ab0ccf289b6edc21165a",
                        "name": "shipment_id",
                        "value": "TER-1051",
                        "optimized": "TER-1051"
                    }
                ],
                "carrier": "5d7023923dc17600136ae96b",
                "order_type": "import",
                "shipper": "5d488a5970cac27eff14ad94",
                "shipment_id": "TER-1051"
            },
            "shipper": "5d488a5970cac27eff14ad94",
            "carrier": "5d7023923dc17600136ae96b",
            "vendor": null,
            "carrier_name": "Terry's Carrier",
            "shipper_name": "Terry's Shipper",
            "vendor_name": "",
            "shipment_id": "TER-1051",
            "accessorial_type": "kelvin",
            "message": "Kelvin",
            "shipper_description": null,
            "description": null,
            "carrier_status": "declined",
            "shipper_status": "declined",
            "carrier_rate": 30,
            "shipper_rate": 50,
            "carrier_unit_qty": 1,
            "shipper_unit_qty": 1,
            "equipment": [
                "621516d7a771de167bb95c90"
            ],
            "equipment_id": [
                "6666"
            ],
            "history": [
                {
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "email": "admin@cargomatic.com",
                    "message": "Shipper Notified\nShipper Rate Per Unit: $50.00\nUnits: 1\nShipper Total: $50.00\nCarrier Rate Per Unit: $30.00\nUnits: 1\nCarrier Total: $30.00",
                    "timestamp": "2022-03-01T13:57:04.214Z",
                    "_id": "621e2630138ea97bdb2121ee"
                },
                {
                    "_id": "621e3c676e33933873f4bd94",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Shipper",
                    "timestamp": "2022-03-01T15:31:51.768Z"
                },
                {
                    "_id": "621e3c686e33933873f4bd96",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-01T15:31:52.749Z"
                },
                {
                    "_id": "621e3caf6e33933873f4bdb0",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-01T15:33:03.723Z"
                },
                {
                    "_id": "621e3cb06e33933873f4bdb7",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-01T15:33:04.975Z"
                },
                {
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "email": "admin@cargomatic.com",
                    "message": "Approved Shipper",
                    "timestamp": "2022-03-01T16:09:43.958Z",
                    "_id": "621e45478cb864974cda91ed"
                },
                {
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "email": "admin@cargomatic.com",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-01T16:09:46.576Z",
                    "_id": "621e454a8cb864974cda920d"
                },
                {
                    "_id": "621f6fde916df23650c6be65",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T13:23:42.256Z"
                },
                {
                    "_id": "621f6fdf916df23650c6be66",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T13:23:43.326Z"
                },
                {
                    "_id": "621f72e860ba6f38619d155d",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Shipper",
                    "timestamp": "2022-03-02T13:36:40.341Z"
                },
                {
                    "_id": "621f72e960ba6f38619d155e",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-02T13:36:41.392Z"
                },
                {
                    "_id": "621f731660ba6f38619d1577",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T13:37:26.960Z"
                },
                {
                    "_id": "621f732b60ba6f38619d1585",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T13:37:47.704Z"
                },
                {
                    "_id": "621f732d60ba6f38619d158b",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T13:37:49.213Z"
                },
                {
                    "_id": "621f98d036cce8515ad06c98",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Approved Carrier",
                    "timestamp": "2022-03-02T16:18:24.366Z"
                },
                {
                    "_id": "621f994536cce8515ad06ca8",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Carrier\nCarrier Note: ",
                    "timestamp": "2022-03-02T16:20:21.407Z"
                },
                {
                    "_id": "621f994636cce8515ad06cb0",
                    "email": "admin@cargomatic.com",
                    "author": "Admin Admin",
                    "authorType": "Admin",
                    "message": "Declined Shipper\nShipper Note: ",
                    "timestamp": "2022-03-02T16:20:22.782Z"
                }
            ],
            "note": "",
            "action_required": "",
            "begin_datetime": null,
            "end_datetime": null,
            "location": "",
            "shipper_begin_datetime": null,
            "shipper_end_datetime": null,
            "shipper_location": "",
            "resolved": false,
            "documents": [],
            "created_at": "2022-03-01T13:57:04.219Z",
            "modified_at": "2022-03-02T16:20:22.783Z",
            "expire_at": "9999-12-31T00:00:00.000Z",
            "shipper_cost": 50,
            "carrier_cost": 30,
            "__v": 0,
            "modified_by": "admin@cargomatic.com",
            "carrier_note": "",
            "shipper_note": "",
            "meta": {
                "carrier_note": " "
            },
            "approveCarrier": true,
            "approveShipper": true,
            "approveVendor": false
        }
    ],
    "resolution_type": "approve",
    "sendEmail": true
}

function getPayload(context, events, next) {
    console.log("Applying approve accessoiral payload");
    context.vars.payload = data;
    return next();
}


function logResponse(requestParams, response, context, ee, next) {
    console.log(response.body);
    return next(); // MUST be called for the scenario to continue
}
