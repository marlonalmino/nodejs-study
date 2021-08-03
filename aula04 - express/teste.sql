/*Criar Tabelas*/
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

/*Inserir Dados*/
INSERT INTO usuarios(nome, email, idade) VALUES(
    'Igor Almino',
    'email@teste.com',
    15
);

/*Listar Dados*/
SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade = 15;

SELECT * FROM usuarios WHERE nome = 'Igor Almino';

SELECT * FROM usuarios WHERE idade >= 15;

/*Deletar Dados !! SEMPRE UTILIZAR WHERE !!*/
DELETE FROM usuarios WHERE nome = 'Breno Almino';

/*Atualizar Dados !! SEMPRE UTILIZAR WHERE !!*/
UPDATE usuarios SET nome = 'Test Name' WHERE nome = 'Enzo Almino';