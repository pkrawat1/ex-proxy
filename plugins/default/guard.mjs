import { app } from "../../config.mjs";

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
