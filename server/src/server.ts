import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';
const app = express();

app.use(cors());
app.use(express.json()) // para a API entender requisições no formato JSON
app.use(routes)

app.use('/uploads',express.static(path.resolve(__dirname,'..','uploads')))//express.static() => função pra retornar um arquivo estático
app.listen(3333)//definindo a porta

