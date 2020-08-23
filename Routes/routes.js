const express = require('express');
const router = express.Router();
const usersModel = require('../models').usersModel;

//Get Users
router.get('/getUsers', (req, res) => {
	//get Users
	usersModel.findAll().then((fetchedData) => {
		res.json(fetchedData);
	});
});

module.exports = router;
