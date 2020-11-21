const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
	body: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	status: {
		type: String,
		default: 'public',
		enum: ['public', 'private']
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Quote', QuoteSchema);
