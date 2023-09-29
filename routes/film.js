const express = require('express')
const { addFilm, getFilms, deleteFilm } = require('../Controllers/film')



// require router 

const router =express.Router()


//routes

//add film
router.post("/addFilm", addFilm)

//find films

router.get("/films",getFilms)

//delete film

router.delete("/deleteFilm/:_id",deleteFilm)

//export router

module.exports = router