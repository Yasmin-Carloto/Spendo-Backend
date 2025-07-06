const { Goal, Transaction } = require('../database/models');
const { Op } = require('sequelize');

async function getGoalsWithProgress(userId) {
  const goals = await Goal.findAll({ where: { userId } });

  const metasComProgresso = await Promise.all(goals.map(async goal => {
    const totalCategoria = await Transaction.sum('valor', {
      where: {
        userId,
        categoria: goal.categoria,
        tipo: 'saida'
      }
    });

    const progresso = totalCategoria || 0;

    return {
      id: goal.id,
      categoria: goal.categoria,
      valorMeta: goal.valor,
      progresso,
      atingido: progresso >= goal.valor
    };
  }));

  return metasComProgresso;
}

module.exports = { getGoalsWithProgress };
