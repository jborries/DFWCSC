var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    content: {
        type: String,
        required: [true, "You forgot to include your name..."],
        minlength: [10, "Your question must be at least 10 characters long"]
    },
	name: {
		type: String,
		required: [true, "You forgot to add your name..."],
	},

	email: {
		type: String,
		required: [true, "You forgot to add your email..."]
	},
	phone: {
		type: Number,
		required: [true, "You forgot to add your phone number.."]
	},
	location: {
		type: String,
		required: [true, "You forgot to add your location..."]
	},
	language: {
		type: String
	},
	user: {
		type: String,
		required: [true, "You forgot to tell us who the end user(s) will be..."]
	},
	host: {
		type: String
	},
	description: {
        type: String,
		required: [true, "You forgot to add your description of the project..."]
    },
    answers: [{
            _author: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            content: {
                type: String,
                required: [true, "You forgot to answer the question..."],
                minlength: [15, "Your answer must be at least 15 characters long"]
            },
            details: {
                type: String
            },
            views: {
                type: Number,
                default: 0
            },

        }

    ]
})
mongoose.model("Question", QuestionSchema);
