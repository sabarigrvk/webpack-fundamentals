import { join } from "path";
import express from "express";
import { CLIENT_BUILD_DIR, STATIC_DIR } from "config/paths";
import { renderer } from "./middleware";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(STATIC_DIR, express.static(join(CLIENT_BUILD_DIR, STATIC_DIR)));
app.use(renderer);
app.listen(PORT, () => {
  console.log("server is listening");
});
