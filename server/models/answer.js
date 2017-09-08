var mongoose = require('mongoose')

var answerSchema = mongoose.Schema({
  text: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  vote: {
    up: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }],
    down: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }]
  }
}, {
  timestamps: true
})

module.exports = answerSchema