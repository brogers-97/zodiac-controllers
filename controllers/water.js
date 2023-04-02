const express = require('express')
const router = express.Router()

const water = {
    type: "water",
    signs: ["Pisces", "Cancer", "Scorpio"], 
    traits: ["private", "mysterious", "pyshic", "charming", "emotional", "sensitive"]
}

router.get('/', (req, res) => {
    res.render('show.ejs', {element: water})
})

router.get('/:sign', (req, res) => {
    res.render('sign', {sign: req.params.sign})
})

module.exports = router