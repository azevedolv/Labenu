import express, {Express} from 'express'
import cors from 'cors'

export const app: Express = express();

app.use(express.json());
app.use(cors());

// a função express() inicia a aplicação web com express
// os .use() ativam os módulos de Bodyparser e Cors
// esse código + essa importação para criar o servidor:
// por performance, é bom o servidor ser o último trecho de código do documento