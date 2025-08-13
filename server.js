const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const conectarDB = require('./src/config/db');

// Carrega variáveis de ambiente
dotenv.config();

// Conecta ao MongoDB
conectarDB();

const app = express();

// Middleware para JSON
app.use(express.json());

// Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api', require('./src/api/registros'));

// Middleware de erro
app.use((err, req, res, next) => {
  console.error('❌ Erro interno:', err.stack);
  res.status(500).json({ erro: 'Erro interno do servidor' });
});

// Porta
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📄 Cadastro: POST http://localhost:${PORT}/api/auth/register`);
  console.log(`🔐 Login: POST http://localhost:${PORT}/api/auth/login`);
  console.log(`📊 Dashboard: GET http://localhost:${PORT}/api/auth/dashboard`);
  console.log(`📡 Registros: GET http://localhost:${PORT}/api`);
});
