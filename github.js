const request = require("request-promise");

const github = {
  token: null,

  getUser: function() {
    return request({
      method: "GET",
      uri: "https://api.github.com/user",
      json: true,
      headers: {
        Authorization: "Bearer " + github.token,
        "User-Agent": "Get Licence info from repos"
      }
    });
  }
};

function app(options) {
  github.token = options.token;
  return github.getUser();
}

app({ token: process.argv[2] }).then(function(result) {
  console.log(result);
});
