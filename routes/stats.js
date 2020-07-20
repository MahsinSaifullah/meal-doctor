const express = require('express');
const auth = require('../middleware/auth');

const DailyStat = require('../models/DailyStat');
const router = express.Router();

//@route    GET api/stats
//@desc     Get all users' stats
//@access   Private
router.get('/', auth, async (req, res) => {
	try {
		const dailyStat = await DailyStat.find({ user: req.user.id });
		res.json(dailyStat);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
