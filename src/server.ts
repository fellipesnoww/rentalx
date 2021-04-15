import express, { json } from "express";
import {categoriesRoutes} from './routes/categories.routes';

const app = express();

app.use(json());
app.use(categoriesRoutes);

app.get('/', (request, response) =>  {
    return response.json({message: "Hello World!"});
});

app.listen(3333, () => console.log("SERVER IS RUNNING!"));