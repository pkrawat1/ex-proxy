import { createProxyMiddleware } from "http-proxy-middleware";
import morgan from "morgan";

const defaultFunc = ({ app, API_SERVICE_URL }) => {
  // Logging
  app.use(morgan("dev"));

  // Info GET endpoint
  app.get("/info", (req, res, next) => {
    res.send("This is a proxy service which proxies to json placeholder");
  });

  // Authorization
  app.use("", (req, res, next) => {
    if (req.headers.authorization) {
      next();
    } else {
      res.sendStatus(403);
    }
  });

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
};

export default defaultFunc;
