import express, {Express, Request, Response} from "express"
//todo: create docker
import 'dotenv/config'

const app: Express = express();


const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
        res.send({
            "msg": "Hello world!!"
        })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})

