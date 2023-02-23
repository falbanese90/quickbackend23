import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userstoreroutes from './handlers/users';

const app = express()
const address = 'localhost:3000';
const corsOptions = {
    origin: 'http://localhost:4000',
    optionsSuccessStatus: 200 
}

app.use(bodyParser.json())
app.use(cors(corsOptions))

app.get('/', async (req: Request, res: Response) => {
    res.send('Hello World')
})

userstoreroutes(app);

app.listen(3000, () => {
    console.log(`App is listening at ${address}`)
})