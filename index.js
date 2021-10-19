const express = require("express");
const bp = require("body-parser");
const qr = require("qrcode");

const app = express();

app.set("view engine", "ejs");
app.use(bp.urlencoded({extend:false}));
app.use(bp.json());

app.get("/", (req,res) => {
    res.render("index");
});

app.post("/scan", (req, res) =>{
    const url = req.body.url;
    if(url.lenght === 0) 
        res.send("Dados Inválidos!");
    qr.toDataURL(url, (err, src) => {
        if(err) res.send("Erro!");
        res.render("scan",{src});
    });
})

const port = 5000;
app.listen(port, () => console.log("Rodando..."));