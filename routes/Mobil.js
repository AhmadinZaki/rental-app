const express = require('express');
const mobilModel = require('../models/Mobil.model')
const router = express.Router();

router.get('/', async (get,res) => {
    try{
        const mobils = await mobilModel.find();
        res.json(mobils);
    }catch(err){
        res.json({ message: err });
    }
})

router.post('/', async(req,res) => {
    const mobil = new mobilModel({
        Kode_Mobil: req.body.Kode_Mobil,
        Nama_Mobil: req.body.Nama_Mobil,
        Tarif_Per_Jam: req.body.Tarif_Per_Jam,
        Tarif_Per_Hari: req.body.Tarif_Per_Hari,
        Status_Mobil: req.body.Status_Mobil
    });

    try{
        const saveMobil = await mobil.save();
        res.json(saveMobil);
    }catch(err){
        res.json({ message: err });
    }
})

module.exports = router;