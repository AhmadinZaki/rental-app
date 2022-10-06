const express = require('express');
const userModel = require('../models/Users.model')
const router = express.Router();

// GET Data User
router.get('/', async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
})

// Post Data User
router.post('/', async (req, res) => {
    const user = new userModel({
        Kode_User: req.body.Kode_User,
        Nama_User: req.body.Nama_User,
        Pwd_User: req.body.Pwd_User,
        Status_User: req.body.Pwd_User
    });

    try {
        const saveUser = await user.save()
        res.json(saveUser)
    } catch (err) {
        res.json({ message: err });
    }

});

// Get Spesifik post by ID
router.get('/:userId', async (req, res) => {
    try {
        const getUser = await userModel.findById(req.params.userId);
        res.json(getUser);
    } catch (err) {
        res.json({ message: err });
    }
})

// delete user
router.delete('/:userId', async (req, res) => {
    try {
        const delUser = await userModel.remove({ _id: req.params.userId });
        res.json(delUser)
    } catch (err) {
        res.json({ message: err });
    }
});

// update user
router.patch('/:userId', async (req, res) => {
    try {
        const updateUser = await userModel.updateMany({ _id: req.params.userId },
            { $set: { Kode_User: req.body.Kode_User ,
                     Nama_User: req.body.Nama_User ,
                     Pwd_User: req.body.Pwd_User ,
                     Status_User: req.body.Pwd_User } 
            }
            );
res.json(updateUser)
    } catch (err) {
    res.json({ message: err });
}
})


module.exports = router;