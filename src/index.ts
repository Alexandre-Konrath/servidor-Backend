import dotenv from 'dotenv'

import express from 'express'

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json())

app.get('/pedidos', (req, res) => {
  const { message } = req.body

  if (!message) return res.status(400).send({error: "sem o parâmetro message"})

  res.send({message});
})



app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`)
})
