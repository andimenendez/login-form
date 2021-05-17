const express = require("express");
const path = require("path");
const app = express();

const PORT = 3056;

app.use(express.urlencoded({extended:true}));
app.use(express.static (__dirname));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/saludar",function(req,res) {
    res.send(`Hola, ${req.body.nombre} "${req.body.apodo}" ${req.body.apellido}`);
});
app.listen(PORT, function(){
console.log(`servidor iniciando en puerto ${PORT}...`);
});