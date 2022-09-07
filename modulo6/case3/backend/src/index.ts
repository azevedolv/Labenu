
import { app } from "./controller/app";
import { ProductRouter } from "./router/ProductRouter";

app.use('/product', ProductRouter)