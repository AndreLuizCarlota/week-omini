const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
      date: String,
      approved: Boolean,
      spot: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Spot'
      },
      user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
      }
})

module.exports = mongoose.model('Bookings', bookingSchema);