var express = require('express');
var path = require('path');
var logger = require('morgan');
var router = express.Router();
let monk = require('monk');
let db = monk('localhost:27017/employment-agency');

router.post('/', async function (req, res, next) {
    let collection = db.get('employers');

    let employer = await collection.insert({
        name: req.body.name,
        occupation: req.body.occupation,
        address: req.body.address,
        phone: req.body.phone,
    });

    res.json(employer);
});

router.get('/', async function (req, res, next) {
    let employers = await db.get('employers').find();
    res.json(employers);
});

router.get('/:id', async function (req, res, next) {
    let employee = await db.get('employers').findOne({_id: req.params.id});
    res.json(employee);
});

router.patch('/:id', async function (req, res, next) {
    let employersCollection = db.get('employers');
    let employee = await (employersCollection.update(
        {_id: req.params.id},
        {
            $set: {
                name: req.body.name,
                occupation: req.body.occupation,
                address: req.body.address,
                phone: req.body.phone,
            }
        },
    ));
    res.json(employee);
});

router.delete('/:id', async function (req, res, next) {
    let employersCollection = db.get('employers');
    let employee = await (employersCollection.remove(
        {_id: req.params.id},
    ));
    res.json(employee);
});

module.exports = router;
