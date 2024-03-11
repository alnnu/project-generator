import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"

const app: Express = express();


const port: Number = 3000;

app.get("/", (req: Request, res: Response) => {
        res.send({
            "msg": "Hello world!!"
        })
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
})

