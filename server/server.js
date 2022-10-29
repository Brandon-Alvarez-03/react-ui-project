import express from "express";
import spotifyWebApi from "spotify-web-api-node";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "73092f3c3afc421b9e3831fa6a219017",
    clientSecret: "3292aed78f154ae1b09418e5f9112b97",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((error) => {
      res.sendStatus(400);
    });
});

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refresh_token;
  const spotifyApi = new spotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "73092f3c3afc421b9e3831fa6a219017",
    clientSecret: "3292aed78f154ae1b09418e5f9112b97",
    refreshToken
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
        console.log('Access Token refreshed Successfully');
        //Access token stored for use in future calls
    })
    .catch((error) => {
      console.log("Could not refresh access token", error)
      res.sendStatus(400)
    });
});

app.listen(3001);
