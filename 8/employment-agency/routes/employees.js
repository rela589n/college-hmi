var express = require('express');
var path = require('path');
var logger = require('morgan');
var router = express.Router();
let monk = require('monk');
let db = monk('localhost:27017/employment-agency');

router.post('/', async function (req, res, next) {
    let collection = db.get('employees');

    let employer = await collection.insert({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        patronymic: req.body.patronymic,
        occupation: req.body.occupation,
        phone: req.body.phone,
    });

    res.json(employer);
});

router.get('/', async function (req, res, next) {
    let employees = await db.get('employees').find();

    employees.forEach(function(employee) {
        employee.full_name = employee.firstName + " " + employee.lastName + " " + employee.patronymic;
    });

    res.json(employees);
});

router.get('/:id', async function (req, res, next) {
    let employee = await db.get('employees').findOne({_id: req.params.id});
    res.json(employee);
});

router.patch('/:id', async function (req, res, next) {
    let employeesCollection = db.get('employees');
    let employee = await (employeesCollection.update(
        {_id: req.params.id},
        {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                patronymic: req.body.patronymic,
                occupation: req.body.occupation,
                phone: req.body.phone,
            }
        },
    ));
    res.json(employee);
});


router.delete('/:id', async function (req, res, next) {
    let employeeCollection = db.get('employees');
    let employee = await (employeeCollection.remove(
        {_id: req.params.id},
    ));
    res.json(employee);
});


module.exports = router;
