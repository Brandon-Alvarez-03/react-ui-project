const express = require("express");
const spotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post("/login", (req, res) => {
  const authorizationCode = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "73092f3c3afc421b9e3831fa6a219017",
    clientSecret: "3292aed78f154ae1b09418e5f9112b97",
  });

  spotifyApi
    .authorizationCodeGrant(authorizationCode)
    .then((data) => {
      res.json({
        access_token: data.body.access_token,
        refresh_token: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});
