const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Lista todos os usuários (sem senha)
router.get('/', async (req, res) => {
  try {
    const usuarios = await User.find({}, '-senha -__v');
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar registros' });
  }
});

module.exports = router;
