const express = require('express')
const router = express.Router()

const earth = {
    type: "earth",
    signs: ["Taurus", "Virgo", "Capricorn"], 
    traits: ["grounded", "helpful", "practical", "realistic", "materialistic", "dependable"]
}

router.get('/', (req, res) => {
    res.render('show.ejs', {element: earth})
})

router.get('/:sign', (req, res) => {
    res.render('sign', {sign: req.params.sign})
})

module.exports = router