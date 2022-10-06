const mongoose = require('mongoose');

const MobilSchema = mongoose.Schema({
    Kode_Mobil: {
        type: String,
        required: true
    },
    Nama_Mobil: {
        type: String,
        required: true
    },
    Tarif_Per_Jam: {
        type: Number,
        required: true
    },
    Tarif_Per_Hari: {
        type: Number,
        required: true
    },
  Status_Mobil: {
        type: [String],
        required: true
    }
});

module.exports = mongoose.model('MobilTable', MobilSchema)