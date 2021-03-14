import filterIp from "./whitelistIp.mjs";

const filterFunc = ({ app, API_SERVICE_URL }) => {
  // Authorization
  app.use("", (req, res, next) => {
    const reqIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (filterIp.includes(reqIp)) {
      next();
    } else {
      res.sendStatus(403);
    }
  });
};

export default filterFunc;
