const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      
    password: '12345678',
    database: 'meu_jardim' 
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao banco de dados!');
});

app.get('/plantas', (req, res) => {
    const sql = "SELECT * FROM plantas_cultivo";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
