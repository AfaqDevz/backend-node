import express from "express";
import userRoutes from "./routes/user.js"
const app = express();
const PORT = 4001;

app.use(express.json());

const data = [
    {
        id: 1,
        task: 'Do Home work!'
    },
    {
        id: 2,
        task: 'Go Sleep'
    },
    {
        id: 3,
        task: 'Do work'
    },
]

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    console.log(req);
    res.status(200).send(data);
    // res.send('Hello World First Api');
});

app.listen(PORT, () => {console.log('This is running on this port', PORT)})