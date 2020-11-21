const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const Quote = require('../models/Quote');

// @desc	Login/Landing
// @route	GET /
router.get('/', ensureGuest, (req, res) => {
	res.render('login', {
		layout: 'login',
	})
});

// @desc	Dashboard
// @route	GET /dashbaord
router.get('/dashboard', ensureAuth, async (req, res) => {
	try{
		const quotes = await Quote.find({ user: req.user.id }).lean();
		res.render('dashboard', {
			name: req.user.firstName,
			quotes
		})
	} catch (err) {
		console.log(err);
		res.render('error/500');
	}
});


module.exports = router
