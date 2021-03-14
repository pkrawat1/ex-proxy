import { app, API_SERVICE_URL } from "../../config.mjs";
import {createProxyMiddleware} from "http-proxy-middleware";

// Proxy endpoints
app.use(
  "/json_placeholder",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      [`^/json_placeholder`]: "",
    },
  })
);
