// require('dotenv').config()
import 'dotenv/config'
import express from 'express';
import logger from "./logger.js";
import morgan from "morgan";
const app = express();
const port = process.env.PORT||3000;
const morganFormat = ":method :url :status :response-time ms";

app.use(
    morgan(morganFormat, {
      stream: {
        write: (message) => {
          const logObject = {
            method: message.split(" ")[0],
            url: message.split(" ")[1],
            status: message.split(" ")[2],
            responseTime: message.split(" ")[3],
          };
          logger.info(JSON.stringify(logObject));
        },
      },
    })
  );
 

// Data from the backend
app.get("/", (req, res) => {
    res.send('hello from krish and his tea');
});

app.get("/twitter", (req, res) => {
    res.send('krishmonga');
});

// Data from the frontend
app.use(express.json());
let teadata = [];
let nextid = 1;

app.post('/teas', (req, res) => {
    const { name, price } = req.body;
    const newTea = { id: nextid++, name, price };
    teadata.push(newTea);
    res.status(201).send(newTea);
});
// app.get('/teas', (req, res) => {
//     const { name, price } = req.body;
//     const newTea = { id: nextid++, name, price };
//     teadata.push(newTea);
//     res.status(201).send(newTea);
// });


app.listen(port, () => {
    console.log(`Server is running at the port: ${port}...`);
});
