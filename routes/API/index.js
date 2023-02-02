const router = require ("express").Router();
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const getNotes = ()=>{
    return readFile("db/db.json", "utf-8").then(rawNotes =>[].concat(JSON.parse(rawNotes)))
}
router.get("/notes", (req,res)=>{
    getNotes().then(notes =>res.json(notes)).catch(err => res.json(err))
})
router.post("/notes", (req,res)=>{
    getNotes().then(oldNotes =>{
        console.log(oldNotes)
        console.log(req.body)
        let newNotes = [...oldNotes, {title:req.body.title, text:req.body.text}]
        writeFile("db/db.json", JSON.stringify(newNotes)).then(()=> res.json({msg:"okay"}))
    })
})
router.delete("/notes/:id", (req,res)=>{

})

module.exports = router;