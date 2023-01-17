const express = require("express");
const axios = require("axios");
const app = express();

const data = {
  sender: "daemon",
  message: "is it working??",
  recipients: ["233209414099", "233269861664"],
};

const config = {
  method: "post",
  url: "https://sms.arkesel.com/api/v2/sms/send",
  headers: {
    "api-key": "get ur key from arkesel.com",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (err) {
    console.log(err);
  });

app.listen("4000", () => {
  console.log("app running on port 4000");
});
