 const mongoose = require('mongoose');

  const UsersSchema = mongoose.Schema({
    Kode_User: {
        type: String,
        required: true
    },
    Nama_User: {
        type: String,
        required: true
    },
    Pwd_User: {
        type: String,
        required: true
    },
    Status_User: {
        type: String,
        required: true
    }
  });

  module.exports = mongoose.model('UserTable', UsersSchema)