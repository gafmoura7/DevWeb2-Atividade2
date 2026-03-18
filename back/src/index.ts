import express from 'express';
import cors from 'cors';
import pool from './db';

const app = express();
app.use(cors());
app.use(express.json());

// Rota concurso mais recente
app.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1'
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar concurso' });
  }
});

// Rota concurso por número
app.get('/:numero', async (req, res) => {
  const { numero } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM megasena WHERE concurso = $1',
      [numero]
    );
    if (result.rows.length === 0) {
      res.json({ message: `Não existem dados do concurso ${numero}` });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar concurso' });
  }
});

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});