import { app } from "../../config.mjs";
import morgan from "morgan";

// Logging
app.use(morgan("dev"));
