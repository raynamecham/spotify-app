const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.post("/login", (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/callback",
    clientId: "eb8b221a8f4d4ad2ab315d9dd2f66ffd",
    clientSecret: "7e546191f2d248b184bc5785d9c241cf",
  });
});
