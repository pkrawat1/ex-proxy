import { app, PORT, HOST } from "./config.mjs";
import "./plugins/index.mjs";

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
