const express = require("express");
const cors = require("cors");
const logger = require("morgan");

import { router } from "./routes/index";

export const app = express();

/**
 * Config middlewares
 */
app.use(express.json());
app.use(cors());
app.use(logger("dev"));

/**
 * Integra o endpoint na aplicação
 */
app.use("/", router);
