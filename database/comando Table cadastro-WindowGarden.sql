CREATE TABLE IF NOT EXISTS plantas_cultivo (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    especie VARCHAR(100),
    categoria VARCHAR(50),
    sol_necessario VARCHAR(100),
    frequencia_rega VARCHAR(100),
    tipo_vaso VARCHAR(100)
);