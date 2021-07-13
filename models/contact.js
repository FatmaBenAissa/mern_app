const mongoose = require('mongoose')
const schema=mongoose.Schema
const contactSchema = new schema({
    lastName: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: false,
      },
})
module.exports =Contact= mongoose.model('contact',contactSchema)