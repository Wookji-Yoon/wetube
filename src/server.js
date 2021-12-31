import "./db.js";

import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const app = express();

//PUG 넣기//
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

//middleware넣기//
const readForm = express.urlencoded({ extended: true });
app.use(readForm);
const logger = morgan("dev");
app.use(logger);

//Router 넣기//
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🐼`);

app.listen(PORT, handleListening);
