const express = require("express");
const bp = require("body-parser");
const qr = require("qrcode");
const { json } = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bp.urlencoded({extend:false}));
app.use(bp.json());


app.get("/", (req,res) => {
    res.render("index");
});

app.post("/scan", (req, res) =>{
    const cep = req.body.cep;
    const logradoura = req.body.logradoura;
    const numero = req.body.numero;
    const bairro = req.body.bairro;
    const localidade = req.body.localidade;
    const uf = req.body.uf;
    const nome = req.body.nome;
    const funcao = req.body.funcao;
    const telefone = req.body.telefone;
    const email = req.body.email;
    const url = req.body.url;
    
    console.log(req.body);  
    
   /* if(url.lenght === 0) 
       res.send("Dados Inválidos!");
    qr.toDataURL(url, (err, src) => {
        if(err) res.send("Erro!");
        res.render("scan",{src});
    });*/
    res.render("scan",{corpo: req.body});
})

const port = 5000;
app.listen(port, () => console.log("Rodando..."));