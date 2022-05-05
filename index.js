var md5 = require("md5");

exports.handler = async (event) => {
  const hash = md5("123 Main St");
  return "uploaded with cli, hash: " + hash;
};
