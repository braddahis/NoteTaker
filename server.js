const express = require ("express");
const PORT = process.env.PORT || 3001
const app = express ();
const route = require("./routes")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(route)

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})
