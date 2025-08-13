// 📦 Importa o modelo de usuário e a função de criptografia
const Usuario = require('../models/Usuario');
const { criptografarSenha } = require('../utils/crypto');

// 📝 Função para registrar um novo usuário
const registrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  console.log('\n📨 Requisição recebida para registro de usuário...');
  console.log(`🔎 Dados recebidos: Nome: ${nome}, Email: ${email}`);

  try {
    // 🔒 Criptografa a senha antes de salvar
    const senhaCriptografada = await criptografarSenha(senha);

    // 🆕 Cria instância do modelo com os dados
    const novoUsuario = new Usuario({ nome, email, senha: senhaCriptografada });

    // 💾 Salva no banco de dados
    await novoUsuario.save();

    // ✅ Mensagem de sucesso para o terminal
    console.log('\n🎉 Novo usuário cadastrado com sucesso!');
    console.log(`👤 Nome: ${nome}`);
    console.log(`📧 Email: ${email}`);
    console.log(`🔐 Senha (criptografada): ${senhaCriptografada}\n`);

    // 🔙 Resposta para o front
    res.status(201).json({ mensagem: '✅ Usuário registrado com sucesso!' });

  } catch (error) {
    // ❌ Log de erro no terminal
    console.error('\n❌ Erro ao registrar usuário:', error.message);
    res.status(500).json({ mensagem: 'Erro interno.' });
  }
};

// 📤 Exporta a função para uso nas rotas
module.exports = { registrarUsuario };
