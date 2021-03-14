import { app, API_SERVICE_URL, PORT, HOST } from "./config.mjs";
import plugins from "./plugins/index.mjs";

const pluginConfig = {app, API_SERVICE_URL}

plugins.map(plugin => plugin(pluginConfig))

// Start the Proxy
app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
