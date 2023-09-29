const film = require("../Models/films")



exports.getFilms=async(req,res)=>{
try {
    const films=await film.find()
    res.status(200).send({msg:"films found successfully",films})
} catch (error) {
    res.status(400).send({msg:"error on film films",error})
}
}

// add film

exports.addFilm=async(req,res)=>{
    try {
        const{title,type,photo,rate,minAge,posterUrl}=req.body
        const newFilm = new film ({...req.body})
        newFilm.save()
        res.status(200).send({msg:"film added successfully",newFilm})
    } catch (error) {
        
    }
}

// delete film
exports.deleteFilm = async (req,res) =>{
    try {
        const {_id}=req.params
        await film.deleteOne({_id})
        res.status(200).send("deleted successfully")
    } catch (error) {
        res.status(400).send({msg:'cannot delete',error})
        
    }
}