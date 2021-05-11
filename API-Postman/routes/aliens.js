const express = require('express')
const router = express.Router()
const alien = require('./models/alien')

router.get('/' , async(req , res)=>{
    try {
        const Alien = await alien.find()
        res.json(Alien)

    } catch (error) {
        res.send('err ' + error)
    }
})

router.post('/' ,async(req , res) =>{
    const a1 = new alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
    try {
        const a2 = await a1.save()
        res.json(a2)
        
    } catch (error) {
        res.send("Error.....  " + error)
    }
})


module.exports = router