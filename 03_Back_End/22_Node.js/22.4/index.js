const express = require('express');

const hello = require('./controller/hello');
const Names = require('./controller/names')
const errorMiddleware = require('./middlewares/error')
const auth = require('./middlewares/auth')

const PORT = 3000;

const app = express();

app.use(express.json());


app.get('/hello', hello)
app.use('/names', auth, Names)

app.use(errorMiddleware)

app.listen(PORT, () => console.log(`aplicação rodando na porta ${PORT}`));