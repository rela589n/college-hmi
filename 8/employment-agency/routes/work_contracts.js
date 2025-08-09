var express = require('express');
var path = require('path');
var logger = require('morgan');
var router = express.Router();
let monk = require('monk');
let db = monk('localhost:27017/employment-agency');

router.post('/', async function (req, res, next) {
    let collection = db.get('work_contracts');

    let employer = await collection.insert({
        employee_id: req.body.employee_id,
        employer_id: req.body.employer_id,
        position: req.body.position,
        commission: 10,
    });

    res.json(employer);
});

router.get('/', async function (req, res, next) {
    let work_contracts = await db.get('work_contracts').find();
    res.json(work_contracts);
});

router.get('/verbose', async function (req, res, next) {
    let work_contracts = await db.get('work_contracts').aggregate([
        {
            $addFields: {
                "employeeObjectId": {
                    "$toObjectId": "$employee_id"
                },
                "employerObjectId": {
                    "$toObjectId": "$employer_id"
                },
            }
        },
        {
            $lookup: {
                from: "employees",
                localField: "employeeObjectId",
                foreignField: "_id",
                as: "employee"
            }
        },
        {
            $lookup: {
                from: "employers",
                localField: "employerObjectId",
                foreignField: "_id",
                as: "employer"
            }
        },
    ]);

    res.json(work_contracts);
});


router.delete('/:id', async function (req, res, next) {
    let workContract = db.get('work_contracts');
    let employee = await (workContract.remove(
        {_id: req.params.id},
    ));
    res.json(employee);
});


module.exports = router;
