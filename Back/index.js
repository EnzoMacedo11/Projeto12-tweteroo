import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const user = [];
const tweets = [];
let avatarG;

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  avatarG = avatar;

  if (!username || !avatar) {
    res.status(400).send({ message: "Insira todos os campos por favor " });
    return;
  }
  const userLocal = {
    username,
    avatar,
  };
  user.push(userLocal);
  res.status(201).send({ message: "Ok!" });
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  if (!username || !tweet) {
    res.status(400).send({ message: "Insira todos os campos por favor " });
    return;
  }

  const tweetLocal = {
    username,
    tweet,
  };
  tweets.push({ ...tweetLocal, avatar: avatarG });
  res.status(201).send({ message: "Ok!" });
});

app.get("/tweets", (req, res) => {
  let limite10 = tweets.slice(0, 10);
  res.send(limite10);
});

app.listen(5000);
