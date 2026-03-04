require("dotenv").config();
const app = require("./app");
const { getConfig } = require("./config");

const config = getConfig();

app.listen(config.app.port, () => {
  const missing = config.missing.length
    ? ` Missing env: ${config.missing.join(", ")}.`
    : "";

  // eslint-disable-next-line no-console
  console.log(`SmartReply running on port ${config.app.port}.${missing}`);
});
